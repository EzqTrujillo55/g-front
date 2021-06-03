import { createGlobalStyle } from 'styled-components'
import BackgroundImage from '../img/login-background.png';

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.whiteColor ? 'white' : 'black')};
    background-image: ${props => (props.loginBackground&& `url(${BackgroundImage})` )};
    background-position: ${props => (props.loginBackground&& 'center' )} ;
    background-repeat:  ${props => (props.loginBackground&& 'no-repeat' )};
    background-size:  ${props => (props.loginBackground&& 'cover' )};
  }
`;

