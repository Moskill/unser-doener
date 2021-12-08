import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';
import Order from './Order/Order';
import { useCookies } from 'react-cookie';
import { GiHamburgerMenu } from "react-icons/gi";
import { Switch, Route} from 'react-router-dom';
import AdminArea from '../adminArea';


import './index.css';

function UserAreaIndex() {

  useEffect(() => {
    fetch("http://localhost:8080/menu")
      .then((response) => response.json())
      .then((data) => setMenuData(data));
  }, []);

  const [menuData, setMenuData] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['cart']);
  const [sidebarOpen, setSidebarOpen] = useState({left: 110 + '%'});
  const [menusInCart, setMenusInCart] = useState(localStorage.getItem('myCart'));

  // console.log(JSON.parse(menusInCart).myCart.length);

  // Wird ausgeführt, sobald ein Item in den Warenkorb gelegt wird
  useEffect(() => {
    setSidebarOpen({left: 110 + '%'});
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
            {sidebarOpen.left ===  '80%' && <div className="grey-overlay" onClick={sidebarOpenHandler}></div>}
          <div className="menu-wrapper">
            <Menu menuData={menuData}/>
            </div>
          <div className="sidebar-open">
              <GiHamburgerMenu className="burger-menu-icon" onClick={sidebarOpenHandler}/>
              {menusInCart && JSON.parse(menusInCart).myCart.length !== 0 && (
                <div className="cart-item-info">{JSON.parse(menusInCart).myCart.length}</div>
              )}
          </div>
          <Sidebar sidebarOpen={sidebarOpen} />
        </Route>
        <Route exact path="/order" component={Order}>
        <Navbar />
          <div className="sidebar-open">
              <GiHamburgerMenu className="burger-menu-icon" onClick={sidebarOpenHandler}/>

          </div>
          <Sidebar sidebarOpen={sidebarOpen} />
  
        <Order />
        </Route>

        <Route exact path="/AdminArea" component={AdminArea}>
          <AdminArea/>
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default UserAreaIndex