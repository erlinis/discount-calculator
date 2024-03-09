export function roundMoney(amount: number): number {
  return parseFloat(`${Math.round(parseFloat(`${amount}e+2`))}e-2`);
}
