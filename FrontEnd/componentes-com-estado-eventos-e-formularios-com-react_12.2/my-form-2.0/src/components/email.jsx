import React from 'react';

export default class Email extends React.Component {
  render() {
    const { propEmail } = this.props;

    return (
      <label htmlFor="emailInput">
        E-MAIL:
        <input type="email" name="email" id="emailInput" value={ propEmail } maxLength={50} required />
      </label>
    );
  }
}