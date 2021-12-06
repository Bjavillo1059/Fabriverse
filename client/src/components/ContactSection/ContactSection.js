import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';


const ContactSectonStyle = styled.div`
padding: 10rem 0;
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
.title {
  text-align: center
}
.contactSection-wrapper {
  display: flex;
  gap: 20rem;
  margin-top: 5rem;
  justify-content: center;
  position: relative;
}
.contactSection::after {
  position: absolute;
  content:'';
  width: 2px;
  height: 50%
  left:50%;
  top: 30%;
  transform: translate(-50%, -50%)
}
.left {
  width: 15%;
  max-width: 500px;
}
.right {
  max-width: 500px;
  width: 25%;
  border-radius: 12px;
}


`

function ContactSection() {
    return (
        <>
        <ContactSectonStyle>
          <div className="title">
        <h1>Contact Us</h1>
        </div>
        <div className="contactSection-wrapper">
          <div className="left">
          <ContactInfoItem icon={<MdLocalPhone />} text="1-800-Not-Real" />
            <ContactInfoItem icon={<MdEmail />} text="fabriverse@notgmail.com" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>  
        </ContactSectonStyle>
        </>
    );
}

export default ContactSection
