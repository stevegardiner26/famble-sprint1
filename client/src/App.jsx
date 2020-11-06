/* eslint-disable no-underscore-dangle, no-unused-vars */
// /client/src/App.jsx

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
// import Dashboard from './dashboard/Dashboard';
import Home from './home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* {loggedIn ? <Redirect to="/dashboard" /> : <Home />}  */}
          <Home />
        </Route>
        {/* <Route exact path="/dashboard"> */}
          {/* {!loggedIn ? <Redirect to="/" /> : <Dashboard />}  */}
          {/* <Dashboard /> */}
        {/* </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
