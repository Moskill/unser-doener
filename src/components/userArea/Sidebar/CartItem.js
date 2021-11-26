import React from 'react';
import './CartItem.css';
import { useCookies } from 'react-cookie';

function CartItem({data}) {
  const [cookies, setCookie, removeCookie] = useCookies(['rawCart']);

  console.log(cookies.rawCart)

  // const removeItemFromCookie = (e) => {
  //   e.preventDefault();
  //   console.log(cookies.cart)
  //   const newCookie = cookies.cart.splice(0,1)
  //   setCookie('cart', [{...cookies.cart}])
  // }



  return (
    <>
    {cookies.rawCart && 
    (  
    
      <div className="cart-item-wrapper">
          <button className="cart-item-delete-btn">x</button>
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
                <option>Kalb</option>
                <option>Geflügel</option>
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
