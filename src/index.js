import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routes from './routes';

const store = configureStore(window.__INITIAL_STATE__); // eslint-disable-line
ReactDOM.render(
<AppContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </AppContainer>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
