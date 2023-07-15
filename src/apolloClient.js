import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import fetch from 'cross-fetch';

const httpLink = createHttpLink({
  uri: 'https://o-l-asso-back-production.up.railway.app/graphql',
  fetch: fetch,
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  localStorage.clear();
  return {
    headers: {
      ...headers,
      authorization: token || "",
    },
  };
});
const client = new ApolloClient({

  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
