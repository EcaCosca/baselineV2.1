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
        <NavIcon icon={<FaHome size={28}/>} text="Home"/>
        <NavIcon icon={<BsPlus size={32}/>} text="Dashboard"/>
        <NavIcon icon={<BiStats size={20}/>} text="Profiles"/>
        <NavIcon icon={<LiaMapMarkedAltSolid size={20}/>} text="Map"/>
        <NavIcon icon={<FiSettings size={20}/>} text="Settings"/>
        <NavIcon icon={<AiOutlineMail size={20}/>} text="Contact"/>
        <NavIcon icon={<HiDocumentText size={20}/>} text="Documentation"/>
        <NavIcon icon={<FaPaypal size={20}/>} text="Donate"/>
        <NavIcon icon={<AiOutlineShoppingCart size={20}/>} text="Sale"/>
    </div>
  )
}

export default Nav