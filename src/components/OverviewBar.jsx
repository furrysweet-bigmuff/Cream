import React from "react";
import '../style/overview-bar.sass'

const OverviewBar = (props) => {
  return ( 
    <div className="overview-bar">
      {props.children}
    </div>
   );
}
 
export default OverviewBar;