import { v4 as uuidv4 } from 'uuid';
import GreenwichTogether from '../images/greenwichtogether.JPG';
import RTDSPimg from '../images/rtdsp.JPG';
import Year2img from '../images/year2proj.jpg';
import EEroverimg from '../images/eerover.jpg';
import DeepLearningimg from '../images/deeplearning.JPG';
import Philosophyimg from '../images/philosophy.png' 

const projects = [
  
  {
    id: uuidv4(),
    name: 'A Collective Understanding of Happiness - Final Year Project',
    desc:
      'Designed and implemented a Deep Advantage Actor-Critic dual recommender system that aims to investigate the relationship between idea and experience in terms of our collective experience of happiness.',
    img: Philosophyimg,
    link: 'https://github.com/nimakarshenas/happiness_project',
  },
  {
    id: uuidv4(),
    name: 'COVID-19 and better connectivity - 3rd Year Project',
    desc:
      'Spent 2 months devising a plan for Greenwich Council to bring cheaper, and faster internet connectivity to lower-income households. Along with this, I acted as the sole front and back end developer of the app Greenwich Together, which allows the council to distribute important COVID-19 information, residents to talk with one another in voice channels, and a messaging service for a direct line of contact for residents and the council. The GitHub repository for this project includes the source code, demo, and report for the project',
    img: GreenwichTogether,
    link: 'https://github.com/nimakarshenas/GreenwichTogether',
  },
  {
    id: uuidv4(),
    name: 'Real-time Voice Removal from Music',
    desc:
      'A project looking to implement a real-time voice removal algorithm on a C2000 Texas Instruments board, first developed on MATLAB and then implemented onto the board in Simulink.',
    img: RTDSPimg,
    link: null,
  },
  {
    id: uuidv4(),
    name: '2nd Year Design Project',
    desc:
      'Lead software development in a team of 8 students designing a fall detection wristband and a home tablet GUI tailored for people suffering with dementia and are living at home alone.',
    img: Year2img,
    link: 'https://github.com/nimakarshenas/2nd-Year-Project',
  },
  {
    id: uuidv4(),
    name: 'EE Rover - 1st Year Design Project',
    desc:
      'Lead hardware development in a team of 5 members, working on a remote controlled rover whose goal is to move around a jungle-type terrain (recreated in the lab) and approach different objects emitting signals of different types e.g. Magnetic, Infrared, Radiowaves, and of different specified frequencies. The rover would approach each of the objects and identify them by their signature signal.',
    img: EEroverimg,
    link: null,
  },
  {
    id: uuidv4(),
    name: 'Deep Learning Report',
    desc:
      'A 4 page report on solutions to various given deep learning tasks, with a discussion and analysis of these results with respect to theory',
    img: DeepLearningimg,
    link: 'https://github.com/nimakarshenas/deep_learning_coursework',
  },
  {
    id: uuidv4(),
    name: 'Advanced Signal Processing Project and Report',
    desc:
      'A 42 page solo report discussing and analysing the results from a plethora fo stochatic signal processing problems. ',
    img: ASPimg,
    link:
      'https://github.com/nimakarshenas/Advanced_signal_processing_coursework',
  },
];

export default projects;
