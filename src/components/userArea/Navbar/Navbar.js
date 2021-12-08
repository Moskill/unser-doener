import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import LogMenu from './LogMenu';
import AdminArea from '../../adminArea/index.js'


function Navbar() {

  const [showGoogleMenu, setShowGoogleMenu] = useState(false);

  const loginMenuHandler = () => {
    showGoogleMenu === true ? setShowGoogleMenu(false) : setShowGoogleMenu(true)
  }

  return (
    <>
      <div id="navigation">
        <nav className="navbar">
          <ul>
            <NavLink className="navlink" to="/menu"><li>Menü</li></NavLink>
            <NavLink className="navlink" to="/order"><li>Bestellung</li></NavLink>
            <NavLink className="navlink" to="/contact"><li>Kontakt</li></NavLink>
            <NavLink className="navlink" to="/order"><li>About Us</li></NavLink>
            <NavLink className="navlink" to="/adminArea"><li>Admin Area</li></NavLink>
          </ul>
        </nav>
      
        <div className="google-login" onClick={() => loginMenuHandler()}>
          "login"
          {/* <Login /> */}
        </div>
      </div>
      {showGoogleMenu && <LogMenu />}
    </>
  )
}

export default Navbar
