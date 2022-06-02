import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from '../Component/Checkout/Checkout'
import Header from '../Component/Header/Header'

function CheckoutPage() {
  return (
    <div>
        <Routes>
            <Route path='/checkout' element={[<Header/>,<Checkout/>]}/>
        </Routes>
    </div>
  )
}

export default CheckoutPage