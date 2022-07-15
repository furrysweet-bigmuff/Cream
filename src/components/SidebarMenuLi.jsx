import React from 'react'
import '../style/sidebar-menu-li.sass'

const SidebarMenuLi = (props) => {
  const { icon, title, isActive } = props;
  return ( 
    <li className={`sidebar-menu-li ${ isActive ? 'active' : ''}`}>
      <a href="#">
        {icon} 
        <span>{title}</span>
      </a>
    </li>
   );
}
 
export default SidebarMenuLi;