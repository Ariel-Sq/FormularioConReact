import React from 'react';
import '../Hojas de estilo/formulario.css'
import IngresarDatos from './Datos';

function Formulario() {

  const handleOnSubmit = (nombre) => {
    console.log(nombre);
  }

  return (
      <div>
        <div className='formulario-componente'>
          <div>
            <IngresarDatos onSubmit={ handleOnSubmit }  />
          </div>
        </div>
      </div>
  )
}

export default Formulario
