import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 7rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .caption {
    margin-top: 20px;
    font-size: 1.6rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Nima Karshenas</h1>
          <p className="caption">
            I am a driven, independent and flexible learner with a love for
            delivering precise and efficient solutions to difficult problems. I
            have developed a strong basis and passion for Deep Learning, Digital
            Signal Processing, and Web and Mobile developement.
          </p>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+447908255965',
                path: 'tel:+88012312',
              },
              {
                title: 'nima.karshenas@gmail.com',
                path: 'mailto:nima.karshenas@gmail.com',
              },
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/nima-karshenas-5316061b5/',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/nimakarshenas',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            Designed using{' '}
            <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              web cifar
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
