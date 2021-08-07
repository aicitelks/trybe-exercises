import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  handleClick1 = () => {
    console.log('Você clicou no botão 1');
  }

  handleClick2 = () => {
    console.log('Você clicou no botão 2');
  }

  handleClick3 = () => {
    console.log('Você clicou no botão 3');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Abra do console para ver o que este botão faz
          </p>
          <button onClick={ this.handleClick1 }>Botão 1</button>
          <button onChange={ this.handleClick2 }>Botão 2</button>
          <button onSubmit={ this.handleClick3 }>Botão 3</button>
        </header>
      </div>
    );
  }
}

export default App;
