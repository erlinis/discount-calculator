import PropTypes from 'prop-types';
import DiscountItem from '../components/DiscountItem';
import Label from '../components/Label';
import compose from '../lib/compose';
import { shouldShowTotal } from '../lib/discountCalculation';
import { formatPrice } from '../lib/format';
import map from '../lib/map';
import sum from '../lib/sum';

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
  );
}

const mapSum = (mapperFn) => compose(sum, map(mapperFn));

function renderTotal(discounts) {
  var totalSaving = mapSum((item) => item.saving)(discounts);
  var totalSalePrices = mapSum((item) => item.salePrice)(discounts);

  return (
    <div>
      <div className="total-box grid grid-cols-2">
        <Label text="Total" className="text-secondary text-lg" />
        <div className="value-col text-secondary text-lg">
          {formatPrice(totalSalePrices + totalSaving)}
        </div>

        <Label text="(-) Discounts" className="text-secondary text-lg" />
        <div className="value-col text-light text-lg">
          {formatPrice(totalSaving)}
        </div>

        <Label text="Total to pay" className="text-secondary text-2xl" />
        <div className="value-col text-primary text-2xl">
          {formatPrice(totalSalePrices)}
        </div>
      </div>
    </div>
  );
}

DiscountList.propTypes = {
  discounts: PropTypes.array.isRequired,
  onDeleteDiscount: PropTypes.func.isRequired,
};
