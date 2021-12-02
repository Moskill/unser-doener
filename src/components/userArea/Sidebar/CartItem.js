import React from 'react';
import './CartItem.css';
import { useCookies } from 'react-cookie';

function CartItem({data, index}) {
  const [cookies, setCookie, removeCookie] = useCookies(['rawCart']);

  const removeItemFromCart = (e) => {
    e.preventDefault();

  }

console.log(data)

  return (
    <>
      {data && (  
        <div className="cart-item-wrapper">
          <button className="cart-item-delete-btn" onClick={removeItemFromCart}>x</button>
        <div className="cart-item-card">
          <img src="http://skeel.de/img/doener2-opt.jpg" />
          <div className="card-info">
            <span className="card-item-title">{data.name}</span>
            <p className="cart-item-desc"><br/>{data.description}</p>
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
