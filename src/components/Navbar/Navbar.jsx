import React from 'react'
import Logo from '../Logo/Logo'
import "./Navbar.css"
import Button from '../Button/Button'
import SearchBar from '../SearchBar/SearchBar'

const Navbar = ({children}) => {
  return (
  <nav className='navbar'>
    <Logo/>
  {children}
    <Button text="Give Feedback" className="feedbackButton" onClick={()=>{}}/>
  </nav>
  )
}

export default Navbar
