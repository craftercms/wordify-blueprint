import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DynamicRoute from './DynamicRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/*" component={DynamicRoute} />
      </Switch>
    </BrowserRouter>
  );
}
