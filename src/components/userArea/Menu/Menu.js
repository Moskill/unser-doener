import React, { createContext, useState } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import Sidebar from '../Sidebar/Sidebar';

export const MenuData = createContext({display: 'none'});

function Menu() {

  console.log(MenuData);

  const [showSidebar, setShowSidebar] = useState({display: 'none'});

  const sidebarHandler = () => {
    showSidebar === {display: 'none'} ? setShowSidebar({display: 'block'}) : setShowSidebar({display: 'none'}) 
  }

  return (
    <>
      <MenuItem onClick={sidebarHandler}/>
      <Sidebar style={showSidebar}/>
    </>
  )
}

export default Menu
