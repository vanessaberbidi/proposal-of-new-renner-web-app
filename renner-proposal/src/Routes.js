import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SecondPage from './Pages/SecondPage'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/SecondPage" component ={SecondPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
