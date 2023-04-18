import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://jean-charles-audebert-server.eddi.cloud/graphql',

  cache: new InMemoryCache(),
})

export default client
