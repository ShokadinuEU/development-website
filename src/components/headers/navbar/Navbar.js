import React, { Component } from 'react'
import './navbar.scss'
import Login from './Login';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-main">
        <div className="navbar-wrapper">
          <div className="brand"><img src="./data/images/logo/navbar/brand-logo.png" alt="nav-brand-img"/></div>
          <div className="navbar-links">
            <div className="drop-down">Browse 
            <span><img src="./data/images/logo/header/right-arrow.png" alt="down-arrow-header" className="down-arrow-navbar"/></span>
            </div>
            <div className="nav-info">How it Work</div>
            <div className="navbar-button-main">
              <Login />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar