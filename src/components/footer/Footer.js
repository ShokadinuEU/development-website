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
              <a href="#" className="footer-logo">ShokadinuEU</a>
              <ul className="footer-list-social">
                <li className="footer-list-item-social">
                  <a href="https://www.facebook.com/" className="footer-list-link-social">
                    <img className="footer-social-img" src="./data/images/logo/footer/facebook.jpg" alt="facebook"/>
                  </a>
                </li>
                <li className="footer-list-item-social">
                  <a href="https://twitter.com/" className="footer-list-link-social">
                    <img className="footer-social-img" src="./data/images/logo/footer/twitter.jpg" alt="twitter"/>
                  </a>
                </li>
                <li className="footer-list-item-social">
                  <a href="https://instagram.com/" className="footer-list-link-social">
                    <img className="footer-social-img" src="./data/images/logo/footer/instagram.jpg" alt="instagram"/>
                  </a>
                </li>
                <li className="footer-list-item-social">
                  <a href="https://youtube.com/" className="footer-list-link-social">
                    <img className="footer-social-img" src="./data/images/logo/footer/youtube.jpg" alt="youtube"/>
                  </a>
                </li>
              </ul>
            </ul>
          </div>
          <hr />
          <div className="footer-second">
            <ul className="footer-second-site-affiliate">
              <li ><a className="site-affiliate" target="_blank" href="#">Envato Market</a></li>
              <li ><a className="site-affiliate" target="_blank" href="#">Envato Elements</a></li>
              <li ><a className="site-affiliate" target="_blank" href="#">Envato Tuts+</a></li>
              <li ><a className="site-affiliate" target="_blank" href="#">Envato Sites</a></li>
              <li ><a className="site-affiliate" target="_blank" href="#">Sitemap</a></li>
            </ul>
            <p className="footer-second-copyright">
              Copyright © 2018 Envato Studio. All Rights Reserved
            </p><br />
            <p className="creator">Thank you <span>ShokadinuEU&#174;</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
