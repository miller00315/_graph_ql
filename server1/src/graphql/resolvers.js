import { resolvers as nodeResolver } from './Node/Node';
import { resolvers as listResolver } from './List/List';
import { resolvers as clientResolver } from './Client/Client';
import { resolvers as demandResolver } from './Demand/Demand';

const resolvers = {
  ...nodeResolver,
  ...listResolver,
  ...clientResolver,
  ...demandResolver,

  Query: {
    ...clientResolver.Query,
    ...demandResolver.Query,
  },
};

export default resolvers;
