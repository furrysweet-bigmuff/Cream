import React from "react";
import { useState } from "react";
import '../style/overview-bar-row.sass'

const OverviewBarRow = (props) => {
  const [ label, setLabel ] = useState(props.label);
  const [ content, setContent ] = useState(props.content);

  return ( 
    <div className="row">
      <div className="label">{ label }</div>
      <div className="content">{ content }</div>
    </div>
   );
}
 
export default OverviewBarRow;