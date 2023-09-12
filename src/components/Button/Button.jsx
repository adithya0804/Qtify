import React from 'react'
import styles from "./Button.module.css"

const Button = ({text, className, onClick}) => {
  return (
<button className={`${className} ${styles.button}`} onClick={onClick}>{text}</button>
  )
}

export default Button
