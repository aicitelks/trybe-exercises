// arquivo UserProfile.js
import React from 'react';
import Image from './App3_Image';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> ID: { this.props.user.id } </p>
        <p> NOME: { this.props.user.name } </p>
        <p> { this.props.user.email } </p>

        {/* Image é um component, sendo que a informação da imagem, vem do objeto presente no App3 */}
        <Image source={ this.props.user.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;