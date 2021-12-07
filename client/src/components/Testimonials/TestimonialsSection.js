import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import testimonials from '../../assets/testimonialData';

const TestimonialsSectionStyled = styled.div`
    overflow-x: hidden;
    text-align: center;
    padding-bottom: 5rem;
    color: #f9f871;
    .container p {
        font-size: 2rem;
    }
    .header {
        color: #87be7d;
        font-size: 3.5rem;
        font-weight: bold;
        text-shadow: 0 0 10px var(--color2);
        padding-bottom: 2rem;
    }
    .testimonial-wrapper {
        position: relative;
        max-width: 700px;
        margin: 0 auto;
    }
    .testimonial-info {
        width: 100%;
        height: fit-content;
        padding: 3rem;
        background-color: #505857;
        border-radius: 0.7rem;
        margin-top: 2rem;
    }
    .testimonial-desc p {
        font-size: 1.5rem;
        text-align: center;
    }
    .testimonial-name {
        margin-top: 4rem;
        font-size: 2rem;
    }
    .testimonial-title {
        font-size: 1.6rem;
        margin-top: 0.3rem;
    }
    .arrows {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
            width: 30px;
            pointer-events: none;
        }
    }
    .next, .prev {
        margin: 0 0.5rem;
        width: fit-content;
        background-color: #505857;
        padding: 0.5rem 2rem;
        border-radius: 0.7rem;
        cursor: pointer;
      }
      .fade-enter {
        opacity: 0;
        transform: scale(0.96);
        z-index: 1;
      }
      .fade-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: 250ms ease-in;
        transition-property: transform, opacity;
        z-index: 1;
      }
      .fade-exit {
        transform: scale(1);
        opacity: 1;
      }
      .fade-exit-active {
        opacity: 0;
        transform: scale(0.96);
        transition: 200ms ease-in;
        transition-property: transform, opacity;
      }
`

export default function TestimonialsSection() {
    const [ activeIndex, setActiveIndex ] = useState(0);
    const activeSlide = testimonials[activeIndex];
    function handleNext() {
        if(activeIndex >= testimonials.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex((oldIndex) => oldIndex + 1);
        }
    }
    function handlePrev() {
        if(activeIndex <= 0) {
            setActiveIndex(testimonials.length - 1);
        }
        else {
            setActiveIndex((oldIndex) => oldIndex - 1);
        }
    }
    return (
        <div>
            <TestimonialsSectionStyled>
                <div className="container">
                    <div className="testimonials-intro">
                    <h1 className="header">Testimonials</h1>
                    <p className="para">See what our community is saying about Fabriverse</p>
                    </div>
                <div className="testimonial-wrapper">
                <SwitchTransition>
                    <CSSTransition
                    key={activeSlide.id}
                    timeout={300}
                    classNames="fade">
                        <div className="testimonial-info">
                            <div className="testimonial-desc">
                            <p>
                                {activeSlide.desc}
                            </p>
                            </div>
                            <h2 className="testimonial-name">{activeSlide.name}</h2>
                            <p className="testimonial-title">{activeSlide.title},  <br />
                            {activeSlide.org}</p>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                </div>
                <div className="arrows">
                    <div className="prev"
                    onClick={handlePrev}
                    role="button"
                    tabIndex={0}
                    onKeyDown={handlePrev}>
                        <MdArrowBack />
                    </div>
                    <div className="next"
                    onClick={handleNext}
                    role="button"
                    tabIndex={0}
                    onKeyDown={handleNext}>
                        <MdArrowForward />
                    </div>
                </div>
                </div>
            </TestimonialsSectionStyled>
        </div>
    )
}
