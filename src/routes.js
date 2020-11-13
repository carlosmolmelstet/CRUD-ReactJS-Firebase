import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';




function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/edit:id" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
