import React from 'react'
import './comunity.scss'

const Comunity = () => {
  return (
    <div>
      <div className="comunity-main">
        <div className="comunity-wrapper">
          <div className="comunity-heading">
              A global community at work
          </div>
          <p className="comunity-subheading">
            Our world-class freelancers offer over 3,000 unique services for you to choose from
          </p>
          <section className="comunity-body-wrapper">
            <div className="comunity-first">
              <div className="comunity-first-image">
                <a href="https://shokadinueu.github.io/development-website/" className="comunity-first-image-img">
                  <h3 className="comunity-first-image-id">User ID</h3>
                  <div className="comunity-first-image-category">Mobile and UI Design</div>
                </a>
              </div>
              <div className="comunity-first-content">
                <div className="comunity-first-content-header">
                  Only the Best <br /> for your project
                </div>
                <p className="comunity-first-content-text">
                  All designers and developers have been hand-picked. It ensures great results for you, and enables them to earn an income doing what they love.
                </p>
                <a href="https://shokadinueu.github.io/development-website/" className="comunity-first-content-button">
                  Browse Mobile Development Services
                </a>
              </div>
            </div>
            <div className="comunity-second">
              <a href="https://shokadinueu.github.io/development-website/" className="comunity-second-item">
                <div className="comunity-image-1">
                  <div className="comunity-image-text">
                    <h3 className="comunity-username">Mausee Design</h3>
                    <div className="comunity-image-text-category">Logo Design</div>
                  </div>
                </div>
              </a>
              <a href="https://shokadinueu.github.io/development-website/" className="comunity-second-item">
                <div className="comunity-image-2">
                  <div className="comunity-image-text">
                    <h3 className="comunity-username">Brand Busters</h3>
                    <div className="comunity-image-text-category">Poster Design</div>
                  </div>
                </div>
              </a>
              <a href="https://shokadinueu.github.io/development-website/" className="comunity-second-item">
                <div className="comunity-image-3">
                  <div className="comunity-image-text">
                    <h3 className="comunity-username">Sleepless Artist</h3>
                    <div className="comunity-image-text-category">Avatar Design</div>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Comunity
