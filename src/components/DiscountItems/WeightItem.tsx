import { ItemWeightSchema } from "../../modules/items/items.schema";
import { formatPrice } from "../../utils/format";
import { DiscountItem } from "./DiscountItem";

function BasePrice({ discountItem }: { discountItem: ItemWeightSchema }) {
  return (
    <span>
      ({formatPrice(discountItem.basePrice)} | {discountItem.quantity} gr)
    </span>
  );
}

export function DiscountWeightItem({
  discountItem,
  id,
}: { discountItem: ItemWeightSchema; id: string }) {
  return (
    <DiscountItem
      id={id}
      discountItem={discountItem}
      priceElement={<BasePrice discountItem={discountItem} />}
    />
  );
}
