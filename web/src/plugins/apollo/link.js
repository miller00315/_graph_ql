import { ApolloLink, Observable } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';

const loggerLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      const subscription = forward(operation).subscribe({
        next: (result) => {
          console.log('Log', result);
          observer.next(result);
        },
        error: observer.error.bind(observer),
        complete: observer.complete.bind(observer),
      });

      return () => subscription.unsubscribe();
    })
);

const link = ApolloLink.from([
  loggerLink,
  onError((error) => {
    console.error('Graphql error', error);
  }),
  setContext((_, { headers }) => {
    return {
      headers,
    };
  }),
  createHttpLink({
    uri: 'http://localhost:8000/graphql',
  }),
]);

export default link;
