import React from 'react'
import logo from '../../assets/5ffb61d99e16ce8b4f3c4e6da8a6d52d-baseline20.svg'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div className='logo'>
            <img src={logo}/>
        </div>
        <ul>
            <li><NavLink>Tracks</NavLink></li>
            <li><NavLink>Profiles</NavLink></li>
            <li><NavLink>Map</NavLink></li>
        </ul>
        <div>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </div>
    </div>
  )
}

export default Nav