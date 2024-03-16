import { useRef } from "react";
import { Form } from "react-router-dom";
import { Button } from "../button/Button";
import { Label, TextInput } from "../forms/Forms";
import { useResetForm } from "../hooks/userResetForm";

export function DiscountItemForm({
  type,
  quantityLabel,
  quantityField,
  quantityDeafultValue,
  priceLabel,
  priceField,
}: {
  type: string;
  quantityLabel: string;
  quantityField: string;
  quantityDeafultValue: number | null;
  priceLabel: string;
  priceField: string;
}) {
  const form = useRef<HTMLFormElement>(null);
  useResetForm(form);

  const formName = `${type}ItemForm`;

  return (
    <Form id={formName} method="post" ref={form}>
      <input type="hidden" name="type" value={type} />
      <div className="grid grid-cols-4 gap-3 mb-2">
        <div className="col-span-3">
          <Label htmlFor="name">Name</Label>
          <TextInput id="name" name="name" max="100" type="text" />
        </div>{" "}
        <div className="">
          <Label htmlFor="name">{quantityLabel}</Label>
          <TextInput
            id={quantityField}
            name={quantityField}
            placeholder={quantityDeafultValue?.toString() || ""}
            type="number"
            min="0"
            max="10000"
            defaultValue={quantityDeafultValue || ""}
            required
          />
        </div>
      </div>{" "}
      <div className="grid grid-cols-5 gap-3 col-span-4">
        <div className="col-span-3">
          <Label htmlFor="unitaryPrice">{priceLabel}</Label>
          <TextInput
            type="number"
            id={priceField}
            name={priceField}
            max="1000000000000"
            step="0.001"
            required
            placeholder="0.00"
          />
        </div>

        <div className="col-span-2">
          <Label htmlFor="discount">Discount %</Label>
          <TextInput
            type="number"
            id="discount"
            name="discount"
            min="0"
            max="100"
            defaultValue={0}
            required
          />
        </div>
      </div>
      <Button
        block={true}
        variant="primary"
        shape="rounded"
        type="submit"
        form={formName}
        className="mt-4"
      >
        Save
      </Button>
    </Form>
  );
}
