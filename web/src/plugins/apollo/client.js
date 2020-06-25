import { ApolloClient } from 'apollo-client';
import link from './link';

const client = new ApolloClient({
  link,
  connectToDevTools: true,
});

export default client;
