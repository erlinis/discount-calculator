import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { formatNumber } from '../lib/format';

function renderRow(row, index){
  return (
    <div key={row.id}>
      <div className="bg-white border border-grey-light" >
        <div className="flex justify-start">
          <div className="rounded-r-lg bg-orange p-2 mt-2 text-sm text-white"> {row.discount} % OFF </div>
        </div>

        <div className="flex justify-start text-sm">
          <div className="w-1/3 p-2">
            Price: 
            <div className="text-red-light p-2"> {formatNumber(row.price)} </div>
          </div>
          <div className="w-1/3 p-2">
            Saving:
            <div className="text-teal-dark p-2">{formatNumber(row.saving)}</div>
          </div>
          <div className="w-1/3 p-2">
            Sale Price:
            <div className="text-teal-darker font-bold text-xl p-2">{formatNumber(row.salePrice)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderTotal(discounts){
  var totalPrices = _.sum(discounts.map((item) => item.price))
  var totalSaving = _.sum(discounts.map((item) => item.saving))
  var totalSalePrices = _.sum(discounts.map((item) => item.salePrice))

  return (
    <div className="flex justify-end text-base pr-5 pt-6">
      <div className="flex-col"> 
        <div className="text-teal-dark pb-2 text-right"> Buy:  {formatNumber(totalPrices)} </div>
        <div className="text-teal-dark pb-2 text-right"> Savings: {formatNumber(totalSaving)}</div>
        <div className="text-teal-darker font-bold text-lg pb-2 text-right" >Pay: {formatNumber(totalSalePrices)}</div>
      </div>
    </div>
  );
}

export default function DiscountList({ discounts }) {
  return(
    <div className="bg-teal-lightest shadow-md rounded p-2">
       { discounts.map((item, index) => renderRow(item, index)) }
       { renderTotal(discounts) }
    </div>
  );
}

DiscountList.propTypes = {
 discounts: PropTypes.array.isRequired
}
