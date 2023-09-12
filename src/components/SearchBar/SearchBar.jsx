import React from 'react'
import styles from "./SearchBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBar = ({className}) => {
  return (
    <div className={`${styles.searchContainer} ${className}`}>
      <input placeholder='Search a album of your choice' type="search" className={styles.searchInput}/>
      <button className={styles.searchButton}>
        <FontAwesomeIcon size='lg' icon={faSearch} className={styles.searchIcon} />
      </button>
    </div>
  )
}

export default SearchBar
