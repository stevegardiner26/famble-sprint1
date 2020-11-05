import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import App from './App';
import reportWebVitals from './reportWebVitals';
import userService from './services/userService';
import { login } from './store/slices/userSlice';

// Checking if the user has been signed in already on this computer
if (localStorage.user_id) {
  userService.getCurrentUser().then((response) => {
    // TODO: If the response comes back bad we should
    // remove the localStorage val and redirect the user to sign in again
    store.dispatch(login(response));
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
