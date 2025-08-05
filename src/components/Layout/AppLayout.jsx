import React from 'react'
import { Header } from '../UI/Header'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return <>
    <Header/>
    <Outlet/>
  </>

}
