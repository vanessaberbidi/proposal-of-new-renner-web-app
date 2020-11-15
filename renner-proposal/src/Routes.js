import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import StylishConsulting from './Pages/StylishConsulting'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/StylishConsulting" component ={StylishConsulting} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
