import React, {Fragment} from 'react';
import Formulario from './components/Formulario'

function App() {
  return (
    <Fragment>
      <h1 className="titulo">¿Cuántos primos somos?</h1>
      <p className="subtitulos">Registrate para saber cuantos primos somos en la familia cortés</p>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario/>
          </div>
          <div className="one-half column">

          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
