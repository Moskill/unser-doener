import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import CartItem from './CartItem';
let myCart = JSON.parse(localStorage.getItem('myCart'));

function Sidebar(props) {

  const [sidebarOpen, setSidebarOpen] = useState(props.sidebarOpen);
  const [menuList, setMenuList] = useState();
  const [cartList, setCartList] = useState(myCart);
  const [orderLength, setOrderLength] = useState();

  // Eine Order an die DB senden
  const sendOrder = (orderData) => {
    const orderBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    }

    fetch("http://localhost:8080/orders", orderBody)
    .then((response) => response.json())
    .then((data) => console.log(data, 'POST and die order Route'));
  };

  // Den Shopping Cart updaten
  useEffect(() => {
    localStorage.getItem('myCart') && localStorage.setItem('myCart', JSON.stringify(cartList));
  }, [cartList])


  const sidebarCloseHandler = () => { // FUNZT NICHT DER SCHEISS!!!!!
    setSidebarOpen({left: '110%'})
  }

  // Die Länge der Order Tabelle ermitteln
  useEffect(() => {
    fetch("http://localhost:8080/orders")
    .then((response) => response.json())
    .then((data) => setOrderLength(data.length));
  }, [])


  // Eine unique Invoice Nummer erstellen
  const createInvoiceId = () => {
    let dateNow = new Date();
    let yearNow = dateNow.getFullYear();
    let placeholder = '000';
    switch (orderLength) {
      case orderLength < 10:
        placeholder = '000';
        break;
      case orderLength < 100:
        placeholder = '00';
        break;
      case orderLength < 1000:
        placeholder = '0';
        break;
    }
    return `${yearNow}-${placeholder}${orderLength + 1}`;
  }

  // Eine Bestellung an die Darenbank senden
  const orderHandler = (e) => {
    let invoiceNo = createInvoiceId();
    e.preventDefault();
    const orderData = {
      menus: `${e.target[1].value}-beef`,
      sideDishes: `${e.target[3].value},${e.target[4].value},${e.target[5].value},${e.target[6].value},${e.target[7].value},${e.target[8].value}`,
      total: 6.50,
      invoiceId: invoiceNo
    }
    console.log(orderData)
    sendOrder(orderData);
  }

  return (
    <>
      <div className="sidebar-wrapper" style={props.sidebarOpen} >
        <div className="sidebar-header">
          <span className="sidebar-header-title">Ihr Warenkorb</span>
          {/* <AiOutlineCloseCircle className="close-icon" onClick={sidebarCloseHandler}/> */}
        </div>
        <div className="cart-wrapper">
          <form onSubmit={orderHandler}>
            {myCart && cartList.myCart.map((meal, index) =>  <CartItem data={meal} index={index}/>)}
            <button className="order-btn" type="submit">Jetzt bestellen!</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
