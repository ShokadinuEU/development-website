import React, { Component } from 'react'
import './navbar.scss'

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-main">
        <div className="navbar-wrapper">
          <div className="brand"><img src="./data/images/logo/navbar/brand-logo.png" alt="nav-brand-img"/></div>
          <div className="navbar-links">
            <div className="drop-down">Browse 
            <span><img src="./data/images/logo/header/right-arrow.png" alt="" className="down-arrow-navbar"/></span>
            </div>
            <div className="nav-info">How it Work</div>
            <div className="navbar-button-main">
              <a href="https://shokadinueu.github.io/development-website" className="navbar-button-link">Sign In</a></div>
          </div>
        </div>
      </div>
    )
  }
}
