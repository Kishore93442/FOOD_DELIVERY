import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'

export default function Menu({ category, setCategory }) {


  return (
    <div className='menu' id='Menu'>
      <h1>Explore our menu</h1>
      <p className='menu_text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, One delicious dish at a time.</p>
      <div className="list-item">
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='item'>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="menu_item" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}
