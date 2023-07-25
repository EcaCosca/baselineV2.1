import React from 'react'

const NavIcon = ({active, icon, text = "tooltip"}) => {
  return (
    <div className={`sidebar-icon mt-2 mb-3 group${active ? "bg-green-600 text-white" : ""}`}>
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
  )
}

export default NavIcon