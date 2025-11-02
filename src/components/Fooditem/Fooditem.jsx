import React, { useContext } from 'react'
import './Fooditem.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'

export default function Fooditem({ id, name, price, description, image }) {

  const { cartItems, addToCart, removeToCard } = useContext(Context)

  return (
    <div className='fooditem'>
      <div className='container'>
        <img className='img' src={image} alt=" " />

        {!cartItems[id]
          ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className='count'>
            <img onClick={() => removeToCard(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        }

      </div>
      <div className='info'>
        <div className="rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className='descrip'>{description}</p>
        <p className="price">₹{price}</p>
      </div>
    </div>
  )
}
