import React, { useState, useEffect } from 'react';
import './CartItem.css';

function CartItem({data, index}) {
  const [deleteItem, setDeleteItem] = useState();
  const [sideDishes, setSideDishes] = useState();

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

  useEffect(() => {
    fetch("http://localhost:8080/sideDishes")
    .then((response) => response.json())
    .then((data) => setSideDishes(data));
  }, []);


  return (
    <>
      {data && (  
        <div className="cart-item-wrapper">
          <button className="cart-item-delete-btn" value={index} onClick={removeItemFromCart}>x</button>
        <div className="cart-item-card">
          <img src="http://skeel.de/img/doener2-opt.jpg" />
          <div className="card-info">
            <span className="card-item-title" id={data.name}>{data.name}</span>
            <input type="hidden" value={data.id} />
            <p className="cart-item-desc"><br/>{data.description}</p>
          </div>
        </div>
        <div className="cart-item-config">
          <div className="cart-item-meat-select"><b>Fleisch: </b>
            <select required>
              <option selected disabled hidden>Bitte wählen</option>
              <option name="beef">Kalb</option>
              <option name="poultry">Geflügel</option>
              <option name="veggy">ohne Fleisch</option>
            </select><br/>
          </div>  
          {sideDishes && (
            <>
              <input type="checkbox" value={sideDishes[3].name} /><span>{sideDishes[3].name}</span><br/>
              <input type="checkbox" value={sideDishes[2].name} /><span>{sideDishes[2].name}</span><br/>
              <input type="checkbox" value={sideDishes[0].name} /><span>{sideDishes[0].name}</span><br/>
              <p className="item-dressing">Soßen</p>
              <input type="checkbox" value={sideDishes[4].name} /><span>{sideDishes[4].name}</span><br/>
              <input type="checkbox" value={sideDishes[5].name} /><span>{sideDishes[5].name}</span><br/>
              <input type="checkbox" value={sideDishes[6].name} /><span>{sideDishes[6].name}</span><br/>
            </>
          )}  
          </div>
        </div>
      )}
    </>
  )
}

export default CartItem


