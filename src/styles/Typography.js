import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf';
import PoppinsExtraLight from '../assets/fonts/Poppins-ExtraLight.ttf';
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono Regular';
    src: url(${PoppinsSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${PoppinsExtraLight});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${PoppinsExtraLight});
    font-style: normal;
  }
  html{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'RobotoMono Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }

`;

export default Typography;
