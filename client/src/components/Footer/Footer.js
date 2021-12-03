import React from "react";
import "./Footer.css";
// import { Button } from "../Button/Button";
import styled from "styled-components";

const FooterStyle = styled.div`
`


function Footer() {
  return (
    <FooterStyle>
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contact Info</h2>

            <li>
            <a href="mailto:https://mail.google.com/mail" className="footer-link-tab">
              My Email
            </a>
            </li>
            <li>
            <a href="tel:8083720332" className="footer-link-tab">
              (808)372-0332
            </a>
            </li>
          </div>

          <div className="footer-link-items">
            <h2>Social Media</h2>
            
            <li>
            <a
              href="https://www.linkedin.com/in/brandon-javillo-76724b170?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJadsP3i0RKOWExYtbtt4XQ%3D%3D"
              className="footer-link-tab"
            >
              LinkedIn
            </a>
            </li>
            <li>
            <a
              href="https://www.instagram.com/ckretjay/"
              className="footer-link-tab"
            >
              Instagram
            </a>
            </li>
            <li>
            <a
              href="https://www.facebook.com/brandon.javillo"
              className="footer-link-tab"
            >
              Facebook
            </a>
            </li>            
          </div>

          <div className="footer-link-items">
            <h2>Other Links</h2>
            
            <li>
            <a
              href="https://github.com/Bjavillo1059"
              className="footer-link-tab"
            >
              GitHub
            </a>
            </li>
            <li>
            <a href="./pdf/Resume.pdf" className="footer-link-tab">
              Resume
            </a>
            </li>            
          </div>
          
        </div>
      </div>
      <section className="footer-subscription">
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
            {/* <Button buttonStyle="btn--outline">Subscribe</Button> */}
          </form>
        </div>
      </section>
    </div>
    </FooterStyle>
  );
}

export default Footer;
