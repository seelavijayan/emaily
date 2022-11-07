import 'materialize-css/dist/css/materialize.min.css';
import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

// Development only axios helpers!
import axios from 'axios';
window.axios = axios;

const rootElement = document.getElementById("root");
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);