import './App.css';
import React from 'react';
import PokemonComponent from './components/pokemon';
import pokemons from './data';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          { pokemons.map((pokemon) => <PokemonComponent key={ pokemon.id } pokemonProp={ pokemon }/>) }
        </header>
      </div>
    );

  }
}

export default App;
