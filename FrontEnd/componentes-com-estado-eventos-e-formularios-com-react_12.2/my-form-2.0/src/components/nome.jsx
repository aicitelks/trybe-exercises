import React from 'react';

export default class Nome extends React.Component {
  render() {
    return (
      <label htmlFor="nameInput">
        NOME:
        <input type="text" name="name" id="nameInput" maxLength={40} placeholder="Digite seu nome completo" required/>
      </label>
    );
  }
}