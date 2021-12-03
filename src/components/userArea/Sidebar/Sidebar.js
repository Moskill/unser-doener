import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import CartItem from './CartItem';
let myCart = JSON.parse(localStorage.getItem('myCart'));

function Sidebar(props) {

  const [sidebarOpen, setSidebarOpen] = useState(props.sidebarOpen);
  const [menuList, setMenuList] = useState();
  const [cartList, setCartList] = useState(myCart);
  const [sideDishes, setSideDishes] = useState();


  useEffect(() => {
    fetch("http://localhost:8080/sideDishes")
    .then((response) => response.json())
    .then((data) => setSideDishes(data));
  }, []);

  const sendOrder = (orderData) => {
    const orderBody = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: orderData
    }

    fetch("http://localhost:8080/order")
    .then((response) => response.json())
    .then((data) => console.log(data, 'POST and die order Route'));
  };

  useEffect(() => {
    localStorage.getItem('myCart') && localStorage.setItem('myCart', JSON.stringify(cartList));
  }, [cartList])


  const sidebarCloseHandler = () => { // FUNZT NICHT DER SCHEISS!!!!!
    setSidebarOpen({left: '110%'})
  }

  const createInvioceId = () => {
    fetch("http://localhost:8080/order")
    .then((response) => response.json())
    .then((data) => console.lod(data, 'GET an die order Route'));
  }
  console.log((createInvioceId && createInvioceId()))

  // Eine Bestellung an die Darenbank senden
  const orderHandler = (e) => {
    e.preventDefault();
    const orderData = {
      menus: e.sonstwas,
      sideDishes: e.sonstwas,
      total: e.sonstwas,
      invoiceId: e.sonstwas
    }
    // console.log(e.target[1].value);
    console.log(e);
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
