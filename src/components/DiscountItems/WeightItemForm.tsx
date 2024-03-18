import { useRef } from "react";
import { useResetForm } from "../hooks/userResetForm";
import { DiscountItemForm } from "./DiscountItemForm";

export function WeightItemForm() {
  const form = useRef<HTMLFormElement>(null);
  useResetForm(form);
  return (
    <DiscountItemForm
      type="weight"
      quantityLabel="Grams"
      quantityField="quantity"
      quantityDeafultValue={null}
      priceLabel="Price x KG"
      priceField="basePrice"
    />
  );
}
