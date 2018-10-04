import React from 'react';
import PropTypes from 'prop-types';
import Label from '../components/Label';
import sum from 'lodash/sum';

import { formatNumber } from '../lib/format';

function renderRow(row, onDeleteDiscount){
  return (
    <div key={row.id}>
      <div className="bg-white border border-dotted border-grey-light">
        <div className="flex justify-start">
          <div className="rounded-r-lg bg-orange p-2 mt-2 text-xs text-white"> {row.discount} % OFF </div>
        </div>

        <div className="flex justify-start text-sm pt-2">
          <div className="w-1/3">
            <Label text="Price" />
            <div className="text-red-light"> {formatNumber(row.price)} </div>
          </div>
          <div className="w-1/3">
            <Label text="Saving" />
            <div className="text-teal-dark">{formatNumber(row.saving)}</div>
          </div>
          <div className="w-1/3">
            <Label text="Sale Price" />
            <div className="text-teal-darker font-bold text-md">{formatNumber(row.salePrice)}</div>
          </div>
          <div className="w-1/4 p-2">
            <button
              className="bg-white hover:bg-teal-light hover:text-white text-grey-dark font-semibold border border-grey-light rounded-lg shadow text-sm"
              onClick={ () => onDeleteDiscount(row.id)}>
              <svg className="icon"><use xlinkHref="#icon-bin"></use></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderTotal(discounts){
  var totalPrices = sum(discounts.map((item) => item.price))
  var totalSaving = sum(discounts.map((item) => item.saving))
  var totalSalePrices = sum(discounts.map((item) => item.salePrice))

  return (
    <div className="flex justify-end text-base pr-5 pt-6">
      <div className="flex-col">
        <div className="text-teal-dark pb-2 text-right"> Grand Total:  {formatNumber(totalPrices)} </div>
        <div className="text-teal-dark pb-2 text-right"> Savings: {formatNumber(totalSaving)}</div>
        <div className="text-teal-darker font-bold text-lg pb-2 text-right" >Total Due: {formatNumber(totalSalePrices)}</div>
      </div>
    </div>
  );
}

export default function DiscountList({ discounts, onDeleteDiscount }) {
  return(
    <div className="data-discount-color shadow-md rounded p-2">
      { discounts.map((item, index) => renderRow(item, onDeleteDiscount)) }
      { renderTotal(discounts) }
    </div>
  );
}

DiscountList.propTypes = {
  discounts:        PropTypes.array.isRequired,
  onDeleteDiscount: PropTypes.func.isRequired
}
