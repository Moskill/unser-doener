import React, { useState } from 'react';
import './Sidebar.css';
import {AiOutlineCloseCircle} from "react-icons/ai";
import { MenuData } from '../Menu/Menu';
import { useCookies } from 'react-cookie';
import CartItem from './CartItem';


function Sidebar(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [sidebarOpen, setSidebarOpen] = useState(props.sidebarOpen);
  console.log(props)


  return (
    <>
    {cookies.cart && (
      <div className="sidebar-wrapper" style={props.sidebarOpen} >
        <div className="sidebar-header">
          <AiOutlineCloseCircle className="close-icon" onClick={() => setSidebarOpen({left: 80 + '%'})}/>
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

