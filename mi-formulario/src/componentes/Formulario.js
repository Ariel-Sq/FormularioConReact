import React from 'react';
import '../Hojas de estilo/formulario.css'
import IngresarDatos from './Datos';

function Formulario() {

  return (
<div>
    <div className='formulario-componente'>
      Mi Formulario
    
      <div className='datos-contenedor'>
      <IngresarDatos />
    </div>
    </div>
    </div>
  )
}

export default Formulario
