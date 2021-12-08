import React, { useState, useEffect } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';


function Menu({menuData}) {


  return (
    <div className="menu-inner-container">
      <MenuItem data={menuData} key={menuData.id} />
    </div>
  )
}

export default Menu
