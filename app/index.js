import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, browserHistory} from 'react-router-dom';
import App from './components/App';

render(
  <BrowserRouter history={browserHistory}>
    <Route path="/" component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);
