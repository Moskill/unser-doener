import React from 'react'
import './LogMenu.css'
import LoginHook from '../Login/LoginHook'
import LogoutHook from '../Login/LogoutHook'

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
