import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login';
import LogMenu from './LogMenu';


function Navbar() {

  const [showGoogleMenu, setShowGoogleMenu] = useState(false);


  return (
    <>
      <div id="navigation">
        <nav className="navbar">
          <ul>
            <NavLink className="navlink" to="/menu"><li>Menü</li></NavLink>
            <NavLink className="navlink" to="/order"><li>Bestellung</li></NavLink>
            <NavLink className="navlink" to="/contact"><li>Kontakt</li></NavLink>
            <NavLink className="navlink" to="/order"><li>About Us</li></NavLink>
          </ul>
        </nav>
        <div className="google-login" onClick={() => setShowGoogleMenu(true)}>
          <Login/>
        </div>
      </div>
      {showGoogleMenu && <LogMenu />}
    </>
  )
}

export default Navbar
