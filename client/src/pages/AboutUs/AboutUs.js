import React from 'react'
import styled from 'styled-components'

const AboutUsContainer = styled.div`
padding: 15rem 0 10rem 0;
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
}
.heading {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
.about__subheading {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
.about__text {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}
`

function AboutUs() {
    return (
        <>
            <AboutUsContainer>
                <div className="container">
                    <div className="sub_container_one">
                        <div className="col-md-12">
                          <h1 className="heading">Hello, this is Fabriverse</h1>
                          <p className="about__subheading">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                          <p className="about__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                          </p>
                          </div>
                    </div>
                  <div>
                    <h1 className="heading">Communtiy</h1>
                    <p className="about__subheading">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                    <p className="about__text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    
                  </div> 
                  <div>
                    <h1 className="heading">Services</h1>
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
