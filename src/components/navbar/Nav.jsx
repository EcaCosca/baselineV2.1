import React from 'react'
import logo from '../../assets/5ffb61d99e16ce8b4f3c4e6da8a6d52d-baseline20.svg'
import { NavLink } from 'react-router-dom'
import NavIcon from './NavIcon'
import {BsPlus} from 'react-icons/bs'
import {FaHome, FaPaypal} from 'react-icons/fa'
import {BiStats} from 'react-icons/bi'
import {LiaMapMarkedAltSolid} from 'react-icons/lia'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineMail, AiOutlineShoppingCart} from 'react-icons/ai'
import {HiDocumentText} from 'react-icons/hi'


const Nav = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 mx-auto flex flex-col bg-primary text-secondary shadow-lg'>
      <NavLink to="/">
        {({ isActive, isPending }) => (
        <NavIcon active={isActive} icon={<FaHome size={28}/>} text="Home" />
        )}
      </NavLink>
        <NavLink to="/dashboard">
        {({ isActive, isPending }) => (
        <NavIcon  active={isActive} icon={<BsPlus size={32}/>} text="Dashboard"/>
        )}
      </NavLink>
        <NavLink to="/profiles">
        {({ isActive, isPending }) => (
        <NavIcon  active={isActive} icon={<BiStats size={20}/>} text="Profiles"/>
        )}
      </NavLink>
        <NavLink to="/map">
        {({ isActive, isPending }) => (
        <NavIcon  active={isActive} icon={<LiaMapMarkedAltSolid size={20}/>} text="Map"/>
        )}
      </NavLink>
        <NavLink to="/settings">
        {({ isActive, isPending }) => (
        <NavIcon  active={isActive} icon={<FiSettings size={20}/>} text="Settings"/>
        )}
      </NavLink>
        <NavLink to="/contact">
        {({ isActive, isPending }) => (
        <NavIcon  active={isActive} icon={<AiOutlineMail size={20}/>} text="Contact"/>
        )}
      </NavLink>
        <NavLink to="/documentation">
        {({ isActive, isPending }) => (
        <NavIcon  active={isActive} icon={<HiDocumentText size={20}/>} text="Documentation"/>
        )}
      </NavLink>
        <NavLink to="/donate">
        {({ isActive, isPending }) => (
        <NavIcon  active={isActive} icon={<FaPaypal size={20}/>} text="Donate"/>
        )}
      </NavLink>
        <NavLink to="/market">
        {({ isActive, isPending }) => (
        <NavIcon  active={isActive} icon={<AiOutlineShoppingCart size={20}/>} text="Market"/>
        )}
      </NavLink>
    </div>
  )
}

export default Nav