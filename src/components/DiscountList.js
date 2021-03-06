import PropTypes from 'prop-types'
import DiscountItem from '../components/DiscountItem'
import Label from '../components/Label'
import sum from '../lib/sum'
import map from '../lib/map'
import compose from '../lib/compose'
import { formatNumber } from '../lib/format'
import { shouldShowTotal } from '../lib/discountCalculation'

const mapSum = (mapperFn) => compose(sum, map(mapperFn))

function renderTotal(discounts) {
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
      {discounts.map((item) => (
        <DiscountItem
          key={item.id}
          discountItem={item}
          onDeleteDiscount={onDeleteDiscount}
        />
      ))}
      {shouldShowTotal(discounts) ? renderTotal(discounts) : null}
    </div>
  )
}

DiscountList.propTypes = {
  discounts: PropTypes.array.isRequired,
  onDeleteDiscount: PropTypes.func.isRequired,
}
