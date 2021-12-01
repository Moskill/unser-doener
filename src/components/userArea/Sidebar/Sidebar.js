import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import CartItem from './CartItem';

function Sidebar(props) {

  const [sidebarOpen, setSidebarOpen] = useState(props.sidebarOpen);
  const [menuList, setMenuList] = useState();
  const [cartList, setCartList] = useState();
  const [sideDishes, setSideDishes] = useState();

  let myCart = JSON.parse(localStorage.getItem('myCart'));
  let useEffectCouter = myCart.length;

  useEffect(() => {
    fetch("http://localhost:8080/sideDishes")
    .then((response) => response.json())
    .then((data) => setSideDishes(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/menu")
    .then((response) => response.json())
    .then((data) => setMenuList(data));
  }, []);

  
  useEffect(() => {
    let selectedMenus = [];
    myCart && myCart.myCart.forEach((c) => {
      const foundMenu = menuList && menuList.find((m) => m.id === c);
      foundMenu && selectedMenus.push(foundMenu);
    });
    setCartList(selectedMenus);
  }, [useEffectCouter])


  const sidebarCloseHandler = () => { // FUNZT NICHT DER SCHEISS!!!!!
    setSidebarOpen({left: '110%'})
  }

  return (
    <>
      <div className="sidebar-wrapper" style={props.sidebarOpen} >
        <div className="sidebar-header">
          <span className="sidebar-header-title">Ihr Warenkorb</span>
          {/* <AiOutlineCloseCircle className="close-icon" onClick={sidebarCloseHandler}/> */}
        </div>
        <div className="cart-wrapper">
          <form>
            {myCart.myCart && myCart.myCart.forEach((meal, index) =>  <CartItem data={meal} index={index}/>)}
            <button className="order-btn" type="submit">Jetzt bestellen!</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
