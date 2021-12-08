import React from 'react';
import './LogMenu.css';
import LoginHook from './LoginHook';
import LogoutHook from './LogoutHook';

function LogMenu() {
  return (
    <>
      <div className='login-menu-wrapper'>
        <div className='login-menu-header'>
          Mein Account
        </div>
        <LoginHook />
        <LogoutHook />
      </div>
    </>
  )
}

export default LogMenu
