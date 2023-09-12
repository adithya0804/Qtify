import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import styles from './LandingPage.module.css'
import HeroSection from '../HeroSection/HeroSection'
import Card from '../Card/Card'
import TestImage from '../../assets/Test.png'
let cardData={
  title:'New BollyWood',
  follows:'100M',
  image:TestImage
}
const LandingPage = () => {
  return (
    <div>
      <Navbar>
        <SearchBar className={styles.searchDesktop}/>
      </Navbar>
      <SearchBar className={styles.searchMobile}/>
      <HeroSection className={styles.hero}/>
      <Card cardData={cardData} className={styles.testCard}/>
    </div>
  )
}

export default LandingPage
