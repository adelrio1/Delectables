import React from 'react';
import { Provider } from 'react-redux';
import {  Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';

const Root = ({ store }) => {
  return(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } />
        <Route path="/login" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/signup" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
    </Router>
  </Provider>
);
};

export default Root;
