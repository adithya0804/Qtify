import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div>
      <Navbar>
        <SearchBar className='search-desktop'/>
      </Navbar>
      <SearchBar className='search-mobile'/>
    </div>
  )
}

export default LandingPage
