import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route component={Login} path="/" exact />
    </Switch>
  </HashRouter>
);

export default Routes;
