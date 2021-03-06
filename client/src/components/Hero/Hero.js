import React from "react";
import "../../App.css";
import "../Hero/Hero.css";
import { Link } from "react-router-dom";

import img from "../../images/hero-img.jpg";

import { FaAccusoft } from "react-icons/fa";
import Button from "../Button/Button";

function Hero() {
  return (
    <>
      <img src={img} alt="hero-img" />
      <div className="hero-container">
        <h1>
          Make <FaAccusoft /> Request
        </h1>
        <p className="hero-container-para">
          Search for what you need, whether you are looking for some work,
          materials, or just some help; you make the request and we fulfill the
          task with the best possible professional that you can choose from!
        </p>
        <div className="hero-container-button">
        <Link to="/hub" className="hero-btns">
          <Button
            to="/hub"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Let's Get Started
          </Button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
