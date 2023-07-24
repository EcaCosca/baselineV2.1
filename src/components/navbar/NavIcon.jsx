import React from 'react'

const NavIcon = ({icon, text = "tooltip"}) => {
  return (
    <div className="sidebar-icon mt-2 mb-3 group">
      {icon}
      <span className='sidebar-tooltip group-hover:scale-100'>
        {text}
      </span>
    </div>
  )
}

export default NavIcon