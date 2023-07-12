// Importation des dépendances
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App/App';
import './index.css';
import client from './apolloClient';

// Création de la racine React et rendu de l'application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Encapsulation du composant App avec le provider Apollo pour gérer les requêtes GraphQL
  <ApolloProvider client={client}>
     {/* Encapsulation du composant App avec le provider Redux pour gérer l'état global */}
    <Provider store={store}>
       {/* Encapsulation du composant App avec le Router pour gérer la navigation et les routes */}
      <Router>
       {/* Composant principal de l'application */}
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
);
