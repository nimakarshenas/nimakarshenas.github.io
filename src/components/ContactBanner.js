import React from 'react';
import styled from 'styled-components';
import ContactButton from './ContactButton';
import PText from './PText';

const ContactBannerStyles = styled.div`
  padding: 5rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  .button__wrapper {
    display: flex;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
    .button__wrapper {
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

export default function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <h3 className="contactBanner__heading">Get in touch</h3>
          <div className="button__wrapper">
            <ContactButton btnText="Call me" btnLink="tel:+88012312" />
            <ContactButton
              btnText="Email me"
              btnLink="mailto:webcifar@gmail.com"
            />
            <ContactButton
              btnText="LinkedIn"
              btnLink="https://www.linkedin.com/in/nima-karshenas-5316061b5/"
            />
          </div>
        </div>
      </div>
    </ContactBannerStyles>
  );
}
