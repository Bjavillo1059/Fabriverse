import React, { useState } from 'react';
import styled from 'styled-components';

const ContactFormStyle = styled.div`

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

width: 100%;
.form-group {
  width: 100%;
  margin-bottom: 2rem;
}
label {
  font-size: 1.2rem;
}
input,
textarea {
  width: 100%;
  font-size: 2rem;
  padding: 1.2rem;
  outline: none;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
}
textarea {
  min-height: 250px;
  resize: vertical;
}
button[type='submit'] {
  font-size: 2rem;
  display: inline-block;
  outline: none;
  border: none;
  padding: 1rem 4rem;
  border-radius: 8px;
  cursor: pointer;
}
`

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    return (
      <>
        <ContactFormStyle>
          <div className="form-group">
            <label htmlFor="name">
              Your Name
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your Email
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your message
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Send</button>
        </ContactFormStyle>
      </>
    );
}


export default ContactForm