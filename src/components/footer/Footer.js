import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <div>
      <div className="footer-main">
        <div className="footer-wrapper">
          <div className="footer-first">
            <ul className="footer-list">
              <li className="footer-list-label">ShokadinuEU</li>
              <li className="footer-list-item">How It Works</li>
              <li className="footer-list-item">FAQ</li>
              <li className="footer-list-item">About Us</li>
              <li className="footer-list-item">Testimonials</li>
            </ul>
            <ul className="footer-list">
              <li className="footer-list-label">Help</li>
              <li className="footer-list-item">Terms & Conditions</li>
              <li className="footer-list-item">Content Policy</li>
              <li className="footer-list-item">Privacy Policy</li>
              <li className="footer-list-item">Contact Us</li>
            </ul>
            <ul className="footer-list">
              <li className="footer-list-label">Community</li>
              <li className="footer-list-item">Blog</li>
              <li className="footer-list-item">Meetups</li>
              <li className="footer-list-item">Affiliates</li>
              <li className="footer-list-item">Forums</li>
            </ul>
            <ul className="footer-list">
              <a href="#" className="footer-logo"></a>
              <ul className="footer-list">
                <li className="footer-list-item-social"></li>
                <li className="footer-list-item-social"></li>
                <li className="footer-list-item-social"></li>
                <li className="footer-list-item-social"></li>
              </ul>
            </ul>
          </div>
          <hr />
          <div className="footer-second">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
