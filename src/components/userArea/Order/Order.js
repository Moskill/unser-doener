import React, { useState, useEffect, useContext } from 'react';
import OrderItem from './OrderItem';
import { AuthContext } from '../context/AuthContext'
import './Order.css';


function Order() {
  
  const { googleUserData } = useContext(AuthContext)
  const [orders, setOrders] = useState([]);
  const [ordersActualUser, setOrdersActialUser] = useState();
  
  // Einmal alle Bestellungen holen
  useEffect(() => {
    fetch('http://localhost:8080/orders')
    .then((response) => response.json())
    .then((data) => setOrders(data))
  }, []);

  // Filtere jene Bestellungen, die zum google-Konto gehören
  useEffect(() => {
    setOrdersActialUser(orders.filter(order => order.email == googleUserData.profileObj.email))
  }, [googleUserData])
  
  console.log(ordersActualUser)

  orders && orders.map(order => <h5>{order.id}</h5>)

  return (
    <div className="order-wrapper">
      <h2>Deine Bestellungen</h2>
      {ordersActualUser && ordersActualUser.map(order => 
        <OrderItem 
          id={order.id} 
          menus={order.menus} 
          sideDishes={order.sideDishes} 
          invoiceId={order.invoiceId} 
          createdAt={order.createdAt} 
          total={order.total} 
        />
      )}
    </div>
  )
}

export default Order
