import React, { useState } from "react";
import '../Hojas de estilo/Datos.css'



function IngresarDatos({ onSubmit }) {

  const [nombre, setNombre] = useState()

  return (
    <div className="datos-contenedor">
      <h1 className="titulo">Mi formulario</h1>
      <h3>Nombre</h3>
      <input className="input" type="text" placeholder="Ingrresa tu nombre" onChange={(e) => {
        setNombre(e.target.value)
      }}/>
     {/*  <input className="input" type="text" placeholder="Ingrresa tu Apellido"/>
      <input className="input" type="text" placeholder="Correo electronico"/>
      <input className="input" type="date" placeholder="Fecha de nacimiento"/>
      <select className="input-select" placeholder="Sexo">
          <option>Hombre</option>
          <option>Mujer</option>
          <option>Transgénero</option>
          <option>No binario</option>
      </select>*/}
      <div className="botones">
        <button className="bt-enviar" type="submit" onClick={ () => onSubmit(nombre) }>Enviar</button>
      </div>
    </div>
  )  
  
}

export default IngresarDatos
