import React, { useState } from 'react';
import { ClientList } from '../components/ClientList';
import { ClientEdit } from './ClientEdit';

export default () => {
  const [clientId, setClientId] = useState(null);

  return (
    <main>
      <ClientList onSelectClient={setClientId} />
      <ClientEdit clientId={clientId}></ClientEdit>
    </main>
  );
};
