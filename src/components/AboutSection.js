import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import AboutImg from '../assets/images/nima.jpg';

const AboutSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutImg {
    align-self: flex-end;
    height: auto;
  }
  .aboutSection__left {
    flex: 1;
  }
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  .about__scrollDown {
    width: 80px;
    p {
      font-size: 1.3rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
  }
  .about__subheading {
    font-size: 3.5rem;
    margin-bottom: 4rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  @media only screen and (max-width: 1152px) {
    .about__subheading {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 1000px) {
    .about__subheading {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: 1100px) and (min-width: 768px) {
    .aboutSection__buttons {
      .button-wrapper,
      a {
        font-size: 14px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .about__subheading {
      font-size: 2.8rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
    .about__scrollDown {
      position: absolute;
      transform: rotate(270deg);
      left: 100px;
      top: 30px;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.2rem;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <div className="container">
        <div className="aboutSection__left">
          <p className="about__subheading">
            Hi, I'm <span>Nima Karshenas</span>
          </p>
          <PText>
            I am a driven, independent and flexible learner with a love for
            delivering precise and efficient solutions to difficult problems. I
            have developed a strong basis and passion for Deep Learning, Digital
            Signal Processing, and Web and Mobile developement.
          </PText>
          <div className="aboutSection__buttons">
            <Button btnText="Projects" btnLink="/projects" />
            <Button btnText="Read More" btnLink="/about" outline />
          </div>
        </div>
        <div className="aboutSection__right">
          <img className="aboutImg" src={AboutImg} alt="Img" />
        </div>
        <div className="about__scrollDown">
          <p>Scroll for more</p>
        </div>
      </div>
    </AboutSectionStyles>
  );
}
