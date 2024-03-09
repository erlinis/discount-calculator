import * as idbKeyVal from "idb-keyval";

type Options = {
  version: number;
  maxAge: number;
  dbName?: string;
  storeName?: string;
  lib?: idbKeyVal.UseStore;
};

const defaultOpts = { maxAge: Infinity, version: 0, lib: idbKeyVal };
const getOpts = (passedOptions: Options) =>
  Object.assign({}, defaultOpts, passedOptions);

export const keyValLib = idbKeyVal;

export const get = (
  key: IDBValidKey,
  opts: Options,
  store: idbKeyVal.UseStore
) => {
  const { maxAge, version, lib } = getOpts(opts);
  return lib
    .get(key, store)
    .then(JSON.parse)
    .then((parsed) => {
      const age = Date.now() - parsed.time;
      if (age > maxAge || version !== parsed.version) {
        lib.del(key, store);
        return null;
      }
      return parsed.data;
    })
    .catch(() => null);
};

export const set = (
  key: IDBValidKey,
  data: unknown,
  opts: Options,
  store: idbKeyVal.UseStore
) => {
  const { lib, version } = getOpts(opts);
  return lib
    .set(
      key,
      JSON.stringify({
        version,
        time: Date.now(),
        data,
      }),
      store
    )
    .catch((e) => null);
};

export const getAll = (specs: Options, store: idbKeyVal.UseStore) => {
  const opts = getOpts(specs);
  let keys: IDBValidKey[];
  return opts.lib
    .keys(store)
    .then((retrievedKeys) => {
      keys = retrievedKeys;
      return Promise.all(keys.map((key) => get(key, opts, store)));
    })
    .then((data) =>
      data.reduce((acc, bundleData, index) => {
        if (bundleData) {
          //@ts-expect-error
          acc[keys[index]] = bundleData;
        }
        return acc;
      }, {})
    )
    .catch(() => {});
};

export const getConfiguredCache = (specs: Options) => {
  const opts = getOpts(specs);
  let store: idbKeyVal.UseStore;
  if (opts.dbName && opts.storeName) {
    store = idbKeyVal.createStore(opts.dbName, opts.storeName);
  }
  return {
    get: (key: IDBValidKey) => get(key, opts, store),
    set: (key: IDBValidKey, val: unknown) => set(key, val, opts, store),
    getAll: () => getAll(opts, store),
    del: (key: IDBValidKey) => opts.lib.del(key, store),
    clear: () => opts.lib.clear(store),
    keys: () => opts.lib.keys(store),
  };
};

export type StoreCache = ReturnType<typeof getConfiguredCache>;
