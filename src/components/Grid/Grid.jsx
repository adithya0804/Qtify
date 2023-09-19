import React, { useEffect } from 'react'
import Card from '../Card/Card'
import styles from "./Grid.module.css"

const Grid = ({classname, data, type}) => {
  useEffect(()=>{
    console.log(data);
  },[data])
  return (
    <div className={styles.grid}>
      {
        data.map((item)=>{
        return    <Card cardData={item} key={item.id} type={type}/>
        })
      }
    </div>
  )
}

export default Grid
