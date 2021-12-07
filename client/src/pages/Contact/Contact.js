import React from 'react';
import ContactSection from '../../components/ContactSection/ContactSection';
import img from "../../../src/images/contact-img.jpg"


function Contact() {
    return (
        <>
        <img src={ img } alt="contact-img" /> 
        <ContactSection />
        </>
    )
}

export default Contact
