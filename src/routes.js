import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/login/index';
import Register from './pages/register/index';
import Menu from './pages/menu/index';
import Kitchen from './pages/kitchen/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/cadastro" component={Register} />
      <Route path="/menu" component={Menu} />
      <Route path="/cozinha" component={Kitchen} />
    </Switch>
  );
}
