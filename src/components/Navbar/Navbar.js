import React from 'react';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar.js';
import { GiHamburgerMenu } from "react-icons/gi";


function Navbar() {

  const openSidebarHandler = () => {
    return <Sidebar />
  }

  return (
    <>
      <div id="navigation">
        <nav className="navbar">
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </nav>
        <div className="sidebar-open">
          <GiHamburgerMenu className="burger-menu-icon" onClick={openSidebarHandler}/>
        </div>
      </div>
    </>
  )
}

export default Navbar
