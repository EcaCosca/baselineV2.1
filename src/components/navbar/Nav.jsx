import React from 'react'
import logo from '../../assets/5ffb61d99e16ce8b4f3c4e6da8a6d52d-baseline20.svg'
import { NavLink } from 'react-router-dom'
import NavIcon from './NavIcon'
import {BsPlus, BsFillLightningFill,BsGearFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'


const Nav = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg'>
        {/* <div className='logo'>
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
        </div> */}
        {/* <i>A</i>
        <i>B</i>
        <i>C</i>
        <i>D</i> */}
        <NavIcon icon={<FaFire size={28}/>}/>
        <NavIcon icon={<BsPlus size={32}/>}/>
        <NavIcon icon={<BsFillLightningFill size={20}/>}/>
        <NavIcon icon={<FaPoo size={20}/>}/>
    </div>
  )
}

export default Nav