import React from 'react';

const clients = ['databiz', 'audiophile', 'meet', 'maker']

const Clients = () => {
  return (
    <div className="clients | flex-group align-center justify-space-between">
      {clients.map(client => (
        <span key={client}>
          <img
            src={new URL(`../assets/images/clients/client-${client}.svg`, import.meta.url).href}
            alt={`${client} logo`}
          />
        </span>
      ))}
    </div>
  );
}

export default Clients;
