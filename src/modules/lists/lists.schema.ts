import {
  object,
  string,
  union,
  literal,
  Output,
  array,
  record,
  number,
  fallback,
  coerce,
} from "valibot";

const currencies = union([literal("USD"), literal("EUR"), literal("GBP")]);
const stringToNumberSchema = coerce(number(), Number);

export const listSchema = object({
  id: string(),
  name: string(),
  store: string(),
  currency: currencies,
  createdAt: string(),
  total: fallback(stringToNumberSchema, 0),
});
export const listStoreSchema = record(listSchema);
export const listsSchema = array(listSchema);

export type ListSchema = Output<typeof listSchema>;
