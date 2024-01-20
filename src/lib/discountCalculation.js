export function calculateSaving(price, discount) {
  return price * (discount / 100);
}

/**
 *
 * @param {number} price Item unit price
 * @param {number} amount Amount of items
 * @param {number} saving percentage of discount
 * @returns
 */
export function calculateSalePrice(price, amount, saving) {
  const a = amount <= 0 ? 1 : amount;
  return price * a - saving;
}

export function shouldShowTotal(discounts) {
  return discounts.length > 1;
}
