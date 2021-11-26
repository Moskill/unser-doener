import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Menu.css';
import doener2 from '../../../img/doener2.jpg';

function MenuItem({data}) {
  
  const [cookies, setCookie, removeCookie] = useCookies(['cart']);
  const [actualMeal, setActualMeal] = useState([]);
  
  const addMenu = (menu) => {
    console.log(menu)
    setActualMeal([...actualMeal, menu])
    setCookie('rawCart', {...cookies.rawCart, actualMeal})
  }

  useEffect(() => {
    setCookie('rawCart', {actualMeal})
  }, [actualMeal])
  

  return (
    <>
    {data && data.map(menu => (
      
      <div className="menu-item__container" onClick={() => addMenu(menu)}>
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
