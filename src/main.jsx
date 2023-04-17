import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App/App';
import './index.css';
import client from './apolloClient';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
);
