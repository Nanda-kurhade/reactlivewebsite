import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='menu'>
      <NavLink className='nav_link' to='/'>Home</NavLink>|
     <NavLink className='nav_link' to='/about'>AboutUs</NavLink>|
     <NavLink className='nav_link' to='/contactus'>ContactUs</NavLink>|
     <NavLink className='nav_link'to='/servies'>Service</NavLink>|
     </div>
     
    
      
    </>
   
  )
}

export default NavBar
