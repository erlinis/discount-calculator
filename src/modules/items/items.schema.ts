import {
  number,
  object,
  string,
  optional,
  merge,
  Output,
  array,
  union,
  literal,
  coerce,
  fallback,
} from "valibot";

const stringToNumberSchema = coerce(number(), Number);

const sharedItemSchema = object({
  name: optional(string()),
  discount: fallback(stringToNumberSchema, 0),
  quantity: fallback(stringToNumberSchema, 1),
});

export const itemUnitParamSchema = merge([
  sharedItemSchema,
  object({
    type: literal("unit"),
    unitaryPrice: stringToNumberSchema,
  }),
]);

export const itemWeightParamSchema = merge([
  sharedItemSchema,
  object({
    type: literal("weight"),
    basePrice: stringToNumberSchema,
  }),
]);

export const itemParamSchema = union([
  itemUnitParamSchema,
  itemWeightParamSchema,
]);

const sharedCalculatedItemSchema = object({
  id: string(),
  priceBeforeDiscount: number(),
  salesPrice: number(),
  saving: number(),
});

export const itemUnitSchema = merge([
  itemUnitParamSchema,
  sharedCalculatedItemSchema,
]);

export const itemWeightSchema = merge([
  itemWeightParamSchema,
  sharedCalculatedItemSchema,
]);

export const itemSchema = union([itemUnitSchema, itemWeightSchema]);
export const itemsSchema = array(itemSchema);

export const fallbackArrayItemsSchema = fallback(itemsSchema, []);

export type ItemUnitParamSchema = Output<typeof itemUnitParamSchema>;
export type ItemWeightParamSchema = Output<typeof itemWeightParamSchema>;
export type ItemParamSchema = Output<typeof itemParamSchema>;
export type ItemUnitSchema = Output<typeof itemUnitSchema>;
export type ItemWeightSchema = Output<typeof itemWeightSchema>;
export type ItemSchema = Output<typeof itemSchema>;
export type ItemsSchema = Output<typeof itemsSchema>;
