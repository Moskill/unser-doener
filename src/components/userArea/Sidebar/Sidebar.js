import React, { useState } from 'react';
import './Sidebar.css';
import { useCookies } from 'react-cookie';
import CartItem from './CartItem';


function Sidebar(props) {

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [sidebarOpen, setSidebarOpen] = useState(props.sidebarOpen);

  const sidebarOpenHandler = () => { // FUNZT NICHT DER SCHEISS!!!!!
    setSidebarOpen({left: '110%'})
    console.log(sidebarOpen)
  }
console.log(cookies.cart)

  return (
    <>
    {cookies.cart && 
    (
      <div className="sidebar-wrapper" style={props.sidebarOpen} >
        <div className="sidebar-header">
          <span className="sidebar-header-title">Ihr Warenkorb</span>
          {/* <AiOutlineCloseCircle className="close-icon" onClick={sidebarCloseHandler}/> */}
        </div>
        <div className="cart-wrapper">
          {cookies.cart.map((meal) => <CartItem data={meal} />)}
          
        </div>
        <span>asgfsadjgfska</span>
      </div>
      )}
    </>
  )
}

export default Sidebar

