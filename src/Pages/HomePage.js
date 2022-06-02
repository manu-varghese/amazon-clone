import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Component/Header/Header'
import Home from '../Component/Home/Home'

function HomePage() {
  return (
    <div>
        <Routes>
            <Route path="/" element={[<Header/>,<Home/>]} />
        </Routes>
    </div>
  )
}

export default HomePage