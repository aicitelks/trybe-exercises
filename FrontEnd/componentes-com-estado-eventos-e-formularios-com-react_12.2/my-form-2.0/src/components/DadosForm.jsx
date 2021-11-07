import React from 'react';

export default class DadosForm extends React.Component {
  render() {
    const { 
      stateCurrent: {
        nome,
        email,
      }
    } = this.props;

    return(
      <div>
        <p> { nome } </p>
        <p> { email } </p>
      </div>
    );
  }
}
