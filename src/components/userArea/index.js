import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import { useCookies } from 'react-cookie';
import { GiHamburgerMenu } from "react-icons/gi";
import './index.css';

function UserAreaIndex() {

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [sidebarOpen, setSidebarOpen] = useState({left: 110 + '%'});

  // Wird ausgeführt, sobald ein Item in den Warenkorb gelegt wird
  // useEffect(() => {
  //   console.log('useEffect ausgeführt')
  //   setSidebarOpen({left: 80 + '%'});
  // }, [cookies])

  // Bei Klick auf das Burger-Menü-Icon öffnet die Seidebar
  const sidebarOpenHandler = () => {
    sidebarOpen.left === 80 + '%' ? setSidebarOpen({left: 110 + '%'}) : setSidebarOpen({left: 80 + '%'})
  }

  // Ein Testobjekt um den Cookie zu befüllen
  const food = { 
                meal1: {
                  name: 'Döner Kebap',
                  meat: 'kalb',
                  sauce: ['Tsatsiki', 'Cocktail'],
                  salad: ['Rotkraut', 'Weisskraut', 'Zwiebeln', 'Bauernsalat'],
                  note: ['scharf', 'keine Tomaten']
                },
                meal2: {
                  name: 'Dürum Döner',
                  meat: 'chicken',
                  sauce: ['Tsatsiki', 'Curry'],
                  salad: ['Weisskraut', 'Bauernsalat'],
                  note: ['kein Rotkraut', 'keine Tomaten']
                }
                
               }
  

  // Testfunktion um einen Cookie zu setzen
  const cookieHandler = () => {
    sidebarOpenHandler();
    setCookie('cart', food, {path: '/'});
    console.log(cookies.cart && cookies.cart.meal1[0]); // So bekommt man Zugriff auf das Array

    // cookies.myCookie.meal3 = ['Gyros', 'Salat', 'Fritten']  // Man kann einfach weitere Felder hinzufügen

    // for(const i in cookies) // Mit for in geht es auch
    //   console.log(cookies[i])
  }

  // Der Handler um den Cookie upzudaten
  const addToCookie = () => {
    // setCookie('cart', {...cookies.myCookie, meal3})
  }
console.log(cookies)
  return (
    <>
      <Navbar />
      <div className="sidebar-open">
          <GiHamburgerMenu className="burger-menu-icon" onClick={sidebarOpenHandler}/>
      </div>
      <Sidebar sidebarOpen={sidebarOpen}/>
      <button onClick={cookieHandler}>Set Cookie</button>
      <button onClick={() => removeCookie('cart', {path: '/'})}>Cookie löschen</button>
      <button onClick={addToCookie}>Add Meal to Cookie</button>
    </>
  )
}

export default UserAreaIndex