import React from 'react';
import PropTypes from "prop-types";

import { formatNumber } from "../lib/format"

export default function DataDisplayer({saving, discount, price, salePrice, description}) {
  return(
    <div className="data-discount-color shadow-md rounded">
      <div className="flex pt-3 mb-3">
        <div className="w-1/8">
          <span className="rounded-r-lg bg-red p-1 pl-2 pr-2 text-md text-white"> {discount} % OFF </span>
        </div>

        <div className="w-7/8 ml-5">
          <span className="text-md text-orange-darker uppercase">{description}</span>
        </div>
      </div>

      <div className="items-center">
        <div className="data-discount-color p-3 rounded-sm justify-between">
          <p className="text-red-light text-md "> Price: {formatNumber(price)} </p>
          <div className="mb-2">
            <div className="text-teal-darker font-bold text-4xl p-3"> {formatNumber(salePrice)} </div>
            <div className="text-sm">
              <p className="text-grey-dark italic">You save: {formatNumber(saving)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DataDisplayer.propTypes = {
	price:     PropTypes.string.isRequired,
  discount:  PropTypes.string.isRequired,
  saving:    PropTypes.number.isRequired,
  salePrice: PropTypes.number.isRequired,
  description: PropTypes.string
}
