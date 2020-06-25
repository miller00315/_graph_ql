import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  app,
  cors: { origin: 'http://localhost:3000' },
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOST_NAME = process.env.HOST_NAME || 'localhost';

app.listen(PORT, HOST_NAME, () => {
  console.log(`Listening http://${HOST_NAME}:${PORT}`);
});
