import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login/index';
import Register from './pages/Register/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/cadastro" component={Register} />
    </Switch>
  );
}
