import React from 'react';
import './CartItem.css';
import { useCookies } from 'react-cookie';

function CartItem() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  return (
    <>
    {cookies.cart && (
      <div className="cart-item-wrapper">
        <div className="cart-item-card">
          <img src="http://skeel.de/img/doener2-opt.jpg" />
          <div className="card-info">
            <span className="card-item-title">{cookies.cart.meal1[0]}</span>
            <li>Mit Kalb oder Geflügel</li>
            <li>Sauce nach Wahl</li>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default CartItem
