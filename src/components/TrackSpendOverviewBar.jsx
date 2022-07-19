import React from "react";
import ArrowLeft from '../images/arrow-left.svg'
import ArrowRight from '../images/arrow-right.svg'
import Calendar from '../images/calendar.svg'
import OverviewBar from "./OverviewBar.jsx";
import OverviewBarRow from "./OverviewBarRow.jsx";
import '../style/track-spend-overview-bar.sass'
import OverviewBarColumn from "./OverviewBarColumn.jsx";

const TrackSpendOverviewBar = () => {
  return ( 
    <div className="track-spend-overview-bar">
      <OverviewBar>
        <OverviewBarColumn addClass={"day-selector"}>
          <div>
            <h2>Monday</h2>
          </div>
          <div className="buttons">
            <ArrowLeft/>
            <ArrowRight/>
          </div>
        </OverviewBarColumn>
        <OverviewBarColumn>
          <OverviewBarRow label={'Current Date:'} content={'04/07/2022'}></OverviewBarRow>
          <OverviewBarRow label={'Pick Date:'} content={<Calendar/>}></OverviewBarRow>
        </OverviewBarColumn>
        <OverviewBarColumn>
          <OverviewBarRow label={'Today’s budget:'} content={'650₴'}></OverviewBarRow>
          <OverviewBarRow label={'Today’s left:'} content={'310₴'}></OverviewBarRow>
        </OverviewBarColumn>
        <OverviewBarColumn>
          <OverviewBarRow label={'Saved:'} content={'545₴'}></OverviewBarRow>  
          <div>
            <div className="msg success">Keep going, you’re doin’ good!</div>
          </div>
        </OverviewBarColumn>
      </OverviewBar>
    </div>
   );
}
 
export default TrackSpendOverviewBar;