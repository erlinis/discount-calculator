export function calculateSaving(price, discount) {
  return price * (discount / 100)
}

export function calculateSalePrice(price, saving) {
  return price - saving
}

export function shouldShowTotal(discounts) {
  return discounts.length > 1
}
