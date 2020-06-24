import { resolvers as clientResolver } from './Client/Client';
import { resolvers as demandResolver } from './Demand/Demand';

const resolvers = {
  ...clientResolver,
  ...demandResolver,

  Query: {
    ...clientResolver.Query,
    //...demandResolver.Query,
  },
};

export default resolvers;
