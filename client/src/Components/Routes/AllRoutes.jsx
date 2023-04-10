import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserF from '../Pages/UserF'

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<UserF/>}></Route>
    </Routes>
  )
}

export default AllRoutes