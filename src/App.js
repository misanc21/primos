import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Primo from './components/Primo'

function App() {

  let primosStorage = JSON.parse(localStorage.getItem('primos'))
  {!primosStorage ? primosStorage = []: primosStorage = primosStorage}

  const [primos, setPrimos] = useState (primosStorage)

  const crearPrimo = primo =>{
    setPrimos ([
      ...primos,
      primo
    ])
  }

  useEffect(()=>{
    localStorage.setItem('primos', JSON.stringify(primos))
  }, [primos])

  return (
    <Fragment>
      <h1 className="titulo">¿Cuántos primos somos?</h1>
      <p className="subtitulos">Registrate para saber cuantos primos somos en la familia cortés</p>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearPrimo = {crearPrimo}
            />
          </div>
          <div className="one-half column">
            {primos.length === 0 ? <h3>No hay primos</h3> : <h3>Primos</h3>}
            {
              primos.map(prim => (
                <Primo
                  key= {prim.id}
                  primoe = {prim}
                />)
              )
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
