import React from 'react';
import PropTypes from "prop-types";

import { formatNumber } from "../lib/format"

export default function DataDisplayer({saving, discount, price, salePrice}) {
  return(
    <div className="bg-teal-lightest shadow-md rounded">
      <div className="flex justify-end">
        <div className="rounded-l-lg bg-red p-2 pl-8 mt-3 text-white"> {discount} % OFF </div>
      </div>

      <div className="items-center">
        <div className="bg-teal-lightest p-3 rounded-sm justify-between">
          <p className="text-red-light text-lg line-through"> Price: {formatNumber(price)} </p>
          <div className="mb-2">
            <div className="text-teal-darker font-bold text-4xl mb-2 p-4"> {formatNumber(salePrice)} </div>
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
  salePrice: PropTypes.number.isRequired
}
