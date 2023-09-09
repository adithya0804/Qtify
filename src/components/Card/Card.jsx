import React from 'react'
import'./Card.css'
const Card = ({className, imageUrl, title, followers}) => {
  return (
    <div className={`card ${className}`}>
      <div className='topSection'>
        <div className='imageSection'>
            <img src={imageUrl} alt={title}/>
        </div>
        <span className='followers'>{followers} Follows</span>
      </div>
      <span>{title}</span>
    </div>
  )
}

export default Card
