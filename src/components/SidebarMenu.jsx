import React from 'react'
import SidebarMenuLi from './SidebarMenuLi.jsx';
import '../style/sidebar-menu.sass'
// import DashboardIcon from '../images/dashboard-icon.svg'
import DashboardIcon from '../images/dashboard-icon.svg'
import BudgetIcon from '../images/budget-icon.svg'
import SpendIcon from '../images/spend-icon.svg'

const SidebarMenu = () => {
  return ( 
    <div className="sidebar-menu-container">
      <div className="sidebar-menu-heading">Menu</div>
      <ul className="sidebar-menu">
        <SidebarMenuLi icon={<DashboardIcon/>} title={'Dashboard'} isActive={true}></SidebarMenuLi>
        <SidebarMenuLi icon={<BudgetIcon/>} title={'Create budget'}></SidebarMenuLi>
        <SidebarMenuLi icon={<SpendIcon/>} title={'Track spend'}></SidebarMenuLi>
      </ul>
    </div>
   );
}
 
export default SidebarMenu;