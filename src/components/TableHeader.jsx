import React from "react";

const TableHeader = (props) => {
  return ( 
    <thead>{ props.children }</thead>
   );
}
 
export default TableHeader;