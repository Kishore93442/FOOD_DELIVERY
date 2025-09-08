import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Placeorder from './pages/Placeorder/Placeorder'

export default function App() {

  const [login, setLogin] = useState(null)

  return (
    <>
      {login ? <Login setLogin={setLogin} /> : <></>}
      <div className='app'>
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<Placeorder/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}
