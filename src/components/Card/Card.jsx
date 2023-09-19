import React from 'react'
import { Tooltip } from '@mui/material'
import styles from './Card.module.css'
const Card = ({className, cardData, type}) => {
  return (
    <>
     {type==='album'?(
        <Tooltip className={styles.card} title={`${cardData.songs.length} songs`} placement="top">    
      <div className={styles.topSection}>
        <div className={styles.imageSection}>
            <img src={cardData.image} alt={cardData.title} className={styles.image}/>
        </div>
        <span className={styles.followers}>{`${(
                Number(cardData.follows) / 1000
              ).toFixed(1)}k Follows`}</span>
      </div>
      <span className={styles.title}>{cardData.title}</span>
     </Tooltip>):<div className={`${styles.card} ${className}`}>
     <div className={styles.topSection}>
        <div className={styles.imageSection}>
            <img src={cardData.image} alt={cardData.title} className={styles.image}/>
        </div>
        <span className={styles.followers}>{`${(
                Number(cardData.likes) / 1000
              ).toFixed(1)}k Likes`}</span>
      </div> </div>}

    </>
  )
}

export default Card
