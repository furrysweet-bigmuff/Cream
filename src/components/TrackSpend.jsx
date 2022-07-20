import React from "react";
import TrackSpendOverviewBar from "./TrackSpendOverviewBar.jsx";
import TrackSpendTable from "./TrackSpendTable.jsx";

const TrackSpend = () => {
  return ( 
    <div>
      <TrackSpendOverviewBar></TrackSpendOverviewBar>
      <TrackSpendTable></TrackSpendTable>
    </div>
   );
}
 
export default TrackSpend;