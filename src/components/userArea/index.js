import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Menu from './Menu/Menu';
import { useCookies } from 'react-cookie';
import { GiHamburgerMenu } from "react-icons/gi";
import { Switch, Route} from 'react-router-dom';
import AdminArea from '../adminArea';


import './index.css';

function UserAreaIndex() {

  const [cookies, setCookie, removeCookie] = useCookies(['cart']);
  const [sidebarOpen, setSidebarOpen] = useState({left: 110 + '%'});

  // Wird ausgeführt, sobald ein Item in den Warenkorb gelegt wird
  useEffect(() => {
    setSidebarOpen({left: 80 + '%'});
  }, [cookies])

  // Bei Klick auf das Burger-Menü-Icon öffnet die Seidebar
  const sidebarOpenHandler = () => {
    sidebarOpen.left === 80 + '%' ? setSidebarOpen({left: 110 + '%'}) : setSidebarOpen({left: 80 + '%'})
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <div className="sidebar-open">
              <GiHamburgerMenu className="burger-menu-icon" onClick={sidebarOpenHandler}/>
          </div>
          <Sidebar sidebarOpen={sidebarOpen} />
        </Route>
        <Route exact path="/menu" component={Menu}>
        <Navbar />
          <div className="sidebar-open">
              <GiHamburgerMenu className="burger-menu-icon" onClick={sidebarOpenHandler}/>
          </div>
          <Sidebar sidebarOpen={sidebarOpen} />
          <Menu/>
        </Route>

        <Route exact path="/AdminArea" component={AdminArea}>
          <AdminArea/>
        </Route>
      </Switch>

      {/* <button onClick={cookieHandler}>Set Cookie</button>
      <button onClick={() => {removeCookie('cart', {path: '/'}); console.log('FOTZE')} }>Cookie löschen</button>
      <button onClick={addToCookie}>Add Meal to Cookie</button> */}
    </>
  )
}

export default UserAreaIndex