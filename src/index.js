// Import React stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
// Import components
import App from './App';
import Albums from './components/Albums';
import Album from './components/Album';
import Photo from './components/Photo';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Albums} />
      <Route path=":albumName" component={Album} />
      <Route path=":albumName/:photoId" component={Photo} />
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));