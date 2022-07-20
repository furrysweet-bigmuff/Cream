import React from "react";
import '../style/table.sass'
const Table = (props) => {
  return ( 
    <table className="table">
      { props.children }
    </table>
   );
}
 
export default Table;