import React, { useState, useEffect } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';


function Menu() {

  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/menu")
      .then((response) => response.json())
      .then((data) => setMenuData(data));
  }, []);

  console.log(menuData)

  return (
    <>
      <MenuItem data={menuData} key={menuData.id} />
    </>
  )
}

export default Menu
