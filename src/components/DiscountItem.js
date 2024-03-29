import PropTypes from 'prop-types'
import Label from '../components/Label'
import { formatPrice } from '../lib/format'

export default function DiscountItem({ discountItem, onDeleteDiscount }) {
  return (
    <article className="box relative">
      <div className="discount-item__box">
        <header className="discount-item__header">
          <div className="tag">
            {discountItem.discount}
            <span> %</span>
          </div>

          <div className="title">
            {discountItem.description} &#215; {discountItem.amount}
          </div>

          <div>
            <button className="icon-button" onClick={() => onDeleteDiscount(discountItem.id)}>
              <svg className="icon">
                <use xlinkHref="#icon-bin">
                  <title>Remove</title>
                </use>
              </svg>
            </button>
          </div>
        </header>

        <div className="discount-item__body grid grid-cols-2">
          <Label text="Initial Price" className="text-secondary" />
          <div className="value-col text-secondary">
            {discountItem.amount > 1 ? (
              <span className="text-xs text-gray-500">
                ({formatPrice(discountItem.price)} × {discountItem.amount})
              </span>
            ) : null}{' '}
            {formatPrice(discountItem.price * discountItem.amount)}
          </div>

          <Label text="Amount Saved" className="text-light text-sm" />
          <div className="value-col text-light text-sm">{formatPrice(discountItem.saving)}</div>
        </div>
        <div className="cutting-line "></div>
        <div className="discount-item__total grid grid-cols-2">
          <Label text="Sale Price" className="inline-grid items-end" />
          <div className="value-col items-end text-primary">
            {formatPrice(discountItem.salePrice)}
          </div>
        </div>
      </div>
    </article>
  )
}

DiscountItem.propTypes = {
  discountItem: PropTypes.object.isRequired,
  onDeleteDiscount: PropTypes.func.isRequired,
}
