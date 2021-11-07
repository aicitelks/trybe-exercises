import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    // o this é um objeto
    this.state = {
      clickBtn1: 0,
      clickBtn2: 0,
      clickBtn3: 0,
    };

    // o this sendo vinculado manulamente para a função poder usar esse objeto dentro dela
    this.callThis = this.callThis.bind(this);
  }

  // uma arrow function não precisa ter o bind no constructor, porem ela deixa a app menos performática
  handleClick1 = () => {
    console.log('Você clicou no botão 1');
    // Agora, quando um botão for clicado, alterará de forma assíncrona o estado deste botão de zero para um. 
    this.setState(() => ({
      clickBtn1: 1,
    }));
  }

  handleClick2 = () => {
    console.log('Você clicou no botão 2');
    // agora, baseado no estado anterior, será incrementada a contagem de cliques cada vez que o botão for clicado
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((prevState) => ({
      clickBtn2: prevState.clickBtn2 + 1,
    }),
      // a cor atual do botão será impressa num console.log
      () => {
        console.log(`COR: ${this.getButtonColor(this.state.clickBtn2)}`);
      }
    );
  }

  handleClick3 = () => {
    console.log('Você clicou no botão 3');

    // faz a mesma coisa que a handleClick2, porem com o prevState desestruturado
    this.setState(({ clickBtn3 }) => ({
      clickBtn3: clickBtn3 + 1,
    }));
  }

  callThis() {
    console.log('Abaixo o objeto this');
    console.log(this);
  }

  // essa função não precisa do bind, porque ela será usada somente no contexto do componente App
  getButtonColor(num) {
    return num % 2 === 0 ? 'red' : 'blue';
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Abra do console para ver o que este botão faz
          </p>

          <button onClick={this.handleClick1}>
            Botão 1 | Só vai mudar para 1: {this.state.clickBtn1}.
          </button>

          <button
            onClick={this.handleClick2}
            // o estilo é passado inline, e o valor do estado do botão é passado por parâmetro, isso permitirá definir a cor do botão de acordo com o estado dele (par = red, ímpar = blue)
            style={ { backgroundColor: this.getButtonColor(this.state.clickBtn2) } }>
            Botão 2 | Cliquei {this.state.clickBtn2} vezes.
          </button>

          <button onClick={this.handleClick3}>
            Botão 3 | Cliquei {this.state.clickBtn3} vezes.
          </button>

          <button onClick={this.callThis}>Chamar o this</button>

        </header>
      </div>
    );
  }
}

export default App;
