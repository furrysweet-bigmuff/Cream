import React from "react";
import TrackSpend from "./TrackSpend.jsx";
import MainHeading from "./MainHeading.jsx";
import '../style/main-container.sass'

const MainContainer = () => {
  return ( 
    <main className="main-container">
      <MainHeading heading={'July Budget'}></MainHeading>
      <TrackSpend></TrackSpend>
    </main>
   );
}
 
export default MainContainer;