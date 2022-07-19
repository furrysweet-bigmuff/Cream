import React from "react";
import '../style/overview-bar-column.sass'

const OverviewBarColumn = (props) => {
  return ( 
    <div className={`column ${ props.addClass ? props.addClass : '' }`}>
      {props.children}
    </div>
   );
}
 
export default OverviewBarColumn;