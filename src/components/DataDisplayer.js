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
            <source
              srcset="images/tags/tag-discount-2x.png 2x,
                     images/tags/tag-discount-3x.png 3x"
            />
            <img src="images/tags/tag-discount-1x.png" alt="tag" />
          </picture>

          <span className="">{discount}</span>
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
