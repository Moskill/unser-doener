import React, { useState, useEffect } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';


function Menu({menuData}) {


  return (
    <>
      <MenuItem data={menuData} key={menuData.id} />
    </>
  )
}

export default Menu
