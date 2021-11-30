import React from 'react';
import './CartItem.css';
import { useCookies } from 'react-cookie';

function CartItem({data, mealId}) {
  const [cookies, setCookie, removeCookie] = useCookies(['rawCart']);

  const removeItemFromCookie = (e) => {
    e.preventDefault();
    const actualMeal = cookies.rawCart.actualMeal;
    console.log(actualMeal, 'Vor dem Splice')
    actualMeal.splice(mealId, 1);
    console.log(actualMeal, 'Nach dem Splice')
    console.log(cookies)
    removeCookie('rawCart')
    setCookie('rawCart', {...cookies.rawCart.actualMeal, actualMeal})
  }

  return (
    <>
      {cookies.rawCart && (  
        <div className="cart-item-wrapper">
          <button className="cart-item-delete-btn" onClick={removeItemFromCookie}>x</button>
        <div className="cart-item-card">
          <img src="http://skeel.de/img/doener2-opt.jpg" />
          <div className="card-info">
            <span className="card-item-title">{data.name}</span>
            <p className="cart-item-desc"><br/>Der Klassiker mit Kalb- oder Hähnchenfleisch, frischem Salat und verschiedenen Saucen. </p>
          </div>
        </div>
        <div className="cart-item-config">
          <div className="cart-item-meat-select"><b>Fleisch: </b>
            <select>
              <option selected disabled hidden>Bitte wählen</option>
              <option>Kalb</option>
              <option>Geflügel</option>
              <option>ohne Fleisch</option>
            </select><br/>
          </div>  
            <input type="checkbox" value="Weisskraut" /><span>Krautsalat - weiß</span><br/>
            <input type="checkbox" value="Rotkraut" /><span>Krautsalat - rot</span><br/>
            <input type="checkbox" value="Bauernsalat" /><span>Bauernsalat - Gurke, Tomate, Eisberg</span><br/>
            <p className="item-dressing">Saucen</p>
            <input type="checkbox" value="Tsatsiki" /><span>Tsatsiki - Nach trditioneller Art</span><br/>
            <input type="checkbox" value="Weisskraut" /><span>Curry-Sauce - Nach trditioneller Art</span><br/>
            <input type="checkbox" value="Weisskraut" /><span>Cocktail-Sauce</span><br/>
          </div>
        </div>
      )}
    </>
  )
}

export default CartItem
