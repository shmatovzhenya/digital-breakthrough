import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './Main/Main';
import Fill from './Fill/Fill';
import Agree from './Agree/Agree';
import NotFound from './NotFound/NotFound';


const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/fill" exact component={Fill} />
        <Route path="/agreement" exact component={Agree} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
