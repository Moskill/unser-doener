import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Menu.css';
import doener2 from '../../../img/doener2.jpg';

function MenuItem({data}) {
  
  const [cookies, setCookie, removeCookie] = useCookies(['rawCart']);
  // const [actualMeal, setActualMeal] = useState([]);
  
  const addMenu = (menu) => {
    let actualCart = [];
    actualCart += cookies.rawCart.menu;
    console.log(actualCart)
    // setActualMeal([...actualMeal, menu])
    // setCookie('rawCart', {menu, ...cookies.rawCart.menu})
  }

  console.log('Im Cookie steht jetzt: ', cookies)

  // useEffect(() => {
  //   setCookie('rawCart', {actualMeal})
  // }, [actualMeal])
  

  return (
    <>
    {data && data.map(menu => (
      
      <div className="menu-item__container" onClick={() => addMenu(menu.id)}>
        <div className="menu-item__wrapper">
          <div className="menu-item__title">{menu.name}</div>
          <img src={doener2} className="menu-item__image"></img>
          <div className="menu-item__descriion">{menu.description}</div>
          <div className="menu-item__price">{'€ ' + menu.price}</div>
          <button className="menu-item__add" >Add to Cart</button>
        </div>
      </div>
      ))}
    </>
  )
}

export default MenuItem
