import React, { Component } from 'react'
import './navbar.scss'
import SignIn from './SignIn';

export default class Navbar extends Component {
  state = { 
    show: false 
  }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

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
            <div id="modal-signIn" className="navbar-button-main">
              <SignIn />
              {/* <a href="https://shokadinueu.github.io/development-website" className="navbar-button-link">Sign In</a> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
