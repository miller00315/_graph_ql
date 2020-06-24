import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

const server = new ApolloServer({
  typeDefs: gql`
    type Client {
      id: ID!
      name: String!
    }

    type Demand {
      id: ID!
      name: String!
      client: Client!
      deadline: String
    }

    type Query {
      demands: [Demand!]!
    }
  `,
  resolvers: {
    Query: {
      demands: () => [],
    },
  },
});

server.applyMiddleware({
  app,
  cors: { origin: 'http://localhost:3000' },
});

//const enableCors = cors({ origin: 'http://localhost:3000' });

/* server.get('/status', (_, response) => {
  response.send({
    status: 'okay',
  });
}); */

/* server
  .options('/authenticate', enableCors)
  .post('/authenticate', enableCors, express.json(), (request, response) => {
    console.log('E-mail', request.body.email, 'Senha', request.body.password);

    response.send({
      okay: true,
    });
  }); */

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOST_NAME = process.env.HOST_NAME || '127.0.0.1';

app.listen(PORT, HOST_NAME, () => {
  console.log(`Ouvindo ${HOST_NAME}:${PORT}`);
});
