import React from 'react';
import * as Style from './style';
import FooterLogo from '../../../illustrations/footerlogo.svg';
import fb from '../../../illustrations/Facebook.svg';
import yb from '../../../illustrations/Youtube1.svg';
import tw from '../../../illustrations/Twitter1.svg';
import ln from '../../../illustrations/LinkedIn1.svg';


const Footer = () => (
  <Style.Wrapper>
    <Style.Center>
      <img alt="logo" src={FooterLogo} />
      <h1>@2019 iN-Touchlab - Manage by Devshubhallp</h1>
    </Style.Center>
    <Style.Details>
      <h2>Follow Us</h2>
      <ul>
        <li><img alt="fb" src={fb} /></li>
        <li><img alt="yb" src={yb} /></li>
        <li><img alt="tw" src={tw} /></li>
        <li><img alt="ln" src={ln} /></li>
      </ul>
    </Style.Details>
  </Style.Wrapper>

);

export default Footer;
