<<<<<<< HEAD:src/components/userArea/Login/LogMenu.js
import React from 'react';
import './LogMenu.css';
import LoginHook from './LoginHook';
import LogoutHook from './LogoutHook';
=======
import React from 'react'
import './LogMenu.css'
import LoginHook from '../Login/LoginHook'
import LogoutHook from '../Login/LogoutHook'
>>>>>>> master:src/components/userArea/Navbar/LogMenu.js

function LogMenu() {
  return (
    <>
      <div className='login-menu-wrapper'>
        <div className='login-menu-header'></div>
        Mein Account
        <LoginHook />
        <LogoutHook />
      </div>
    </>
  )
}

export default LogMenu
