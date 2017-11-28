import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';

//added for the app to handle middleware
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(<Provider store={createStore(reducers)}>
      <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
