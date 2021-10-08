/* eslint-disable react/jsx-props-no-spreading */
import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Login from './pages/login/index';
import Register from './pages/register/index';
import Menu from './pages/menu/index';
import Kitchen from './pages/kitchen/index';
import { isAuthenticated } from './services/localStorage';
import Orders from './pages/orders';

export default function Routes() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => (
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      )}
    />
  );
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <Route path="/cadastro" component={Register} />
      <PrivateRoute path="/menu" component={Menu} />
      <PrivateRoute path="/cozinha" component={Kitchen} />
      <PrivateRoute path="/pedidos" component={Orders} />
    </Switch>
  );
}
