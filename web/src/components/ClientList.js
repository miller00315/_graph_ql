import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';

const GET_CLIENT_LIST = gql`
  query GET_CLIENT_LIST($skip: Int!, $take: Int!) {
    clients(options: { skip: $skip, take: $take }) {
      totalItems
      items {
        id
        name
        email
        disabled
      }
    }
  }
`;

const PAGE_SIZE = 10;

export function ClientList({ onSelectClient }) {
  const { data, error, loading, fetchMore } = useQuery(GET_CLIENT_LIST, {
    fetchPolicy: 'cache-and-network',
    variables: {
      skip: 0,
      take: PAGE_SIZE,
    },
  });

  const clients = data?.clients.items ?? [];

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        skip: data.clients.items.length,
        take: PAGE_SIZE,
      },
      updateQuery: (result, { fetchMoreResult }) => {
        if (!fetchMoreResult) return result;

        return {
          ...result,
          clients: {
            ...result.clients,
            items: data.clients.items.concat(fetchMoreResult.clients.items),
            totalItems: fetchMoreResult.clients.totalItems,
          },
        };
      },
    });
  };

  const handlerSelectClient = (client) => () => onSelectClient?.(client.id);

  if (error)
    return (
      <section>
        <strong>Erro ao carregaar os clientes</strong>
      </section>
    );
  if (loading && !data)
    return (
      <section>
        <strong>Loading</strong>
      </section>
    );

  return (
    <section>
      <ul>
        {clients.map((client) => (
          <li key={client.id} onClick={handlerSelectClient(client)}>
            <p>{client.name}</p>
            <p>{client.email}</p>
          </li>
        ))}
      </ul>
      <button type="button" disabled={loading} onClick={handleLoadMore}>
        Carrregar mais
      </button>
    </section>
  );
}
