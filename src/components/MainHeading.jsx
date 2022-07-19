import React from "react";
import { useState } from "react";
import '../style/main-heading.sass'

const MainHeading = (props) => {
  const [ heading, setHeading ] = useState(props.heading);

  return ( 
    <div className="main-heading">
      <h1>{ heading }</h1>
    </div>
   );
}
 
export default MainHeading;