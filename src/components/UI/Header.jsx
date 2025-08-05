import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
        <div className='container'>
      <div className='grid navbar-grid'>
        <div>
            <h1>Rest Services Store</h1>  
        </div>

        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/list"}>Products</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </header>
  )
}
