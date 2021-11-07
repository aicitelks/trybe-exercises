import React from 'react';

export default class Cpf extends React.Component {
  render() {
    //const { propCPF } = this.prop;

    return (
      <label htmlFor="CPFinput">
        CPF:
        <input type="text" name="CPF" id="CPFinput" maxLength={11} required />
      </label>
    );
  }
}