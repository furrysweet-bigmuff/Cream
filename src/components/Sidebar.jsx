import React from 'react'
import Logo from '../images/logo.svg'
import SidebarMenu from './SidebarMenu.jsx'
import '../style/sidebar.sass'

const Sidebar = () => {
  return ( 
    <div className="sidebar">
      <div className="logo-container">
        <Logo/>
      </div>
      <SidebarMenu></SidebarMenu>
    </div> 
  );
}
 
export default Sidebar;