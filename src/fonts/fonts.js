import { createGlobalStyle } from 'styled-components';
import RubikOne from './Rubik One.woff'
import RubikOneRegular from './RubikOneRegular.ttf'

export default createGlobalStyle`
    @font-face {
        font-family:Rubik One;
        src: local(Rubik One), local(Rubik One),
        url(${RubikOne}) format('woff'),
        url(${RubikOneRegular}) format('ttf'),
 
    }
`;
