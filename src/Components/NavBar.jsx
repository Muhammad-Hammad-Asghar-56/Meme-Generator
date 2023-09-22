import React from 'react'
import '../Style/NavBar.css'
import logo from '../Assets/logo.png'
const NavBar = () => {
  return (
    <div className='navBar'>
    <div className="navBar-Item">
        <img className='logo-img' src={logo} width={'60px'} height={'60px'} alt="" />
    </div>
    <div className="navBar-Item">
        Meme Generator
    </div>
    </div>
  )
}

export default NavBar
