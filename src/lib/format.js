export function formatNumber (value) {
  return new Intl.NumberFormat('de-DE').format(value)
}