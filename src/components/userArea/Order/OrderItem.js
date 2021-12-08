import React from 'react';
import './Order.css';

function OrderItem(props) {
  console.log(props)
  return (
    <div className="user-order-wrapper">
      <div className="single-order">
        {props.id} - 
        {props.menus} - 
        {props.sideDishes} - 
        {props.invoiceId} 
      </div>
    </div>
  )
}

export default OrderItem
