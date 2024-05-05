import React from 'react';
import { ReactComponent as FooterShape1 } from '../../assets/svg/Vector2.svg';
import { ReactComponent as FooterShape2 } from '../../assets/svg/Vector3.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer class="footer-wrapper">
      <div className='footer'>
        <div class="footer-column">
          <div class="brand">
            <div className="navbar-logo">
              <h1 className="footer-logo" > Wave </h1>
            </div>
            <p class="brand-description">One stop solution</p>
            <div class="social-media-icons">
              <i class="icon ion-social-facebook"><a href='https://www.google.com'></a></i>
              <i class="icon ion-social-instagram"><a href='https://www.google.com'></a></i>
              <i class="icon ion-social-twitter"><a href='https://www.google.com'></a></i>
              <i class="icon ion-social-linkedin"><a href='https://www.google.com'></a></i>
            </div>
          </div>
        </div>
        <div class="footer-column">
          <h3 class="column-heading">Company</h3>
          <ul class="footer-links">
          <li><a href="#management">Management</a></li>
    <li><a href="#careers">Careers</a></li>
    <li><a href="#suggestions">Suggestions</a></li>
    <li><a href="#stakeholders">Stakeholders</a></li>
    <li><a href="#services">Services</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="column-heading">Resources</h3>
          <ul class="footer-links">
            <li><a href="https://www.google.com">Ranking</a></li>
            <li><a href="https://www.google.com">FAQ</a></li>
            <li><a href="https://www.google.com">RSS Feed</a></li>
            <li><a href="https://www.google.com">Management</a></li>
            <li><a href="https://www.google.com">Location</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="column-heading">Quick Links</h3>
          <ul class="footer-links">
          <li><a href="#">About</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Management</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3 class="column-heading">More</h3>
          <ul class="footer-links">
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Web Ranking</a></li>
            <li><a href="#">More Info</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Mail Us</a></li>
          </ul>
        </div>
      </div>
      {/* Made with <i class="icon ion-heart"></i> in Switzerland */}
      <span className='footer-copyright'>Made with <i class="icon ion-heart" style={{ color: '#e25555' }}></i> in INDIA 🇮🇳, Wave © 2024</span>
    </footer>
  );
};

export default Footer;
