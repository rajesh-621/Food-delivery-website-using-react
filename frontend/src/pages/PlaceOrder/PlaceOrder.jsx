import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'



const PlaceOrder = () => {

const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delevery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
        
      </div>

      <dev className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
              <hr />
              <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:20}</p>
            </div>
              <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+20}</b>
            </div>
          </div>
            <button >PROCEED TO PAYMENT</button>
        </div>

      </dev>
    </form>
  )
}

export default PlaceOrder