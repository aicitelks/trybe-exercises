import React from 'react';

export default class Nome extends React.Component {
  constructor() {
    super();

    // Definição do objeto que será o estado dos meus componentes
    this.state = {
      nome: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      nome: event.target.value,
    });
  }
  
  render() {
    const { nome } = this.state;

    return (
      <label htmlFor="nameInput">
        NOME:
        <input 
          type="text" 
          name="nome" 
          id="nameInput" 
          alue={ nome } 
          maxLength={40} 
          required
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}