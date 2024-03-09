import { Form } from "react-router-dom";
import { Button } from "../button/Button";
import { Label, TextInput } from "../forms/Forms";
import { useRef } from "react";
import { useResetForm } from "../hooks/userResetForm";

export function UnitItemForm() {
  const form = useRef<HTMLFormElement>(null);
  useResetForm(form);
  return (
    <Form id="unitForm" method="post" ref={form}>
      <input type="hidden" name="type" value="unit" />
      <div className="grid grid-cols-4 gap-3 mb-2">
        <div className="col-span-3">
          <Label htmlFor="name">Name</Label>
          <TextInput id="name" name="name" max="100" type="text" />
        </div>{" "}
        <div className="">
          <Label htmlFor="name">Units</Label>
          <TextInput
            id="quantity"
            name="quantity"
            placeholder="1"
            type="number"
            min="0"
            max="10000"
            defaultValue={1}
            required
          />
        </div>
      </div>{" "}
      <div className="grid grid-cols-5 gap-3 col-span-4">
        <div className="col-span-3">
          <Label htmlFor="unitaryPrice">Price</Label>
          <TextInput
            type="number"
            id="unitaryPrice"
            name="unitaryPrice"
            min="0.1"
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
        type="submit"
        form="unitForm"
        className="mt-4"
      >
        Save
      </Button>
    </Form>
  );
}
