import React from "react";
import '../style/sidebar-profile-container.sass'
import SidebarMenuLi from "./SidebarMenuLi.jsx";
import SidebarProfileThumbnail from "./SiderbarProfileThumbnail.jsx";
import LogoutIcon from '../images/logout-icon.svg'

const SidebarProfileContainer = () => {
  return ( 
    <div className="sidebar-profile-container">
      <ul>
        <SidebarMenuLi icon={<LogoutIcon/>} title={'Log out'}></SidebarMenuLi>
      </ul>
      <div className="divider"></div>
      <SidebarProfileThumbnail></SidebarProfileThumbnail>
    </div>
   );
}
 
export default SidebarProfileContainer;