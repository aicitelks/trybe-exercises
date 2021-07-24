import React from 'react';
import PropTypes from 'prop-types';

class PokemonComponent extends React.Component {
  render() {
    return (
      <section>
        <div>
          <img src={ this.props.pokemonProp.image } alt=""/>          
        </div>
        <div>
          <p>{ `${this.props.pokemonProp.name}
          ◽️ Tipo: ${this.props.pokemonProp.type}
          ◽️ Peso: ${this.props.pokemonProp.averageWeight.value} ${this.props.pokemonProp.averageWeight.measurementUnit}` }</p>              
        </div>
      </section>
    );
  }
}

PokemonComponent.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: {
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired
  },
  image: PropTypes.string.isRequired
}

export default PokemonComponent;
