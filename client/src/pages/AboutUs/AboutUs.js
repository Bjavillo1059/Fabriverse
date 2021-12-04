import React from 'react'
import styled from 'styled-components'

const AboutUsContainer = styled.div`
padding: 10rem 0 10rem 0;
background-color: var(--color1);
color: var(--color5);
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
.constainer {
  text-align: center;
  display: flex;
  
}
.heading {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;}
.one {
  background-color: var(--color1);
  padding: 5rem;
}
.two {
  background-color: white;
  color: var(--color1);
  padding: 5rem;
}
.three {
  background-color: var(--color1);
  padding: 5rem;
}
.four {
  background-color: white;
  padding: 5rem;
}
.five {
  background-color: var(--color1);
  padding: 5rem;
}

.about__subheading {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
}
.about__text {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}
`

function AboutUs() {
    return (
        <>
            <AboutUsContainer>
                <div className="container">
                    <div className="one">
                          <h1 className="heading">Hello, this is Fabriverse</h1>
                          <p className="about__subheading">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                          <p className="about__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                    </div>
                  <div className="two">
                    <h1 className="heading">Communtiy</h1>
                    <p className="about__subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                    <p className="about__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    
                  </div> 
                  <div className="three">
                    <h1 className="heading">How it Works</h1>
                    <p className="about__subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                    <p className="about__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    
                  </div> 
                  <div className="four">
                    <h1 className="heading">Testimonials</h1>
                    <p className="about__subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                    <p className="about__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                  </div> 
                  <div className="five">
                    <h1 className="heading">Terms of Service</h1>
                    <p className="about__subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                    <p className="about__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                  </div> 
              </div>
            </AboutUsContainer>
        </>
    )
}

export default AboutUs
