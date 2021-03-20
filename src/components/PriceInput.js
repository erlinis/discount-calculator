export default function PriceInput({ priceInputRef, onChange, value }) {
  return (
    <input
      className="input"
      type="number"
      id="price"
      name="price"
      min="1"
      max="1000000000000"
      placeholder="0"
      ref={priceInputRef}
      onChange={onChange}
      value={value}
    />
  )
}
