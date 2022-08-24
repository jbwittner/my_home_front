import { useRegistration } from 'hook/serveur/AuthentificationAPI';
import React from 'react';
import Routes from 'routes';

function App() {
  const onSucess = () => {
    console.log('sucess');
  };

  const onError = () => {
    console.log('error');
  };

  const callRegistration = useRegistration({
    onSuccess: onSucess,
    onError: onError,
  });

  callRegistration({
    username: 'tata',
    email: 'tata@toto.com',
    firstName: 'Firslk',
    lastName: 'Dkiq',
    password: 'Doiir4487@',
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
