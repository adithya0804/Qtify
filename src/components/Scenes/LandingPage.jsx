import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import './LandingPage.css'
import HeroSection from '../HeroSection/HeroSection'
import Card from '../Card/Card'
import TestImage from '../../assets/Test.png'
const LandingPage = () => {
  return (
    <div>
      <Navbar>
        <SearchBar className='search-desktop'/>
      </Navbar>
      <SearchBar className='search-mobile'/>
      <HeroSection className='hero'/>
      <Card title={'New BollyWood'} followers={'100M'} imageUrl={TestImage} className='testCard'/>
    </div>
  )
}

export default LandingPage
