import React, { useState } from 'react';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Link } from 'react-router-dom';


function Navbar() {


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
      </div>

    </>
  )
}

export default Navbar
