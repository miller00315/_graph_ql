import React, { useMemo, useState, useEffect } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import gql from 'graphql-tag';

const CLIENT = gql`
  query CLIENT($clientId: ID!) {
    client(id: $clientId) {
      id
      name
      email
    }
  }
`;

const UPDATE_CLIENT = gql`
  mutation UPDATE_CLIENT($id: ID!, $name: String!, $email: String!) {
    updateClient(input: { id: $id, name: $name, email: $email }) {
      id
      name
      email
    }
  }
`;

export function ClientEdit({ clientId }) {
  const { data } = useQuery(CLIENT, {
    variables: {
      clientId,
    },
    skip: !clientId,
    fetchPolicy: 'cache-first',
  });

  const [updateClient] = useMutation(UPDATE_CLIENT);

  const initialValues = useMemo(
    () => ({
      name: data?.client.name ?? '',
      email: data?.client.email ?? '',
    }),
    [data]
  );

  const [values, setValues] = useState(initialValues);

  useEffect(() => setValues(initialValues), [initialValues]);

  const handleNameChanges = (event) => {
    event.persist();

    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleEmailChanges = (event) => {
    event.persist();

    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateClient({
      variables: {
        id: clientId,
        name: values.name,
        email: values.email,
      },
    }).then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <input type="text" value={values.name} onChange={handleNameChanges} />
      </fieldset>
      <fieldset>
        <input
          type="email"
          value={values.email}
          onChange={handleEmailChanges}
        />
      </fieldset>
      <button type="submit">Salvar</button>
    </form>
  );
}
