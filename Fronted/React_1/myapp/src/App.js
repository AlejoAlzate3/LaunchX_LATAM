import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));

  let localtime = new Date();
  let qatar = new Date(localtime.getTime() + (3600000 * 9));

  //DECLARATIVO JSX
  const titulo = React.createElement(
    'h1',
    {},
    'La hora es:'
  );

  const horaColombia = React.createElement(
    'h2',
    {},
    'En Colombia: ' + localtime.toLocaleTimeString()
  );

  const horaQatar = React.createElement(
    'h2',
    {},
    'En Qatar: ' + qatar.toLocaleTimeString()
  );

  const headerApp = React.createElement(
    'div',
    {className: 'App-header'},
    titulo, horaColombia, horaQatar
  );

  const divApp = React.createElement(
    'div',
    {className: 'App'},
    headerApp
  );

  root.render(divApp);

  /**
   * No DECLARATIVO
   * const element = (
   *  <div className="App">
   *   <header className="App-header">
   *    <h1>La hora es:</h1>
   *   <h2>En Colombia: {localtime.toLocaleTimeString()}</h2>
   *  <h2>En Qatar: {qatar.toLocaleTimeString()}</h2>
   * </header>
   * </div>
   * );
   */
}

export default App;
