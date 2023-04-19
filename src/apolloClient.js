import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({

  uri: 'http://cami-marti-server.eddi.cloud/graphql',

  cache: new InMemoryCache(),
});

export default client
