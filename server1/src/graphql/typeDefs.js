import { typeDefs as clientTypeDefs } from './Client/Client';
import { typeDefs as demandTypeDefs } from './Demand/Demand';

const typeDefs = {
  ...clientTypeDefs,
  //...demandTypeDefs,
};

export default typeDefs;
