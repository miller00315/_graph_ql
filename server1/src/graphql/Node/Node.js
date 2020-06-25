import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  interface Node {
    id: ID!
  }

  extend type Query {
    node: [Node!]!
  }
`;

export const resolvers = {
  Node: {
    __resolveType: () => null,
  },
};
