import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/Header'
import { localTokenKeys } from '../token'

const Private = () => {
    let token = localStorage.getItem(localTokenKeys)
  return token ? (
    <>
      <Header/>
      <Outlet/>
    </>
  ):(
    <Navigate to='/login'/>
  )
}

export default Private
