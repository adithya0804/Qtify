import React from 'react'
import './HeroSection.css'
import HeroImage from '../../assets/heroimage.svg'

const HeroSection = ({className}) => {
  return (
    <div className={`heroSection ${className}`}>
        <div className='text'>
      <p>100 Thousand Songs, ad-free</p>
      <p>Over thousands podcast episodes</p>
   </div> 
   <div className='heroImage'>   <img src={HeroImage}/></div>

   </div>
  )
}

export default HeroSection
