import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import TablePrimos from './components/TablePrimos'

function App() {

  let primosStorage = JSON.parse(localStorage.getItem('primos'))
  {!primosStorage ? primosStorage = []: primosStorage = primosStorage}

  const [primos, setPrimos] = useState (primosStorage)

  useEffect(()=>{
    localStorage.setItem('primos', JSON.stringify(primos))
  }, [primos])

  const crearPrimo = primo =>{
    setPrimos ([
      ...primos,
      primo
    ])
  }

  const eliminarPrimo = id =>{
    setPrimos(primos.filter(p => p.id !== id))
  }

  return (
    <Fragment>
      <h1 className="titulo">¿Cuántos primos somos?</h1>
      <p className="subtitulos">Registrate para saber cuantos primos somos en la familia cortés</p>
      
      <div className="container">
        <div className="row area-form">
          <div className="twelve columns">
            <Formulario
              crearPrimo = {crearPrimo}
            />
          </div>
        </div>
        <div className="row">
          <div className="twelve columns">
            {primos.length === 0 ? <h3>No hay primos</h3> : <h3>Primos</h3>}
            {
              <TablePrimos 
                arrayPrimos = {primos}
              />
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
