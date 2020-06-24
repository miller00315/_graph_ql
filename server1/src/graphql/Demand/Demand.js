import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Client {
    id: ID!
    name: String!
    email: String!
    disabled: String!
  }

  type Demand {
    id: ID!
    name: String!
    client: Client!
    deadline: String
  }

  type Query {
    demands: [Demand]!
  }
`;

export const resolvers = {
  Query: {
    demands: async () => {},
  },
};
