import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import Hairtype from '../Components/Hairtype'
import Hairconcern from '../Components/Hairconcern'
import Products from '../Components/Products'
import PetTeezer from '../Components/PetTeezer'
import Explore from '../Components/Explore'
import Login from '../Components/Login'
import Cart from '../Components/Cart'
import Description from '../Components/Description'
import Privatepage from '../Components/Privatepage'

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hairtype' element={<Hairtype />}></Route>
        <Route path='/hairconcern' element={<Hairconcern />}></Route>
        <Route path='/product' element={
          <Privatepage>
          <Products/>
          </Privatepage>
          }></Route>
        <Route path='/petteezer' element={<PetTeezer/>}></Route>
        <Route path='/explore' element={<Explore />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/description/:id' element={<Description />}></Route>
      </Routes>
    </div>
  )
}

export default Allroutes
