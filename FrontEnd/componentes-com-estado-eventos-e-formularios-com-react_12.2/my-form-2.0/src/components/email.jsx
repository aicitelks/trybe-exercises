import React from 'react';

export default class Email extends React.Component {
  render() {
    return (
      <label htmlFor="emailInput">
        E-MAIL:
        <input type="email" name="email" id="emailInput" maxLength={50} required />
      </label>
    );
  }
}