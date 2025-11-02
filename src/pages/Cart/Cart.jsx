import React, { useContext, useState } from 'react'
import './Cart.css'
import { Context } from '../../Context/Context'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Cart() {

  const [value, setValue] = useState("")
  const navigate = useNavigate()
  const { cartItems, removeToCard, food_list, getTotalCartAmount } = useContext(Context)

  return (
    <div className='cart'>
      <div className="card-item">
        <div className="cart-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-title cart-items'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeToCard(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div>
            <div className="total-detail">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="total-detail">
              <p>Delivery fee</p>
              <p>₹{getTotalCartAmount() ? 50 : 0}</p>
            </div>
            <hr />
            <div className="total-detail">
              <b>Total</b>
              <b>₹{getTotalCartAmount() ? getTotalCartAmount() + 50 : 0}</b>
            </div>
          </div>

          <button onClick={() =>
            getTotalCartAmount() !== 0
              ? navigate("/placeorder")
              : toast("Please first select your favorite food", {
                style: {
                  background: 'white',
                  color: 'black',
                }
              })
          }>
            PROCEED TO CHECKOUT
          </button>
          <ToastContainer position="top-right" autoClose={3000} closeButton={false} />
        </div>
        <div className='promocode'>
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="codeinput">
              <input onChange={(e) => setValue(e.target.value)} type="text" value={value} placeholder='Promo code' />
              <button onClick={() =>
                value === ""
                  ? toast("please enter any key ?", {
                    style: {
                      background: 'white',
                      color: 'black',
                    }
                  })
                  : toast("Your Code has been activated !!!", {
                    style: {
                      background: 'white',
                      color: 'black',
                    }
                  })
              }>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
