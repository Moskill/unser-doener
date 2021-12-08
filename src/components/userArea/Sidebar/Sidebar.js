import React, { useState, useContext, useEffect } from 'react'
import './Sidebar.css'
import CartItem from './CartItem'
import paypal from '../../../img/paypal.png'
import cashpay from '../../../img/cashpay.png'
import klarna from '../../../img/klarna.png'
import applepay from '../../../img/applepay.png'
import { AuthContext } from '../context/AuthContext'
let myCart = JSON.parse(localStorage.getItem('myCart'))

function Sidebar(props) {
  const { googleUserData } = useContext(AuthContext)

  const [sidebarOpen, setSidebarOpen] = useState(props.sidebarOpen)
  const [menuList, setMenuList] = useState()
  const [cartList, setCartList] = useState(myCart)
  const [orderLength, setOrderLength] = useState()
  const [orderPage, setOrderPage] = useState(1)
  const [userAddress, setUserAddress] = useState()
  const [total, setTotal] = useState()

  console.log('Context test in sidebar: ', googleUserData)

  useEffect(() => {
    orderPageHandler()
    console.log('LECKOMIO')
  }, [orderPage])

  // Eine Order an die DB senden
  const sendOrder = (orderData) => {
    const orderBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    }

    fetch('http://localhost:8080/orders', orderBody)
      .then((response) => response.json())
      .then((data) => console.log(data, 'POST and die order Route'))
  }

  // Den Shopping Cart updaten
  useEffect(() => {
    localStorage.getItem('myCart') &&
      localStorage.setItem('myCart', JSON.stringify(cartList))
  }, [cartList])

  const sidebarCloseHandler = () => {
    // FUNZT NICHT DER SCHEISS!!!!!
    setSidebarOpen({ left: '110%' })
  }

  // Die Länge der Order Tabelle ermitteln
  useEffect(() => {
    fetch('http://localhost:8080/orders')
      .then((response) => response.json())
      .then((data) => setOrderLength(data.length))
  }, [])

  // Eine unique Invoice Nummer erstellen
  const createInvoiceId = () => {
    let dateNow = new Date()
    let yearNow = dateNow.getFullYear()
    let placeholder = '000'
    switch (orderLength) {
      case orderLength < 10:
        placeholder = '000'
        break
      case orderLength < 100:
        placeholder = '00'
        break
      case orderLength < 1000:
        placeholder = '0'
        break
    }
    return `${yearNow}-${placeholder}${orderLength + 1}`
  }

  // Eine Bestellung an die Darenbank senden
  const orderHandler = (e) => {
    e.preventDefault()
    setOrderPage(2)

    let orderLength = e.target.length - 1
    let invoiceNo = createInvoiceId()
    let orderMenus = []
    let orderTotal = 0
    let orderData = {}

    if (e.target.price[0]) {
      console.log('Objekt')
      e.target.price.forEach((price) => (orderTotal += parseInt(price.value)))
      for (let i = 0; i < e.target.price.length; i++) {
        orderData = {
          menus: e.target.menu[i].value,
          sideDishes: e.target.sideDishes[i].value,
          total: e.target.price[i].value,
          invoiceId: invoiceNo,
        }
        sendOrder(orderData)
      }
    } else {
      console.log('Kein Objekt')
      orderData = {
        menus: e.target.menu.value,
        sideDishes: e.target.sideDishes.value,
        total: e.target.price.value,
        invoiceId: invoiceNo,
      }
      sendOrder(orderData)
    }

    setTotal(e.target.price.value)
  }

  // Handler speichert die Adresse zwischen
  const addressHandler = (e) => {
    e.preventDefault()
    console.log('HALLLLOOOO????????????????????????')
    setOrderPage(3)
    setUserAddress([
      {
        first_name: e.target[0].value,
        last_name: e.target[1].value,
        street: e.target[2].value,
        house_no: e.target[3].value,
        city: e.target[4].value,
        zip: e.target[5].value,
        phone: e.target[6].value,
        email: e.target[7].value,
      },
    ])
    const userBody = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userAddress[0]),
    }
    fetch('http://localhost:8080/users', userBody)
      .then((response) => response.json())
      .then((data) => console.log(data, 'POST and die users Route'))

    console.log(userAddress[0])
  }

  // Die Anagabe der Zahlungsmthode
  const paymentHandler = (e) => {
    e.preventDefault()
    console.log(e)
  }

  // Dieser Handler regelt die Sidebar
  const orderPageHandler = () => {
    switch (orderPage) {
      case 1:
        return (
          <div className='cart-wrapper'>
            <form onSubmit={orderHandler}>
              {myCart &&
                cartList.myCart.map((meal, index) => (
                  <CartItem data={meal} index={index} />
                ))}
              <button className='order-btn' type='submit'>
                Weiter
              </button>
            </form>
          </div>
        )
        break
      case 2:
        return (
          <div className='address-form'>
            <h4>Bitte geben Sie Ihre Lieferadresse ein</h4>
            <form onSubmit={addressHandler}>
              <label for='first_name'>Vorname</label> <br />
              <input
                className='address-input'
                type='text'
                placeholder='Vorname'
                name='first_Name'
                value={userAddress && userAddress[0].first_name}
              />
              <br />
              <label for='last_name'>Nachname</label> <br />
              <input
                className='address-input'
                type='text'
                placeholder='Nachname'
                name='last_Name'
                value={userAddress && userAddress[0].last_name}
              />
              <br />
              <label for='street_name'>Straße</label> <br />
              <input
                className='address-input'
                type='text'
                placeholder='Straße'
                name='street'
                value={userAddress && userAddress[0].street}
              />
              <br />
              <label for='house_no'>Hausnummer</label> <br />
              <input
                className='address-input'
                type='text'
                placeholder='Hausnummer'
                name='house_no'
                value={userAddress && userAddress[0].house_no}
              />
              <br />
              <label for='city'>Stadt</label> <br />
              <input
                className='address-input'
                type='text'
                placeholder='Stadt'
                name='city'
                value={userAddress && userAddress[0].city}
              />
              <br />
              <label for='zip'>PLZ</label> <br />
              <input
                className='address-input'
                type='text'
                placeholder='PLZ'
                name='zip'
                value={userAddress && userAddress[0].zip}
              />
              <br />
              <label for='phone'>Telefon</label> <br />
              <input
                className='address-input'
                type='text'
                placeholder='Telefon'
                name='phone'
                value={userAddress && userAddress[0].phone}
              />
              <br />
              <label for='email'>eMail-Adresse</label> <br />
              <input
                className='address-input'
                type='text'
                placeholder='eMail-Adresse'
                name='email'
                value={userAddress && userAddress[0].email}
              />
              <br />
              <button className='order-btn' onClick={() => setOrderPage(1)}>
                Zurück
              </button>
              <button className='order-btn' type='submit'>
                Weiter
              </button>
            </form>
          </div>
        )
        break
      case 3:
        return (
          <div className='address-form'>
            <h4>Bitte geben Sie eine Zahlungsmethode an</h4>
            <form onSubmit={paymentHandler}>
              <div className='payment-method'>
                <img src={paypal} />
                Paypal
                <input type='radio' name='payment' className='payment-radio' />
              </div>
              <div className='payment-method'>
                <img src={applepay} />
                Apple Pay
                <input type='radio' name='payment' className='payment-radio' />
              </div>
              <div className='payment-method'>
                <img src={klarna} />
                Klarna
                <input type='radio' name='payment' className='payment-radio' />
              </div>
              <div className='payment-method'>
                <img src={cashpay} />
                Barzahlung
                <input type='radio' name='payment' className='payment-radio' />
              </div>

              <button className='order-btn' onClick={() => setOrderPage(2)}>
                Zurück
              </button>

              <button
                className='order-btn'
                type='submit'
                onClick={() => setOrderPage(4)}>
                Weiter
              </button>
            </form>
          </div>
        )
        break
      case 4:
        return (
          <div className='goodbye-text'>
            <h4>
              Vielen Dank für Ihr Bestellung. Sie können den Status Ihrer
              Bestllung hier verfolgen.
            </h4>
          </div>
        )
        break
    }
  }

  return (
    <>
      <div className='sidebar-wrapper' style={props.sidebarOpen}>
        <div className='sidebar-header'>
          <span className='sidebar-header-title'>Ihr Warenkorb</span>
          {/* <AiOutlineCloseCircle className="close-icon" onClick={sidebarCloseHandler}/> */}
        </div>
        {orderPageHandler()}
      </div>
    </>
  )
}

export default Sidebar
