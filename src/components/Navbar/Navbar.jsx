import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'

export default function Navbar({ setLogin }) {

  const { getTotalCartAmount } = useContext(Context);

  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="list">
        <Link to='/'>Home</Link>
        <a href='#Menu'>Menu</a>
        <a href='#Footer'>Contact us</a>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="icon" />
        <div className='icon1'>
          <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0 ?'' :'dot'}></div>
        </div>
        <div>
          <button onClick={() => setLogin(true)}>Sign in</button>
        </div>
      </div>
    </div>
  )
}
