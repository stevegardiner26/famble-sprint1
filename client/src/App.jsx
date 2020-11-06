/* eslint-disable no-underscore-dangle, no-unused-vars */
// /client/src/App.jsx

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from './home/home';
import Login from './login/login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* {loggedIn ? <Redirect to="/dashboard" /> : <Home />}  */}
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          {/* {!loggedIn ? <Redirect to="/login" /> : <Dashboard />}  */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
