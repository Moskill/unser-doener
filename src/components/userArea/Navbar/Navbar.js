import React, { useState, useContext } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'
import LogMenu from '../Login/LogMenu';
import AdminArea from '../../adminArea/index.js';
import logo2w from '../../../img/logo2w.png';
import profileplaceholder from '../../../img/profileplaceholder.png';


function Navbar() {

  const [showGoogleMenu, setShowGoogleMenu] = useState(false);
  const { googleUserData } = useContext(AuthContext);

  const loginMenuHandler = () => {
    showGoogleMenu === true ? setShowGoogleMenu(false) : setShowGoogleMenu(true)
  }
  // console.log(googleUserData.profileObj.imageUrl, 'NAVBAR GOOGLE USER DATDA')
  return (
    <>
      <div id="navigation">
        <div className="logo-wrapper">
          <img src={logo2w} height="50" className="logo-img" />
        </div>
        <nav className="navbar">
          <ul>
            <NavLink className="navlink" to="/"><li>Startseite</li></NavLink>
            <NavLink className="navlink" to="/order"><li>Bestellung</li></NavLink>
            <NavLink className="navlink" to="/contact"><li>Kontakt</li></NavLink>
            <NavLink className="navlink" to="/order"><li>About Us</li></NavLink>
            <NavLink className="navlink" to="/adminArea"><li>Admin Area</li></NavLink>
          </ul>
        </nav>
      
        <div className="google-login" onClick={() => loginMenuHandler()}>
          <div className="google-avatar">
            <img src={googleUserData ? googleUserData.profileObj.imageUrl : profileplaceholder} />
          </div>
        </div>
      </div>
      {showGoogleMenu && <LogMenu />}
    </>
  )
}

export default Navbar
