import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import doener2 from '../../../img/doener2.jpg';

function MenuItem() {

  return (
    <>
      <div className="menu-item__container">
    
          <div className="menu-item__wrapper">
            <div className="menu-item__title">Döner Kebap</div>
            <img src={doener2} className="menu-item__image"></img>
            <div className="menu-item__price"></div>
            <button className="menu-item__add" >Add to Cart</button>
          </div>

      </div>
    </>
  )
}

export default MenuItem
