/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import userService from './services/userService';
import gameService from './services/gameService';
import { login } from './store/slices/userSlice';

// Checking if the user has been signed in already on this computer
if (localStorage.user_id) {
  userService.getCurrentUser().then((response) => {
    // TODO: If the response comes back bad we should
    // remove the localStorage val and redirect the user to sign in again
    store.dispatch(login(response));
    gameService.getScores();
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
