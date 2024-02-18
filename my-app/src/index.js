import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './ReduxApp/store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>        
    <App />
  </Provider>
);


// Provider is component provided by react-redux
// It makes Redux Store available to any nested components that need access to Redux store
// give store in prop , to which store will be used as store
