import React, { useState } from 'react';
import './Sidebar.css';
import { useCookies } from 'react-cookie';
import CartItem from './CartItem';


function Sidebar(props) {

  const [cookies, setCookie, removeCookie] = useCookies(['rawCart']);
  const [sidebarOpen, setSidebarOpen] = useState(props.sidebarOpen);

  const sidebarCloseHandler = () => { // FUNZT NICHT DER SCHEISS!!!!!
    setSidebarOpen({left: '110%'})
  }

  return (
    <>
    {cookies.rawCart.actualMeal && 
    (
      <div className="sidebar-wrapper" style={props.sidebarOpen} >
        <div className="sidebar-header">
          <span className="sidebar-header-title">Ihr Warenkorb</span>
          {/* <AiOutlineCloseCircle className="close-icon" onClick={sidebarCloseHandler}/> */}
        </div>
        <div className="cart-wrapper">
          <form>
            {cookies.rawCart.actualMeal.map((meal) => <CartItem data={meal} />)}
            <button className="order-btn" type="submit">Jetzt bestellen!</button>
          </form>
        </div>
      </div>
      )}
    </>
  )
}

export default Sidebar

