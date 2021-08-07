import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    // o this sendo vinculado manulamente para a função poder usar esse objeto dentro dela
    this.handleClick3 = this.handleClick3.bind(this);
  }

  // uma arrow function não precisa ter o bind no constructor, porem ela deixa a app menos performática
  handleClick1 = () => {
    console.log('Você clicou no botão 1');
  }

  handleClick2 = () => {
    console.log('Você clicou no botão 2');
  }

  handleClick3() {
    console.log('Abaixo o objeto this');
    console.log(this);
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
          <button onClick={ this.handleClick3 }>Chamar o this</button>
        </header>
      </div>
    );
  }
}

export default App;
