import './App.css';
import React from 'react';
import Username from './components/Username';

export const UserContext = React.createContext();

function App() {
  return (
      <UserContext.Provider value= "Juan">
        <Username />
      </UserContext.Provider>
  );
}

export default App;
