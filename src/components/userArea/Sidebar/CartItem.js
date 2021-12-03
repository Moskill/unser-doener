import React, { useState, useEffect } from 'react';
import './CartItem.css';

function CartItem({data, index}) {
  const [deleteItem, setDeleteItem] = useState();

  useEffect(() => {
    setDeleteItem(JSON.parse( localStorage.getItem('myCart')))
  }, [])
  
  let tmpCart = deleteItem;
  
  const removeItemFromCart = (e) => {
    e.preventDefault();
    tmpCart.myCart.splice(e.target.value, 1);
    setDeleteItem(tmpCart);
    localStorage.setItem('myCart', JSON.stringify(deleteItem));
    window.location.reload();
  }


  return (
    <>
      {data && (  
        <div className="cart-item-wrapper">
          <button className="cart-item-delete-btn" value={index} onClick={removeItemFromCart}>x</button>
        <div className="cart-item-card">
          <img src="http://skeel.de/img/doener2-opt.jpg" />
          <div className="card-info">
            <input type="hidden" id={`orderIndex-${index}`} />
            <span className="card-item-title" id={data.name}>{data.name}</span>
            <input type="hidden" value={data.id} />
            <p className="cart-item-desc"><br/>{data.description}</p>
          </div>
        </div>
        <div className="cart-item-config">
          <div className="cart-item-meat-select"><b>Fleisch: </b>
            <select required>
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


