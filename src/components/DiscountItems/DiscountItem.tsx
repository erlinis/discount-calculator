import { ReactNode } from "react";
import { Form } from "react-router-dom";
import { ItemSchema } from "../../modules/items/items.schema";
import { formatPrice } from "../../utils/format";
import { Button } from "../button/Button";
import { Card, CardBody } from "../card/Card";
import { Icon } from "../icon/Icon";
import { Separator } from "../separator/Separator";
import styles from "./DiscountItem.module.css";

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
    <div className={styles["ticket-shadow"]}>
      <Card className={styles.ticket}>
        <header className="justify-space-between flex gap-2 px-4">
          <div className="text-primary bg-primary-200 flex h-12 w-14 shrink-0 items-center justify-center rounded-b-[15px] font-semibold">
            {discountItem.discount}
            <sub className="text-xs"> %</sub>
          </div>

          <div className="text-secondary flex flex-1 items-center text-lg font-semibold">
            {discountItem.name}
          </div>

          <div className="flex shrink-0">
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
                className="text-third-400 flex-1"
                value="delete"
                shape="square"
              >
                <Icon iconName="bin" />
              </Button>
            </Form>
          </div>
        </header>

        <CardBody className="grid grid-cols-3 items-center gap-0 pb-0">
          <span className="text-secondary flex-1 text-lg font-medium">
            Price
          </span>

          <div className="col-start-2 col-end-4 flex items-center justify-end gap-2">
            <div className="text-third overflow-hidden text-ellipsis whitespace-nowrap align-baseline text-sm">
              {priceElement}
            </div>
            <div className="text-secondary flex justify-end text-lg font-semibold">
              {formatPrice(discountItem.priceBeforeDiscount)}
            </div>
          </div>

          <span className="text-gray-light text-sm font-medium">Saving</span>
          <div className="text-gray-light col-start-2 col-end-4 flex justify-end text-sm font-medium">
            {formatPrice(discountItem.saving)}
          </div>
        </CardBody>

        <Separator />

        <div className="items-top mb-2 grid grid-cols-2 px-5">
          <span className="text-secondary flex justify-start overflow-hidden text-ellipsis whitespace-nowrap text-lg font-semibold">
            Sale Price
          </span>
          <div className="text-primary flex justify-end text-lg font-semibold">
            {formatPrice(discountItem.salesPrice)}
          </div>
        </div>
      </Card>
    </div>
  );
}
