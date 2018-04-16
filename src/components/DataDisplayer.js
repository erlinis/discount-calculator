import React from 'react';
import PropTypes from "prop-types";

export default function DataDisplayer({label, data, styleClass}) {
   return(
     <div>
       <label>{label}:</label>
       <span className={styleClass}>{data}</span>
     </div>
   );
}

DataDisplayer.propTypes = {
  label:      PropTypes.string.isRequired,
  data:       PropTypes.string.isRequired,
  styleClass: PropTypes.string.isRequired
}
