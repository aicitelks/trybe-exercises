import logo from './logo.svg';
import './App.css';

import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const compromissos = ['café da manhã', 'estudar', 'almoçar', 'estudar na Trybe', 'café da noite'];

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <ul>{ compromissos.map((compromisso) => Task(compromisso)) }</ul>
      </header>
    </div>
    );
  }  
}

export default App;
