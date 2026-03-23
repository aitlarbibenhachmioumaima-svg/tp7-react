import React from 'react';
import DataLoader from './DataLoader';

function App() {
  return (
    <div>
      <h1>TP JSX et Composition React</h1>
      <DataLoader
        render={(users) => (
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.toUpperCase()}</li>
            ))}
          </ul>
        )}
      />
    </div>
  );
}

export default App;