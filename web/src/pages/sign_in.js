import React, { useState } from 'react';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlerSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8000/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((data) => console.log('Success', data));
  };

  const handlerEmailChange = (event) => setEmail(event.target.value);

  const handlerPasswordChange = (event) => setPassword(event.target.value);

  return (
    <form onSubmit={handlerSubmit}>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handlerEmailChange}
          inputMode="email"
          autoComplete="username"
        />
      </fieldset>
      <fieldset>
        <label htmlFor="password">Senha</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlerPasswordChange}
          inputMode="password"
          autoComplete="current-password"
        />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  );
};
