import React from "react";
import Table from "./Table.jsx";
import TableRow from "./TableRow.jsx";
import TableHead from "./TableHead.jsx";
import TableData from "./TableData.jsx";
import TableHeadData from "./TableHeadData.jsx";

const TrackSpendTable = () => {
  return ( 
    <Table>
        <TableHead>
          <TableRow>
            <TableHeadData title="#" />
            <TableHeadData title="Items" />
            <TableHeadData title="Category" />
            <TableHeadData title="Amount" />
            <TableHeadData title="Balance" />
            <TableHeadData title="Action" />
          </TableRow>
        </TableHead>
      </Table>
   );
}

export default TrackSpendTable;