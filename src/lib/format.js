export function formatNumber(value) {
  return new Intl.NumberFormat('de-DE').format(value);
}

export function formatPrice(value) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}
