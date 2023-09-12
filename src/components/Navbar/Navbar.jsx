import React from 'react'
import Logo from '../Logo/Logo'
import styles from "./Navbar.module.css"
import Button from '../Button/Button'

const Navbar = ({children}) => {
  return (
  <nav className={styles.navbar}>
    <Logo className={styles.logo}/>
  {children}
    <Button text="Give Feedback" className={styles.feedbackButton} onClick={()=>{}}/>
  </nav>
  )
}

export default Navbar
