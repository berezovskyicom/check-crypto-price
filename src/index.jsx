/* eslint-disable no-mixed-operators */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './sass/style.sass';

import CryptoPage from './js/components/container/CryptoPage';
import Menu from './js/components/container/Menu';
import Index from './js/components/container/Index';
import Favorites from './js/components/container/Favorites';

const handleHash = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case `/`:
    case `/menu`:
    case `/favorites`:
      return undefined;
    default:
      return pathname;
  }
};

const Path = () => (
  <Router>
    <div className="Page">
      <Route exact path="/menu" component={Menu} />
      <Route exact path="/" component={Index} />
      <Route exact path="/favorites" component={Favorites} />
      {
        handleHash() && (
          <Route
            path={handleHash()}
            component={() => <CryptoPage id={handleHash().slice(1)} />}
          />
        )
      }
    </div>
  </Router>
);
ReactDOM.render(
  <Path />,
  document.querySelector(`.app`),
);
