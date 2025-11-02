import React, { useContext } from 'react'
import './Placeorder.css'
import { Context } from '../../Context/Context'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Placeorder = () => {
  const { getTotalCartAmount } = useContext(Context);

  const handlesubmit = (e) => {
   e.preventDefault()
    toast("Order Placed")
    setTimeout(() => {
      toast("Your Order has been Delivered 30 Mins!")
    }, 2500)
    
  }
  
  return (
    <form className='place-order' onSubmit={handlesubmit}>
      <ToastContainer position="top-right" autoClose={2000} closeButton={false} />
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' required/>
          <input type="text" placeholder='Last name' required/>
        </div>
        <input type="email" placeholder='Email address' required/>
        <input type="text" placeholder='Street' required/>
        <div className="multi-fields">
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' required/>
          <input type="text" placeholder='Country' required/>
        </div>
        <input type="text" placeholder='Phone' required/>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder;