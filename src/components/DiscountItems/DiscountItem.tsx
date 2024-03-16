import { ReactNode } from "react";
import { Form } from "react-router-dom";
import { ItemSchema } from "../../modules/items/items.schema";
import { formatPrice } from "../../utils/format";
import { Button } from "../button/Button";
import { Card, CardBody } from "../card/Card";
import { Icon } from "../icon/Icon";
import { SeparatorRound } from "../separator/Separator";

export function DiscountItem({
  id,
  discountItem,
  priceElement,
}: {
  id: string;
  discountItem: ItemSchema;
  priceElement: ReactNode;
}) {
  return (
    <Card>
      <header className="flex gap-2 justify-space-between px-4">
        <div className="text-primary bg-primary-200 font-semibold h-12 w-14 rounded-b-[15px] flex items-center justify-center shrink-0">
          {discountItem.discount}
          <sub className="text-xs"> %</sub>
        </div>

        <div className="flex-1 flex items-center text-secondary text-lg font-semibold">
          {discountItem.name}
        </div>

        <div className="shrink-0 flex">
          <Form
            method="post"
            className="flex items-center"
            action={`/lists/${id}/items/${discountItem.id}`}
          >
            <input type="hidden" name="_intent" value="delete" />
            <input type="hidden" name="id" value={discountItem.id} />
            <Button
              type="submit"
              variant="none"
              className="flex-1 text-third-400"
              value="delete"
              shape="square"
            >
              <Icon iconName="bin" />
            </Button>
          </Form>
        </div>
      </header>

      <CardBody className="grid grid-cols-3 gap-0 items-center pb-0">
        <span className="flex-1 text-secondary text-lg font-medium">Price</span>

        <div className="col-start-2 col-end-4 flex items-center justify-end gap-2">
          <div className="text-sm text-third align-baseline">
            {priceElement}
          </div>
          <div className="text-secondary flex justify-end text-lg font-semibold">
            {formatPrice(discountItem.priceBeforeDiscount)}
          </div>
        </div>

        <span className="text-gray-light text-sm font-medium">Saving</span>
        <div className="col-start-2 col-end-4 text-gray-light text-sm font-medium flex justify-end">
          {formatPrice(discountItem.saving)}
        </div>
      </CardBody>

      <SeparatorRound className="" />

      <div className="grid grid-cols-2 items-top px-5 mb-2">
        <span className="flex justify-start text-secondary text-lg font-semibold">
          Sale Price
        </span>
        <div className="flex justify-end text-primary text-lg font-semibold">
          {formatPrice(discountItem.salesPrice)}
        </div>
      </div>
    </Card>
  );
}
