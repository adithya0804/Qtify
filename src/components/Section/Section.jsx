import React, { useState } from 'react'
import styles from "./Section.module.css"
import  Grid  from '../Grid/Grid'
import Carousel from '../Carousel/Carousel'

const Section = ({data, title, type}) => {
    const [showAll, setShowAll]=useState(false)
  return (
    <div className={styles.sectionWrapper}>
        <div className={styles.topSection}>
            <span className={styles.title}>{title}</span>
            <span onClick={()=>setShowAll(!showAll)} className={styles.showAll}>{showAll?"Collapse":"Show All"}</span>
        </div>
      {
        showAll? <Grid data={data} type={type}/> : <Carousel data={data} type={type}/>
      }  
      
    </div>
  )
}

export default Section
