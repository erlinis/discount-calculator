import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { formatNumber } from '../lib/format';

function renderRow(row, onDeleteDiscount){
  return (
    <div key={row.id}>
      <div className="bg-white border border-dotted border-grey-light">
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
          <div className="w-1/4 p-2">
            <button 
              className="bg-white hover:bg-teal-light hover:text-white text-grey-dark font-semibold py-2 px-4 border border-grey-light rounded-lg shadow"
              onClick={ () => onDeleteDiscount(row.id)}>
              <svg className="icon icon-bin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M2 5v10c0 0.55 0.45 1 1 1h9c0.55 0 1-0.45 1-1v-10h-11zM5 14h-1v-7h1v7zM7 14h-1v-7h1v7zM9 14h-1v-7h1v7zM11 14h-1v-7h1v7z"></path>
                <path d="M13.25 2h-3.25v-1.25c0-0.412-0.338-0.75-0.75-0.75h-3.5c-0.412 0-0.75 0.338-0.75 0.75v1.25h-3.25c-0.413 0-0.75 0.337-0.75 0.75v1.25h13v-1.25c0-0.413-0.338-0.75-0.75-0.75zM9 2h-3v-0.987h3v0.987z"></path>
              </svg>
            </button>
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

export default function DiscountList({ discounts, onDeleteDiscount }) {
  return(
    <div className="bg-teal-lightest shadow-md rounded p-2">
      { discounts.map((item, index) => renderRow(item, onDeleteDiscount)) }
      { renderTotal(discounts) }
    </div>
  );
}

DiscountList.propTypes = {
  discounts:        PropTypes.array.isRequired,
  onDeleteDiscount: PropTypes.func.isRequired
}
