import React from 'react';
import './LogMenu.css';
import LoginHook from '../Login/LoginHook';
import LogoutHook from '../Login/LogoutHook';

function LogMenu() {

  const loginBtn = LoginHook();
  const logoutBtn = LogoutHook();

  return (
    <>
      <div className="login-menu-wrapper">
        <div className="login-menu-header">
        </div>
          Mein Account
          {loginBtn}
          {logoutBtn}

      </div>
    </>
  )
}

export default LogMenu
