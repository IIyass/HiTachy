import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import LandingRoute from './hooks/LandingRoute';
import Landing from './Container/Landing';
import Portfolio from './Container/Portfolio'
import OurProduct from './Container/OurProduct'
import ContactUs from './Container/ContactUs'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <LandingRoute path="/" exact component={Landing} />
        <LandingRoute path="/portfolio" exact component={Portfolio} />
        <LandingRoute path="/ourproduct" exact component={OurProduct} />
        <LandingRoute path="/contactus" exact component={ContactUs} />
      </Switch>
    </BrowserRouter>

  );
};

export default App;
