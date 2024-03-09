import { object, string, union, literal, Output, array, record } from "valibot";

const currencies = union([literal("USD"), literal("EUR"), literal("GBP")]);

export const listSchema = object({
  id: string(),
  name: string(),
  store: string(),
  currency: currencies,
  createdAt: string(),
});
export const listStoreSchema = record(listSchema);
export const listsSchema = array(listSchema);

export type ListSchema = Output<typeof listSchema>;
