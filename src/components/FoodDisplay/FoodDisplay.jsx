import React, { useContext } from 'react'
import "./FoodDisplay.css"
import {Context} from '../../Context/Context'
import Fooditem from '../Fooditem/Fooditem'


export default function FoodDisplay({category}) {

    const{food_list}=useContext(Context)


  return (
    <div className='food' id='Food'>
        <h2>Top dishes near you</h2>
        <div className='food_list'>
            {food_list.map((item)=>{
              if (category==="All" || category===item.category) {
                return <Fooditem key={item._id} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
              }
            })}
        </div>
    </div>
  )
}
