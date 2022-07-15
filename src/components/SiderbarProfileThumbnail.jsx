import React from "react";
import '../style/sidebar-profile-thumbnail.sass'
import avatar from '../images/avatar.png'

const SidebarProfileThumbnail = () => {
  return ( 
    <a href="#" className="sidebar-profile-thumbnail">
      <div className="left-wrapper">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="right-wrapper">
        <div className="name">Степан Бандера</div>
        <div className="status">
          <div className="circle"></div>
          <span>Online</span>
        </div>
      </div>

    </a>
   );
}
 
export default SidebarProfileThumbnail;