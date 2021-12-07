import React, { useState, useEffect } from 'react';
import './CartItem.css';

function CartItem({data, index}) {
  const standardSideDishes = ["TsaTsiki", "Krautsalat-weiss", "Krautsalat-rot", "Bauernsalat"];
  const [deleteItem, setDeleteItem] = useState();
  const [sideDishes, setSideDishes] = useState();
  const [selectedSideDishes, setSelectedSideDishes] = useState({[index]: standardSideDishes});
  const [menuMeat, setMenuMeat] = useState();
  

  // Zu löschende Items in den State schmeißen
  useEffect(() => {
    setDeleteItem(JSON.parse( localStorage.getItem('myCart')))
  }, [])
  
  let tmpCart = deleteItem;
  
  // Menus aus dem Cart löschen
  const removeItemFromCart = (e) => {
    e.preventDefault();
    tmpCart.myCart.splice(e.target.value, 1);
    setDeleteItem(tmpCart);
    localStorage.setItem('myCart', JSON.stringify(deleteItem));
    window.location.reload();
  }

  // Einmal alles SideDishes holen
  useEffect(() => {
    fetch("http://localhost:8080/sideDishes")
    .then((response) => response.json())
    .then((data) => setSideDishes(data));
  }, []);

  // Die SideDishes sammeln, die ausgewählt wurden
  const sideDishesSelector = (sideDish) => {
    let tempArr = selectedSideDishes[index];
    tempArr.includes(sideDish) ?
    tempArr.splice(tempArr.indexOf(sideDish), 1) : 
    tempArr.push(sideDish); 
    setSelectedSideDishes({[index]: tempArr});
  };

  // Hier das Menu mit dem ausgewählten Fleisch speichern
  const menuMeatHandler = (meatChoice, id) => {
    let meat = '';
    switch(meatChoice) {
      case 1:
        meat = 'beef';
        break;
      case 2:
        meat = 'poultry';
        break;
      case 3:
        meat = 'veggy';
        break;
    }
    setMenuMeat(`${meat}`)
  }

  // console.log(selectedSideDishes && selectedSideDishes[index])

  return (
    <>
      {data && (  
        <div className="cart-item-wrapper">
          <button className="cart-item-delete-btn" value={index} onClick={removeItemFromCart}>x</button>
        <div className="cart-item-card">
          <img src="http://skeel.de/img/doener2-opt.jpg" />
          <div className="card-info">
            <span className="card-item-title" >{data.name}</span>
            <p className="cart-item-desc"><br/>{data.description}</p>
          </div>
        </div>
        <div className="cart-item-config">
          <div className="cart-item-meat-select"><b>Fleisch: </b>
            <select required onChange={(e) => menuMeatHandler(e.target.selectedIndex, data.id)}>
              <option selected disabled hidden>Bitte wählen</option>
              <option name="beef">Kalb</option>
              <option name="poultry">Geflügel</option>
              <option name="veggy">ohne Fleisch</option>
            </select><br/>
          </div>  
          {sideDishes && (
            <>
              <span className="side-dishes" className="side-dishes" style={
                selectedSideDishes[index].includes(sideDishes[3].name) ? 
                {backgroundColor: 'limegreen'} : 
                {backgroundColor: 'red', textDecoration: 'line-through'}}
                onClick={() => sideDishesSelector(sideDishes[3].name)}>{sideDishes[3].name}
              </span><br/>

              <span className="side-dishes" style={
                selectedSideDishes[index].includes(sideDishes[2].name) ? 
                {backgroundColor: 'limegreen'} : 
                {backgroundColor: 'red', textDecoration: 'line-through'}}
                onClick={() => sideDishesSelector(sideDishes[2].name)}>{sideDishes[2].name}
              </span><br/>

              <span className="side-dishes" style={
                selectedSideDishes[index].includes(sideDishes[0].name) ? 
                {backgroundColor: 'limegreen'} : 
                {backgroundColor: 'red', textDecoration: 'line-through'}}
                onClick={() => sideDishesSelector(sideDishes[0].name)}>{sideDishes[0].name}
              </span><br/>

              <span className="side-dishes" style={
                selectedSideDishes[index].includes(sideDishes[4].name) ? 
                {backgroundColor: 'limegreen'} : 
                {backgroundColor: 'red', textDecoration: 'line-through'}}
                onClick={() => sideDishesSelector(sideDishes[4].name)}>{sideDishes[4].name}
              </span><br/>

              <span className="side-dishes" style={
                selectedSideDishes[index].includes(sideDishes[5].name) ? 
                {backgroundColor: 'limegreen'} : 
                {backgroundColor: 'red', textDecoration: 'line-through'}}
                onClick={() => sideDishesSelector(sideDishes[5].name)}>{sideDishes[5].name}
              </span><br/>

              <span className="side-dishes" style={
                selectedSideDishes[index].includes(sideDishes[6].name) ? 
                {backgroundColor: 'limegreen'} : 
                {backgroundColor: 'red', textDecoration: 'line-through'}}
                onClick={() => sideDishesSelector(sideDishes[6].name)}>{sideDishes[6].name}
              </span><br/>

              <input type="hidden" name="menu" value={`${data.id}-${menuMeat}`} />
              <input type="hidden" name="sideDishes" value={JSON.stringify(selectedSideDishes)} />

              {/* <input type="hidden" id={`${index}-`} value={`${data.id}/${menuMeat}-${JSON.stringify(selectedSideDishes)}`} /> */}
            </>
          )}  
          </div>
          <div className="menu-price" id={data.price}>
            <span className="menu-price">Preis: {data.price}</span>
            <input type="hidden" name="price" value={data.price}/>
          </div>
        </div>
      )}
    </>
  )
}

export default CartItem


