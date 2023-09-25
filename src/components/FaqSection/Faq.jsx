import React from 'react'
import styles from "./Faq.module.css"
import AccordionSection from '../Accordian/AccordionSection'


const Faq = ({data, className}) => {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={styles.title}>FAQs</div>
<AccordionSection data={data}/>
    </div>
  )
}

export default Faq
