import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'
import styles from './LandingPage.module.css'
import HeroSection from '../HeroSection/HeroSection'
import Section from '../Section/Section'
import { fetchAlbums, fetchGenreData, fetchSongs } from '../../Api/api'
import SongSection from '../SongSection/SongSection'

const LandingPage = () => {
  const [data, setData]=useState([]);
const fetchData=async()=>{
  try{
const albums= await fetchAlbums();
const songs =await fetchSongs();
const genres= await fetchGenreData()
genres.data.unshift({key:'all', label:"All"})
const data={
  ...albums,
  songs,
  "genres":genres.data
}
setData(data);
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
      <Section data={data.topAlbums} type={'album'} title={'Top Albums'}/>
      <Section data={data.newAlbums} type={'album'} title={'New Albums'}/>
      <SongSection title={'Songs'} genres={data.genres} data={data.songs} type={'song'}/>
      </div>
    </div>
  )
}

export default LandingPage
