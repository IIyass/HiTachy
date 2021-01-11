import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Style from './styles';
import Logo from '../../../illustrations/footerlogo.svg';
import Intouch from '../../../illustrations/iN-TouchLab.svg'
import { useLocation } from 'react-router-dom'
const Header = () => {

  const [position, setPosition] = useState(1);

  let location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/': setPosition(1);
        break;
      case '/portfolio': setPosition(2);
        break;
      case '/ourproduct': setPosition(3);
        break;
      case '/contactus': setPosition(4);
        break;
      default: setPosition(1);
    }
  }, [location.pathname])

  return <Style.Wrapper position={position}>
    <Style.Logo>
      <Link to="/">
        <img alt="logo" src={Logo} />
      </Link>
      <Link to="/">
        <img alt="logo" src={Intouch} />
      </Link>
    </Style.Logo>
    <ul>
      <Link to="/"><li> Home</li></Link>
      <Link to="/portfolio"><li>Portfolio</li></Link>
      <Link to="/contactus"><li>Contact us</li></Link>
    </ul>
  </Style.Wrapper>
};

export default Header;
