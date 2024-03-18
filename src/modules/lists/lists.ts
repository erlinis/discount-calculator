import { parse } from "valibot";
import {
  ListSchema,
  listSchema,
  listStoreSchema,
  listsSchema,
} from "./lists.schema";
import { getConfiguredCache } from "../../utils/money-clip";

export const parseList = (data: unknown): ListSchema => {
  return parse(listSchema, data);
};

export const parseListStore = (data: unknown): Record<string, ListSchema> => {
  return parse(listStoreSchema, data);
};

export const parseListAll = (data: unknown): Array<ListSchema> => {
  return parse(listsSchema, data);
};

export const listsStore = getConfiguredCache({
  version: 1,
  maxAge: Infinity,
  dbName: "discount-calculator",
  storeName: "lists",
});
