import { parse } from "valibot";
import { getConfiguredCache } from "../../utils/money-clip";
import { roundMoney } from "../../utils/number";
import { uniqueId } from "../../utils/utils";
import {
  ItemParamSchema,
  ItemSchema,
  ItemUnitParamSchema,
  ItemUnitSchema,
  ItemWeightParamSchema,
  ItemWeightSchema,
  ItemsSchema,
  fallbackArrayItemsSchema,
  itemParamSchema,
  itemSchema,
} from "./items.schema";

export const itemsStore = getConfiguredCache({
  version: 1,
  maxAge: Infinity,
  dbName: "discount-calculator-items",
  storeName: "items",
});

export function parseItemParamSchema(item: unknown): ItemParamSchema {
  return parse(itemParamSchema, item);
}

export function parseItemsSchema(item: unknown): ItemsSchema {
  return parse(fallbackArrayItemsSchema, item);
}

export function itemFactory(param: ItemParamSchema): ItemSchema {
  const item =
    param.type === "unit"
      ? createItemUnitSchema(param)
      : createWeightItemSchema(param);
  return parse(itemSchema, item);
}

function createItemUnitSchema(item: ItemUnitParamSchema): ItemUnitSchema {
  const priceBeforeDiscount = roundMoney(item.unitaryPrice * item.quantity);
  const saving = roundMoney(priceBeforeDiscount * (item.discount / 100));
  return {
    ...item,
    id: uniqueId(),
    saving,
    priceBeforeDiscount,
    salesPrice: priceBeforeDiscount - saving,
  } satisfies ItemUnitSchema;
}

function createWeightItemSchema(item: ItemWeightParamSchema): ItemWeightSchema {
  const BASE_GRAMS = 1000;
  const priceBeforeDiscount = roundMoney(
    (item.basePrice / BASE_GRAMS) * item.quantity
  );
  const saving = roundMoney(priceBeforeDiscount * (item.discount / 100));
  return {
    ...item,
    id: uniqueId(),
    saving,
    priceBeforeDiscount,
    salesPrice: priceBeforeDiscount - saving,
  } satisfies ItemWeightSchema;
}

export function calculateTotal(items: { salesPrice: number }[]) {
  return items.reduce((acc, item) => acc + item.salesPrice, 0);
}

export function calculateSaved(items: { saving: number }[]) {
  return items.reduce((acc, item) => acc + item.saving, 0);
}
