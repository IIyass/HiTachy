import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Components/LandingLayout';


const LandingRoute = ({ component: Component, ...rest }) => {
  return (
    <Layout  >
      <Route component={Component} />
    </Layout>
  );
};

export default LandingRoute;
