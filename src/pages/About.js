import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import DownloadButton from '../components/DownloadButton';
import AboutImg from '../assets/images/nima.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import AboutInfoSkills from '../components/AboutInfoSkills';
import GradesSection from '../components/GradesSection';
import mainCV from '../assets/docs/main_cv.pdf';
import DownloadButtonMini from '../components/DownloadButtonMini';
import transcript from '../assets/docs/pre_award_transcript.pdf';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-family: 'Montserrat Bold';
    font-size: 5rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__subheading {
    font-size: 2.5rem;
  }
  .about__info__heading {
    font-size: 4rem;
    text-transform: uppercase;
  }
  .caption {
    font-size: 1.7rem;
    padding-left: 185px;
    margin-top: 18px;
    font-weight: 200;
    max-width: 55pc;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .caption__grade {
    margin-top: 10px;
    font-size: 1.6rem;
    padding-left: 180px;
    margin-top: 18px;
    font-weight: 200;
    max-width: 55pc;
    line-height: 40px;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 2.5rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .caption {
      margin-top: 5px;
      padding-left: 2px;
      font-size: 1.1rem;
    }
    .caption__grade {
      line-height: 25px;
      margin-top: 5px;
      padding-left: 2px;
      font-size: 1.1rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <h1 className="about__heading">ABOUT ME</h1>
              <div className="about__info">
                <PText>
                  Originally from Tehran, Iran, I moved to the UK with my family
                  when I was very young. Mathematics, and its power to design
                  and dictate our world has been something that has always
                  fascinated me. With a passion for not just theory, but its
                  applications, engineering was a natural path for me, and I've
                  fallen in love with it ever since. My goal is to do whatever I
                  can, using the skills that I have been privilaged to obtain,
                  to make the world a better place for all.
                  <br />
                  <br />I have recently completed my 3rd Year of undergraduate
                  studies in the Electrical and Electronic Engineering
                  department at Imperial College, and am about to begin a 1 Year
                  industrial placement as a 3D audio engineer at PlayStation.
                  Scroll down for a more detailed look at my background.
                </PText>
              </div>
              <DownloadButton btnText="Download CV" btnLink={mainCV} />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Monks Walk School, Welwyn Garden City']}
              />
              <p className="caption__grade">
                A-Lever Grades: &nbsp;&nbsp;Mathematics&nbsp;&nbsp;
                <span>A*</span>
                &nbsp;&nbsp;&nbsp;&nbsp; Further Mathematics&nbsp; &nbsp;
                <span>A*</span>
                &nbsp;&nbsp;&nbsp;&nbsp;Physics&nbsp;&nbsp;<span>A*</span>
              </p>
              <AboutInfoItem
                title="University"
                items={[
                  'Electrical and Electronic Engineering, Imperial College London',
                ]}
              />
              <div className="caption__grade">
                <DownloadButtonMini
                  outline
                  btnText="Download grade transcript"
                  btnLink={transcript}
                />
              </div>
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>

              <AboutInfoSkills
                title="Programming"
                items={[
                  'C++',
                  'Python',
                  'MATLAB',
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'REACT',
                  'React Native',
                  'Simulink',
                  'Verilog',
                ]}
              />
              <AboutInfoSkills
                title="Theory"
                items={[
                  'Linear Algebra',
                  'Machine Learning',
                  'Deep Learning',
                  'Real-time Digital Signal Processing',
                  'Stochastic Signal Processing',
                  'Communication Systems',
                ]}
              />
              <AboutInfoSkills
                title="Language"
                items={[
                  'English [native]',
                  'Farsi [native]',
                  'French [advanced]',
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Work Experience</h1>

              <AboutInfoItem
                title="August 2017"
                items={['Softbank Robotics, Paris']}
              />

              <p className="caption">
                Spent two weeks looking at the role and design of passive and
                active filters in a commercial robot. The role required me to
                communicate with engineers in French.
              </p>

              <AboutInfoItem
                title="July 2020-"
                items={['Front end developer at Blithe Healthcare']}
              />

              <p className="caption">
                Founder of a start-up company inspired by research conducted in
                my Year Two university design project. Working as the chief
                front end developer of the Android and iOS apllication, using
                React Native. The app is intended to have a plethora of features
                that will improve the day-to-day lives of elderly living at home
                alone.
              </p>
              <AboutInfoItem
                title="August 2021-"
                items={['3D audio engineer at PlayStation']}
              />
              <p className="caption">
                A 1 year industrial placement in the 3D audio Engineering Intern
                role at PlayStation with a focus on Research and Development.
                Programming is done either using the JUCE framework for C++ or
                Python.
              </p>
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">
                Volunteering and Extracurricular
              </h1>
              <AboutInfoItem
                title="2014-2018"
                items={[
                  'Volunteering tutor at First Class Learning, Welwyn Garden City',
                ]}
              />
              <p className="caption">
                Spent 4 years as an assisstant Maths tutor at the local First
                Class Learning, working with children from the ages of 6-16.
              </p>
              <AboutInfoItem
                title="2017"
                items={['World Challenge, Bolivia']}
              />
              <p className="caption">
                Fundraised £4,000 through numerous part-time jobs and free-lance
                work for a 1 month trip to Bolivia with World Challenge. I acted
                as the accountant for the trip, managing the expenditure of the
                15 students on the trip in order tostay within budget.
              </p>
              <AboutInfoItem
                title="2018-"
                items={['Member of the Tennis Society, Imperial']}
              />
              <p className="caption">
                An active member of the Tennis team of Imperials' Lawn Tennis
                society simce First Year. I attended weekly training and regular
                competitions throughout this time.
              </p>
            </div>
          </div>
        </div>
        <GradesSection />
      </AboutPageStyles>
    </>
  );
}
