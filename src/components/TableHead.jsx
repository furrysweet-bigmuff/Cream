import React from "react";
import '../style/table-head.sass'

const TableHead = (props) => {
  return ( 
    <thead>
      { props.children }
    </thead>
   );
}
 
export default TableHead;