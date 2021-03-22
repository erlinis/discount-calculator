import PropTypes from 'prop-types'
import { formatNumber } from '../lib/format'

export default function DataDisplayer({
  saving,
  discount,
  price,
  salePrice,
  description,
}) {
  return (
    <div className="box">
      <div className="discount-box flex flex-col align-items-center justify-center">
        <div className="discount-tag">
          <picture>
            <source srcset="images/tags/discount-tag-2x.png 2x, images/tags/discount-tag-3x.png 3x" />
            <img
              src="images/tags/discount-tag-1x.png"
              alt="tag"
              width="67"
              height="35"
            />
          </picture>

          <span className="text-primary">
            {discount} <small>%</small>
          </span>
        </div>

        <div className="text-center">
          <div className="text-secondary text-sm">You will pay:</div>
          <div className="sale-price">{formatNumber(salePrice)} </div>
          <div className="text-light text-sm">
            You save: {formatNumber(saving)}
          </div>
        </div>
      </div>
    </div>
  )
}

DataDisplayer.propTypes = {
  price: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  saving: PropTypes.number.isRequired,
  salePrice: PropTypes.number.isRequired,
  description: PropTypes.string,
}
