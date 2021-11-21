import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import doener2 from '../../../img/doener2.jpg';
import Sidebar from '../Sidebar/Sidebar';
import { MenuData } from './Menu';

function MenuItem() {


  const [renderSidebar, setRenderSidebar] = useState(<Sidebar display={{display: 'block'}}/>)
  
  const sidebarHandler = () => {
    MenuData._currentValue2 = {display: 'block'}
    setRenderSidebar(<Sidebar display={{display: 'block'}}/>)
  }

  return (
    <>
      <div className="menu-item__container">
        <Link>
          <div className="menu-item__wrapper">
            <div className="menu-item__title">Döner Kebap</div>
            <img src={doener2} className="menu-item__image"></img>
            <div className="menu-item__price"></div>
            <button className="menu-item__add" onClick={sidebarHandler}>Add to Cart</button>
          </div>
          <Sidebar MenuData={{display: 'block'}}/>
        </Link>
      </div>
    </>
  )
}

export default MenuItem
