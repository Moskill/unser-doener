import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import { useCookies } from 'react-cookie';
import { GiHamburgerMenu } from "react-icons/gi";
import './index.css';

function UserAreaIndex() {

  // const [cookie, setCookie] = useCookies(['textCookie']);

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [sidebarOpen, setSidebarOpen] = useState({left: 80 + '%'});

  const sidebarOpenHandler = () => {
    sidebarOpen.left === 80 + '%' ? setSidebarOpen({left: 100 + '%'}) : setSidebarOpen({left: 80 + '%'})
  }

  const food = { // Ein Object für das Cookie Object
                meal1: {
                  name: 'Döner Kebap',
                  meat: 'kalb',
                  sauce: ['Tsatziki', 'Cocktail'],
                  salad: ['Rotkraut', 'Weisskraut', 'Zwiebeln', 'Bauernsalat'],
                  note: ['scharf', 'keine Tomaten']
                },
                meal2: {
                  name: 'Dürum Döner',
                  meat: 'chicken',
                  sauce: ['Tsatziki', 'Curry'],
                  salad: ['Weisskraut', 'Bauernsalat'],
                  note: ['kein Rotkraut', 'keine Tomaten']
                }
                
               }
  
  const meal3 = ['Gyros', 'Salat', 'Fritten']  // Man kann einfach weitere Felder hinzufügen

  const cookieHandler = () => {
    setCookie('cart', food, {path: '/'});
    console.log(cookies.myCookie && cookies.myCookie.meal1[0]); // So bekommt man Zugriff auaf das Array

    // cookies.myCookie.meal3 = ['Gyros', 'Salat', 'Fritten']  // Man kann einfach weitere Felder hinzufügen

    // for(const i in cookies) // Mit for in geht es auch
    //   console.log(cookies[i])
  }

  const addToCookie = () => {
    setCookie('cart', {...cookies.myCookie, meal3})
  }

  console.log(sidebarOpen.left, 'Whta thaaaa?')

  return (
    <>
      <Navbar />
      <div className="sidebar-open">
          <GiHamburgerMenu className="burger-menu-icon" onClick={sidebarOpenHandler}/>
      </div>
      {/* {sidebarOpen.left === 80 + '%' ? <Sidebar sidebarOpen={sidebarOpen} /> : <h5>???</h5>} */}
      <Sidebar sidebarOpen={sidebarOpen}/>
      <button onClick={cookieHandler}>Set Cookie</button>
      <button onClick={() => removeCookie('cart', {path: '/'})}>Cookie löschen</button>
      <button onClick={addToCookie}>Add Meal to Cookie</button>
    </>
  )
}

export default UserAreaIndex