import React, { useState } from "react";
import '../Hojas de estilo/Datos.css'



function IngresarDatos({ onSubmit }) {

  const defaultUser = {
    nombre: "",
    apellido:"",
    correo:"",
    nac:"",
    edad:"",
    sexo:""
  }

  const [user, setUser] = useState(defaultUser)

  return (
    <div className="datos-contenedor">
      <h1 className="titulo">Mi formulario</h1>
      <p>Nombre</p>
      <input className="input" type="text" placeholder="Ingrresa tu nombre" value={user.nombre} onChange={(e) => {
        const updateUser = {
          nombre: e.target.value,
          apellido: user.apellido,
          correo: user.correo,
          nac: user.nac,
          edad: user.edad,
          sexo: user.sexo
        }
        setUser(updateUser)
      }}/>
      <p>Apellido</p>
      <input className="input" type="text" placeholder="Ingrresa tu Apellido" value={user.apellido} onChange={(e) => {
        const updateUser = {
          nombre: user.nombre,
          apellido: e.target.value,
          correo: user.correo,
          nac: user.nac,
          edad: user.edad,
          sexo: user.sexo
        }
        setUser(updateUser)
      }}/>
      <p>Correo</p>
      <input className="input" type="text" placeholder="Correo electronico" value={user.correo} onChange={(e) => {
        const updateUser = {
          nombre: user.nombre,
          apellido: user.apellido,
          correo: e.target.value,
          nac: user.nac,
          edad: user.edad,
          sexo: user.sexo
        }
        setUser(updateUser)
      }}/>
      <p>Fecha de nacimiento</p>
      <input className="input" type="date" placeholder="Fecha de nacimiento" value={user.nac} onChange={(e) => {
        const updateUser = {
          nombre: user.nombre,
          apellido: user.apellido,
          correo: user.correo,
          nac: e.target.value,
          edad: user.edad,
          sexo: user.sexo
        }
        setUser(updateUser)
      }}/>
      <p>Edad</p>
      <input className="input" type="number" placeholder="Edad" value={user.edad} onChange={(e) => {
        setUser((prevUser) => {
          return {
            ...prevUser,
            edad: e.target.value
          }
        })
      }}/>
      <p>Sexo</p>
      <select className="input-select" placeholder="Sexo" value={user.sexo} onChange={(e) => {
         const updateUser = {
          ...user,
          sexo: e.target.value
        }
        setUser(updateUser)
      }}>
          <option>Seleccionar</option>
          <option>Hombre</option>
          <option>Mujer</option>
          <option>Transgénero</option>
          <option>No binario</option>
      </select>
      <div className="botones">
        <button className="bt-enviar" type="submit" onClick={ () => {
          onSubmit(user)
          setUser(defaultUser)
         } }>Enviar</button>
      </div>
    </div>
  )  
  
}

export default IngresarDatos
