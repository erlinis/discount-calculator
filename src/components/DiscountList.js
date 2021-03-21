import PropTypes from 'prop-types'
import Label from '../components/Label'
import sum from '../lib/sum'
import map from '../lib/map'
import compose from '../lib/compose'
import { formatNumber } from '../lib/format'
import { shouldShowTotal } from '../lib/discountCalculation'

const mapSum = (mapperFn) => compose(sum, map(mapperFn))

function renderRow(row, onDeleteDiscount) {
  return (
    <article key={row.id} className="box box-ticket relative">
      <div className="deal-box">
        <header className="deal-header">
          <div className="tag">
            {row.discount}
            <span> %</span>
          </div>

          <div className="title">{row.description}</div>

          <div>
            <button
              className="icon-button"
              onClick={() => onDeleteDiscount(row.id)}
            >
              <svg className="icon">
                <use xlinkHref="#icon-bin">
                  <title>Remove</title>
                </use>
              </svg>
            </button>
          </div>
        </header>

        <div className="deal-body grid grid-cols-2">
          <Label text="Initial Price" className="text-secondary" />
          <div className="value-col text-secondary">
            $ {formatNumber(row.price)}{' '}
          </div>

          <Label text="Amount Saved" className="text-light text-sm" />
          <div className="value-col text-light text-sm">
            $ {formatNumber(row.saving)}
          </div>
        </div>
        <div className="cutting-line "></div>
        <div className="deal-total grid grid-cols-2">
          <Label text="Sale Price" className="inline-grid items-end" />
          <div className="value-col items-end text-primary">
            $ {formatNumber(row.salePrice)}
          </div>
        </div>
      </div>
    </article>
  )
}

function renderTotal(discounts) {
  var totalPrices = mapSum((item) => item.price)(discounts)
  var totalSaving = mapSum((item) => item.saving)(discounts)
  var totalSalePrices = mapSum((item) => item.salePrice)(discounts)

  return (
    <div>
      <div className="total-box grid grid-cols-2">
        <Label text="Total" className="text-primary font-bold text-2xl " />
        <div className="value-col text-secondary font-bold text-2xl">
          $ {formatNumber(totalSalePrices)}
        </div>

        <Label text="Total Saved" className="text-light text-lg" />
        <div className="value-col text-light text-lg">
          $ {formatNumber(totalSaving)}
        </div>
      </div>
    </div>
  )
}

export default function DiscountList({ discounts, onDeleteDiscount }) {
  return (
    <div>
      {discounts.map((item) => renderRow(item, onDeleteDiscount))}
      {shouldShowTotal(discounts) ? renderTotal(discounts) : null}
    </div>
  )
}

DiscountList.propTypes = {
  discounts: PropTypes.array.isRequired,
  onDeleteDiscount: PropTypes.func.isRequired,
}
