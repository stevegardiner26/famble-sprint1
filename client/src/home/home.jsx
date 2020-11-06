/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Link, Route,
} from 'react-router-dom';

function Home(props) {
  return (
    <div>
      Welcome to the landing page!
      <Link to="/login">
        <button type="button">Login</button>
      </Link>
    </div>
  );
}

export default Home;
