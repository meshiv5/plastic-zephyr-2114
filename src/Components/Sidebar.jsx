import React from 'react'
import { FaUser } from 'react-icons/fa';
import SidebarItems from './SidebarItems';
import items from '../data/sidebar.json'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-login-item">
            <span><FaUser /> <span className='links'>Login</span> | <span className='links'>Register</span></span> 
        </div>
        {items.map((item,index)=> <SidebarItems key={index} item={item} />)}
    </div>
  )
}

export default Sidebar;