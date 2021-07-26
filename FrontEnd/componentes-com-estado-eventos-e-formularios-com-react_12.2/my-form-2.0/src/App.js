import './App.css';

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="main">

        <form className="formCurriculum">

          <fieldset className="curriculum">
            <Nome />
            <Email />
            <CPF />
            <Endereco />
            <Cidade />
            <Estado />
          </fieldset>

          <fieldset className="lastJob">
            <ResumoCV />
            <Cargo/>
            <CargoDescricao />
          </fieldset>

          <button type="submit"></button>
          <button type="reset"></button>

        </form>

      </div>
    );
  };
}

export default App;
