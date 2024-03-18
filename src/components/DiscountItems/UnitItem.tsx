import { ItemUnitSchema } from "../../modules/items/items.schema";
import { formatPrice } from "../../utils/format";
import { DiscountItem } from "./DiscountItem";

function UnitaryPrice({ discountItem }: { discountItem: ItemUnitSchema }) {
  return (
    <span>
      ({formatPrice(discountItem.unitaryPrice)} x {discountItem.quantity})
    </span>
  );
}

export function DiscountUnitItem({
  discountItem,
  id,
}: { discountItem: ItemUnitSchema; id: string }) {
  return (
    <DiscountItem
      id={id}
      discountItem={discountItem}
      priceElement={<UnitaryPrice discountItem={discountItem} />}
    />
  );
}
