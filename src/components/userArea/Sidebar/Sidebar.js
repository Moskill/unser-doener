import React, { useState } from 'react';
import './Sidebar.css';
import { useCookies } from 'react-cookie';
import CartItem from './CartItem';


function Sidebar(props) {

  
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [sidebarOpen, setSidebarOpen] = useState(props.sidebarOpen);

  const sidebarOpenHandler = () => { // FUNZT NICHT DER SCHEISS!!!!!
    setSidebarOpen({left: '100%'})
    console.log(sidebarOpen)
  }


  return (
    <>
    {cookies.cart && (
      <div className="sidebar-wrapper" style={props.sidebarOpen} >
        <div className="sidebar-header">
          <span className="sidebar-header-title">Ihr Warenkorb</span>
          {/* <AiOutlineCloseCircle className="close-icon" onClick={sidebarOpenHandler}/> */}
        </div>
        <div className="cart-wrapper">
          <CartItem />
        </div>
        <span>{cookies.cart.meal1[0]}</span>
      </div>
      )}
    </>
  )
}

export default Sidebar

