import { gql } from 'apollo-server-express';
import createRepository from '../../io/database/createRepository';

const clientsRepository = createRepository('clients');

export const typeDefs = gql`
  type Client {
    id: ID!
    name: String!
    email: String!
    disabled: String!
  }

  type Query {
    client(id: ID!): Client
    clients: [Client!]!
  }
`;

export const resolvers = {
  Query: {
    client: async (_, { id }) => {
      const clients = await clientsRepository.read();

      return clients.find((client) => client.id == id);
    },
    clients: async () => {
      const clients = await clientsRepository.read();

      return clients;
    },
  },
};
