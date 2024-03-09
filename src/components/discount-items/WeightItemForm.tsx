import { useRef } from "react";
import { Form } from "react-router-dom";
import { Button } from "../button/Button";
import { Label, TextInput } from "../forms/Forms";
import { useResetForm } from "../hooks/userResetForm";

export function WeightItemForm() {
  const form = useRef<HTMLFormElement>(null);
  useResetForm(form);
  return (
    <Form id="weightForm" method="post" ref={form}>
      <input type="hidden" name="type" value="weight" />
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-3">
          <Label htmlFor="name">Name</Label>
          <TextInput id="name" name="name" max="100" type="text" />
        </div>{" "}
        <div className="">
          <Label htmlFor="name">Grams</Label>
          <TextInput
            id="quantity"
            name="quantity"
            placeholder="1"
            type="number"
            min="0"
            defaultValue={1}
            required
          />
        </div>
      </div>{" "}
      <div className="grid grid-cols-5 gap-3 col-span-4">
        <div className="col-span-3">
          <Label htmlFor="basePrice">Price x KG</Label>
          <TextInput
            type="number"
            id="basePrice"
            name="basePrice"
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
        form="weightForm"
        className="mt-4"
      >
        Save
      </Button>
    </Form>
  );
}
