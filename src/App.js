import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ROUTES from './constants/routes';
import MainLayout from './views/layouts/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

const App = () => (
  <MainLayout>
    <Switch>
      {ROUTES.map(({ id, path, exact, component: Component, props }) => (
        <Route key={id} exact={exact} path={path}>
          <Component {...props} />
        </Route>
      ))}
    </Switch>
  </MainLayout>
);

export default App;
