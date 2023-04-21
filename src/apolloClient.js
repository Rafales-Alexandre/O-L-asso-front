import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({

  uri: 'http://localhost:3000/graphql',

  cache: new InMemoryCache(),
});

// TODO 
// pour quand l'utilisateur recharge la page mais qu'il était connecté (et que vous avez bien stocké le token dans le local storage à sa connexion): 
// ici récupérer le token dans le localStorage
// le définir dans le header Autorization du client comme suit : `Bearer ${token}`


export default client
