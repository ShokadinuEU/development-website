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
              <div className="header-step">
                <div className="header-step-icon">
                <img src="../../../data/images/logo/header/green-dialog.png" alt="dialog" className="header-step_icon-two"/>
                </div>
                <p className="header-step-text">
                  Collaborate with an expert on your project
                </p>
              </div>
              <div className="header-step">
                <div className="header-step-icon">
                <img src="../../../data/images/logo/header/green-heart.png" alt="heart" className="header-step_icon-three"/>
                </div>
                <p className="header-step-text">
                  Review, approve and you're done!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header