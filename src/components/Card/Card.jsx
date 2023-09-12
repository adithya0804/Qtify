import React from 'react'
import styles from './Card.module.css'
const Card = ({className, cardData}) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.topSection}>
        <div className={styles.imageSection}>
            <img src={cardData.image} alt={cardData.title} className={styles.image}/>
        </div>
        <span className={styles.followers}>{cardData.follows} Follows</span>
      </div>
      <span className={styles.title}>{cardData.title}</span>
    </div>
  )
}

export default Card
