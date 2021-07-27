import './App.css';

import React from 'react';
import Nome from './components/nome';
import Email from './components/email';

class App extends React.Component {
  render() {
    return (
      <div className="main">

        <form className="formCurriculum">

          <fieldset className="curriculum">
            <Nome />
            <Email />
{/*            <CPF />
            <Endereco />
            <Cidade />
            <Estado /> */}
          </fieldset>

          <fieldset className="lastJob">
{/*             <ResumoCV />
            <Cargo/>
            <CargoDescricao /> */}
          </fieldset>

          <button type="submit">Cadastrar</button>
          <button type="reset">Limpar dados</button>

        </form>

      </div>
    );
  };
}

export default App;
