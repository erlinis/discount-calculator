import React from 'react';
import PropTypes from "prop-types";


function renderRow(row){
  return (
    <li key={row.id}>
      { row.price } | { row.discount } | { row.salePrice }
    </li>
    );
}

export default function DiscountList({ discounts }) {
   return(
     <div>
       <ul>
         { discounts.map((item) => renderRow(item)) }
      </ul>
     </div>
   );
}

DiscountList.PropTypes = {
 discounts: PropTypes.array.isRequired
}
