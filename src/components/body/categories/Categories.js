import React from 'react'
import './categories.scss'

function Categories() {
  return (
    <div>
      <div className="categories-main">
        <div className="categories-wrapper">
          <div className="categories-heading">Popular Categories</div>
          <p className="categories-subheading">
              From logo design to WordPress customization, we've got what you need
          </p>
          <div className="categories-grid-wrapper">
            <div className="categories-card-wrapper">
              <a href="/" alt="" className="categories-card card-one">
                <div className="categories-card-name">
                  <h4>Audio</h4>
                </div>
              </a>
            </div>
            <div className="categories-card-wrapper">
              <a href="/" alt="Design & Graphics" className="categories-card card-two">
                <div className="categories-card-name card-three">
                  <h4>Design & Graphics</h4>
                </div>
              </a>
            </div>
            <div className="categories-card-wrapper">
              <a href="/" alt="WordPress" className="categories-card card-three">
                <div className="categories-card-name">
                  <h4>WordPress</h4>
                </div>
              </a>
            </div>
            <div className="categories-card-wrapper">
              <a href="/" alt="Logo Design & Branding" className="categories-card card-four">
                <div className="categories-card-name">
                  <h4>Logo Design & Branding</h4>
                </div>
              </a>
            </div>
            <div className="categories-card-wrapper">
              <a href="/" alt="Online Marketing" className="categories-card card-five">
                <div className="categories-card-name">
                  <h4>Online Marketing</h4>
                </div>
              </a>
            </div>
            <div className="categories-card-wrapper">
              <a href="/" alt="Video & Animation" className="categories-card card-six">
                <div className="categories-card-name">
                  <h4>Video & Animation</h4>
                </div>
              </a>
            </div>
            <div className="categories-card-wrapper">
              <a href="/" alt="Mobile & Apps" className="categories-card card-seven">
                <div className="categories-card-name">
                  <h4>Mobile & Apps</h4>
                </div>
              </a>
            </div>
            <div className="categories-card-wrapper">
              <a href="/" alt="Websites and Programming" className="categories-card card-eight">
                <div className="categories-card-name">
                  <h4>Websites and Programming</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default  Categories
