import React from 'react'
import './header.scss'

function Header() {
  return (
    <div>
      <div className="header-main">
        <div className="header-wrapper">
          <div className="header-content">
            <h1>A community of designers, developers and creatives ready for your project</h1>
            <div className="header-info">
              <div className="header-step">
                <div className="header-step-icon">
                  <img src="../../../data/images/logo/header/green-check.png" alt="search" className="header-step_icon-one"/>
                </div>
                <p className="header-step-text">
                  Select your service from our marketplace
                </p>
              </div>
              <img src="../../../data/images/logo/header/right-arrow.png" alt="" className="right-arrow-header"/>
              <div className="header-step">
                <div className="header-step-icon">
                <img src="../../../data/images/logo/header/green-dialog.png" alt="dialog" className="header-step_icon-two"/>
                </div>
                <p className="header-step-text">
                  Collaborate with an expert on your project
                </p>
              </div>
              <img src="../../../data/images/logo/header/right-arrow.png" alt="" className="right-arrow-header"/>
              <div className="header-step">
                <div className="header-step-icon">
                <img src="../../../data/images/logo/header/green-heart.png" alt="heart" className="header-step_icon-three"/>
                </div>
                <p className="header-step-text">
                  Review, approve and you're done!
                </p>
              </div>
            </div>
            <form className="header-form">
              <input type="text" className="header-form-input" placeholder="Find a service: eg. 'Logo Design' " />
              <button className="header-form-button">Search</button>
            </form>
            <div className="header-trending-services-main">
              <div className="trending-services-wrapper">
                <p className="trending-services-label">Trending Services:</p>
                <a className="trending-services-link">
                  App Development
                </a>
                <a className="trending-services-link">
                  Logo Design
                </a>
                <a className="trending-services-link">
                  Landing Page Design
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header