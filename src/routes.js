import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Admin from './admin';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route component={SignIn} path="/login" exact />
      <Admin />
    </Switch>
  </HashRouter>
);

export default Routes;
