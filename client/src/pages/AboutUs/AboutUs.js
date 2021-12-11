import React from 'react'
import styled from 'styled-components'
import img from "../../../src/images/about-img.jpg"
import TestimonialsSection from '../../components/Testimonials/TestimonialsSection'

const AboutUsContainer = styled.div`
color: var(--color5);
box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.7);

:root {
  --color1: #505857;
  --color2: #567a6f;
  --color3: #669d7b;
  --color4: #87be7d;
  --color5: #b9dd78;
  --color6: #f9f871;
  --color7: rgb(0, 0, 0);
  --font-family-2: Arial;
  --font-family-3: sans-serif;
}

img {
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100vh;
  opacity: 0.8;
  z-index: -2;
}

.container {
  text-align: center;
  justify-content: center;
  z-index: -1;
}
.container-two {
  text-align: center;
  justify-content: center;
}

.heading {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  color: var(--color4);
  text-shadow: 0 0 10px var(--color2);
  padding-bottom: 1rem;
}
.one {
  padding: 5rem;
}
.two {
  padding: 5rem;
}
.three {
  padding: 5rem;
}

.about__subheading {
  font-size: 2rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  color: var(--color6);
}
.about__text {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: var(--color6);
}

`

function AboutUs() {
    return (
        <>
            <AboutUsContainer>
                <img src={ img } alt="about-img" /> 
                <div className="container">
                    <div className="one">
                          <h1 className="heading">Hello, this is Fabriverse</h1>
                          <p className="about__subheading">
                          An all in one freelance forum that is dedicated to connecting people 
                          to quality products, services and ideas.
                        </p>
                          <p className="about__text">
                           Request or sell a service, product or idea.
                          </p>
                    </div>
                  <div className="two">
                    <h1 className="heading">Communtiy</h1>
                    <p className="about__subheading">
                    We are passionate about creating a community of people who want to connect over specialty 
                    craft services, goods and even .
                  </p>
                    <p className="about__text">
                    Our standard is to be transparent, honest and maintain a friendly and inclusive environment.
                      </p>
                    
                  </div> 
                  <div className="three">
                    <h1 className="heading">How it Works</h1>
                    <p className="about__subheading">
                    With Fabriverse you can post to a product, service or ask a question. Each of these
                    categories are divided into customer seeking quality products or services and service providers or sellers.
                  </p>
                    <p className="about__text">
                      Simply sign up or login to shop, post your product, service or question.
                      </p>
                    {/* maybe a button here */}
                  </div> 
              </div>
              <div className="container-two">
                  <TestimonialsSection /> 
              </div>
            </AboutUsContainer>
        </>
    )
}

export default AboutUs
