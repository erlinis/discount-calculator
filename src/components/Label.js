export default function Label({ inputFor = '', text, className = '' }) {
  return (
    <label htmlFor={inputFor} className={`label ${className}`}>
      {text}:
    </label>
  )
}
