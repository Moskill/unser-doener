import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { IoFastFoodSharp } from "react-icons/io5";
import doener3 from '../../../img/doener3.jpg';
const DIR = 'http://localhost:8080/upload/';

function MenuItem({data}) {
  
  useEffect(() => {
    if(!localStorage.getItem('myCart')){
    console.log('Geht er rein@myCart')
    localStorage.setItem('myCart', JSON.stringify({myCart:[]}));
  }
  }, [])

  // Fügt ein Menu zum Cart hinzu
  const addMenu = (menu) => {
    let tmpCart = [];
    tmpCart = JSON.parse( localStorage.getItem('myCart'));
    tmpCart.myCart.push(menu)
    localStorage.setItem('myCart', JSON.stringify(tmpCart));
    window.location.reload();
  }

  return (
    <>
    {data && data.map(menu => (
      
      <div className="menu-item__container" onClick={() => addMenu(menu)}>
        <div className="menu-item__wrapper">
          <div className="food-icon" >
            <IoFastFoodSharp />
          </div>
          <img src={DIR + menu.imgUrl} className="menu-item__image">
          </img>
          <div className="menu-item__title">{menu.name}</div>
          {/* <div className="menu-item__descriion">{menu.description}</div> */}
          <div className="menu-item__price">{'€ ' + menu.price}</div>
          {/* <button className="menu-item__add" >Add to Cart</button> */}
        </div>
      </div>
      ))}
    </>
  )
}

export default MenuItem
