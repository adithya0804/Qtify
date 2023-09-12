import React from 'react'
import styles from './HeroSection.module.css'
import HeroImage from '../../assets/heroimage.svg'

const HeroSection = ({className}) => {
  return (
    <div className={`${styles.heroSection} ${className}`}>
        <div className={styles.text}>
      <p>100 Thousand Songs, ad-free</p>
      <p>Over thousands podcast episodes</p>
   </div> 
   <div className={styles.heroImage}>   <img src={HeroImage} alt="hero"/></div>

   </div>
  )
}

export default HeroSection
