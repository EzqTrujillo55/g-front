import { createGlobalStyle } from 'styled-components'
import BackgroundImage from '../img/login-background.png';

export const LoginBack = createGlobalStyle`
  body {
    background-image: url(${BackgroundImage});
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 40px;
    color: #292F36;
    
  }
`;

