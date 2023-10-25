import React, { useState } from "react";
import '../Hojas de estilo/Datos.css'


const UsersList = () => {
  const [users, setUsers] = useState([])

  const enviar = () => {

  }
}


function IngresarDatos() {
  return (
    <div className="datos-contenedor">
      <h1 className="titulo">Mi formulario</h1>
      <input className="input" type="text" placeholder="Ingrresa tu nombre"/>
      <input className="input" type="text" placeholder="Ingrresa tu Apellido"/>
      <input className="input" type="text" placeholder="Correo electronico"/>
      <input className="input" type="date" placeholder="Fecha de nacimiento"/>
      <select className="input-select" placeholder="Sexo">
          <option>Hombre</option>
          <option>Mujer</option>
          <option>Transgénero</option>
          <option>No binario</option>
      </select>
      <div className="botones">
        <button className="bt-enviar" type="submit">Enviar</button>
        <button className="bt-info" type="button">Info</button>
      </div>
    </div>
  )  
  
}

export default IngresarDatos
