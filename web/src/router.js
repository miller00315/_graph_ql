import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import SignIn from './pages/sign_in';

export default () => {
  return (
    <Switch>
      <Route exact path={['', '/']} component={Home} />
      <Route exact path="/sign-in" component={SignIn} />
    </Switch>
  );
};
