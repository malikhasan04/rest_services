import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './components/Layout/AppLayout'
import { Home } from './pages/Home'
import { Products } from './pages/Products'
import "./App.css";
import { UpdateProducts } from './pages/UpdateProducts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/list",
        element: <Products/>
      },
      {
        path: "/products/:id",
        element: <UpdateProducts/>
      },
    ]
  },
])

export const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}
