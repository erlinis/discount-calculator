import { useRef } from "react";
import { useResetForm } from "../hooks/userResetForm";
import { DiscountItemForm } from "./DiscountItemForm";

export function UnitItemForm() {
  const form = useRef<HTMLFormElement>(null);
  useResetForm(form);
  return (
    <DiscountItemForm
      type="unit"
      quantityLabel="Units"
      quantityField="quantity"
      quantityDeafultValue={1}
      priceLabel="Price"
      priceField="unitaryPrice"
    />
  );
}
