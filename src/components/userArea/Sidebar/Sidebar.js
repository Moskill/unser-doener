import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { useCookies } from 'react-cookie';
import CartItem from './CartItem';

function Sidebar(props) {

  const [cookies, setCookie, removeCookie] = useCookies(['rawCart']);
  const [sidebarOpen, setSidebarOpen] = useState(props.sidebarOpen);

  useEffect(() => {
    fetch("http://localhost:8080/sideDishes")
    .then((response) => response.json())
    .then((data) => console.log(data));
  }, [])

  const sidebarCloseHandler = () => { // FUNZT NICHT DER SCHEISS!!!!!
    setSidebarOpen({left: '110%'})
  }

  return (
    <>
      <div className="sidebar-wrapper" style={props.sidebarOpen} >
        <div className="sidebar-header">
          <span className="sidebar-header-title">Ihr Warenkorb</span>
          {/* <AiOutlineCloseCircle className="close-icon" onClick={sidebarCloseHandler}/> */}
        </div>
        <div className="cart-wrapper">
          <form>
            {/* {cookies.rawCart && cookies.rawCart.map((meal, index) => <CartItem data={meal} mealId={index}/>)} */}
            <button className="order-btn" type="submit">Jetzt bestellen!</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Sidebar

