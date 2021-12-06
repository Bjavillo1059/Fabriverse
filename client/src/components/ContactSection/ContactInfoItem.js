import React from 'react';
import { MdPlace } from 'react-icons/md'
import styled from 'styled-components';

const ContactInfoStyle = styled.div`
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
display: flex;
font-size: 25px;
padding-top: 75px;
margin: 2rem;
align-items: center;
.icon {
}
svg {
    width: 2.5rem;
  }
`

function ContactInfo({
    icon = <MdPlace />,
    text = 'Call us',
}) {
    return (
        <>
        <ContactInfoStyle>
        <div className="icon">{icon}</div>
        <div className="info">
            <p>{text}</p>
        </div>
        </ContactInfoStyle>
        </>
    );
}

export default ContactInfo