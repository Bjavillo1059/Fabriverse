import React from "react";
import '../../App.css';
import "../Hero/Hero.css";
import { FaAccusoft } from "react-icons/fa";
import Button from "../Button/Button";

function Hero() {
  return (
    <div className="hero-container">
      <image src="/public/images/hero-img.jpg" alt='handyman' />
      <h1>
        Make <FaAccusoft /> Request
      </h1>
      <p>
        Search for what you need, whether you are looking for some work,
        materials, or just some help; you make the request and we fulfill the
        task with the best possible professional that you can choose from!
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Let's Get Started
        </Button>
      </div>
    </div>
  );
}

export default Hero;
