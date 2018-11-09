import React from 'react'
import './search.scss'

function Search() {
  return (
    <div>
      <div className="search-main">
        <div className="search-wrapper">
          <div className="search-heading">
            It’s easy, affordable and delivers
          </div>
          <form action="#" className="search-form-wrapper">
              <input type="text" className="search-form-input" placeholder="What job can we help you with? " />
              <button className="search-form-button">Search</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Search
