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
            <Link to="/about">How it works</Link>         
            <Link to="/about">Testimonials</Link>        
          </div>

          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <a href='/contact'>Site Support</a>
          </div>

          <div className="footer-link-items">
            <h2>Other Links</h2>
            <ul>            
            <li>
            <a
              href="https://github.com/Bjavillo1059"
              className="footer-link-tab"            >
              Brandon's GitHub
            </a>
            </li>
            <li>
            <a
              href="https://github.com/joe-toni"
              className="footer-link-tab"            >
              Jose's GitHub
            </a>
            </li>
            <li>
            <a
              href="https://github.com/madavila5"
              className="footer-link-tab"            >
              Miguel's GitHub
            </a>
            </li>
            <li>
            <a
              href="https://github.com/Modsia16"
              className="footer-link-tab"            >
              Carina's GitHub
            </a>
            </li>
            <li>
            <a
              href="https://github.com/thuggwafflezz"
              className="footer-link-tab"            >
               Javier's GitHub
            </a>
            </li>
            <li>
            <a
              href="https://github.com/williamskarina"
              className="footer-link-tab"            >
              Karina's GitHub
            </a>
            </li>
            </ul>                   
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;