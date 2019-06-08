import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from './Main/Main';


const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
    </Router>
  );
};

export default AppRouter;
