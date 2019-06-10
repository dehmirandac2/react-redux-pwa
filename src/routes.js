import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FirstPage from './views/first-page';

import baseHistory from './history';

export default props => (
  <Router history={baseHistory}>
    <Route path="/" component={FirstPage} />
  </Router>
);
