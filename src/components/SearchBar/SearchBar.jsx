import React from 'react'
import "./SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const SearchBar = ({className}) => {
  return (
    <div className={`searchContainer ${className}`}>
      <input placeholder='Search a album of your choice' type="search" className='searchInput'/>
      <button className="search-button">
        <FontAwesomeIcon size='lg' icon={faSearch} className='searchIcon' />
      </button>
    </div>
  )
}

export default SearchBar
