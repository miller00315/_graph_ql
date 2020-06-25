import { gql } from 'apollo-server-express';

import { typeDefs as nodeTypeDef } from './Node/Node';
import { typeDefs as lisTypeDefs } from './List/List';
import { typeDefs as clientTypeDefs } from './Client/Client';
import { typeDefs as demandTypeDefs } from './Demand/Demand';

const typeDefs = gql`
  type Query {
    _root: String
  }

  ${nodeTypeDef}
  ${lisTypeDefs}
  ${clientTypeDefs}
  ${demandTypeDefs}
`;

export default typeDefs;
