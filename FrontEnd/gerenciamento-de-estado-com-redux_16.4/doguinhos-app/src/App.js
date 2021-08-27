// src/App.js
/* Também temos que verificar o arquivo do componente. Como esse nosso App vai apenas fazer uma requisição externa (um fetch ), só teremos um componente, o App.js. Nós estamos utilizando o mapStateToProps para trazer o resultado do fetch e o valor da variável isFetching , que está na store, e o mapDispatchToProps para que se envie a action ao clicar no botão.  */

import React from 'react';
import { connect } from 'react-redux';
import { fetchDog } from './store';

function App({ isFetching, src, fetchDog }) {
  return (
    isFetching ? <p>Loading</p>
      : (
        <div style={{ width: 500 }}>
          <button
            style={{ display: 'block' }}
            onClick={ fetchDog }
            type="button"
          >
            Novo Doguinho
          </button>
          <img style={{ width: '100%' }} src={ src } alt="dog" />
        </div>
      )
  );
}

const mapStateToProps = (state) => ({
  src: state.imagePath,
  isFetching: state.isFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchDog: () => dispatch(fetchDog())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);