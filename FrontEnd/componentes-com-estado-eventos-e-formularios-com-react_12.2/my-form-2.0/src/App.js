import './App.css';

import React from 'react';

import DadosForm from './components/DadosForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      email: '',
      formEnviado: false,
    }; 

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  
  // arrow function não precisa fazer o bind
  handleSubmit = (event) => {
    const { nome } = this.state;
    // pava evitar que a página recarregue
    event.preventDefault();

    alert(`${ nome }, Boa notícia: Formulário criado com sucesso!`);
    this.sendForm();
  }

  // SOURCE: gabarito
  sendForm = () => { this.setState({ formEnviado: true }) };

  render() {
    const { nome, email, formEnviado } = this.state;

    return (
      <div className="main">

        <form onSubmit={ this.handleSubmit }  className="formCurriculum">

          <fieldset className="curriculum">

            <label htmlFor="nameInput">
              NOME:
              <input
                type="text"
                name="nome"
                id="nameInput"
                value={ nome }
                maxLength={ 40 }
                required
                onChange={ this.handleChange } 
              />
            </label>
            <label htmlFor="emailInput">
                E-MAIL:
                <input 
                  type="email"
                  name="email"
                  id="emailInput"
                  value={ email }
                  maxLength={ 50 }
                  required
                  onChange={ this.handleChange }
                />
              </label>

          </fieldset>

          <fieldset className="lastJob">
            <h3>Último emprego:</h3>
          </fieldset>

          <button type="submit">Enviar</button>
          <button type="reset">Limpar</button>

          {/** SOURCE: gabarito */}
          <input type="button" onClick={ this.sendForm } value="Chamar <DadosForm />" />

        </form>
        
        {/** SOURCE: gabarito */}
        { formEnviado && <DadosForm stateCurrent={ this.state } /> }

      </div>
    );
  };
}

export default App;
