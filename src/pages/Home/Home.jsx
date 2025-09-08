import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'


export default function Home() {

  const [category, setCategory] = useState("All")
  console.log(category);
  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}
