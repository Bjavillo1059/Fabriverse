import React from "react";
import "./Footer.css";
// import { Button } from "../Button/Button";
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className="footer-container">      
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a to="/about">How it works</a>         
            <a to="/about">Testimonials</a>         
            <a to="/about">Terms of Service</a>         
          </div>

          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <a href='tell:123-456-7890'>Contact</a>
            <a href='/'>Support</a>               
          </div>

          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href='/'>Instagram</a>
            <a href='/'>Facebook</a>
            <a href='/'>Youtube</a>
            <a href='/'>Twitter</a>              
          </div>

          <div className="footer-link-items">
            <h2>Other Links</h2>
            
            <li>
            <a
              href="https://github.com/Bjavillo1059/Fabriverse"
              className="footer-link-tab"
            >
              GitHub
            </a>
            </li>                   
          </div>
          
        </div>
      </div>
      {/* <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Made with Blood Sweat and Tears! Come join me in exploring this world!
        </p>
        <p className="footer-subscription-text">
          You can subscribe if you like at any time!
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section> */}
    </div>
    </FooterStyle>
  );
}

export default Footer;
