import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import styles from './LandingPage.module.css'
import HeroSection from '../HeroSection/HeroSection'
import  axios  from 'axios'
import Grid from '../Grid/Grid'

const LandingPage = () => {
  const [data, setData]=useState([]);
const fetchData=async()=>{
  try{
const result = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
setData(result.data);
  }catch(e){
    console.log(e)
  }
}
useEffect(()=>{
  fetchData();
},[])
  return (
    <div>
      <Navbar>
        <SearchBar className={styles.searchDesktop}/>
      </Navbar>
      <SearchBar className={styles.searchMobile}/>
      <HeroSection className={styles.hero}/>
      <div className={styles.content}>
      <Grid data={data}/>
      </div>
    </div>
  )
}

export default LandingPage
