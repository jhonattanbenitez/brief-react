import React, { useState } from "react";
import { db } from "../firebase";

const Brief = () => {

   //Definiendo el state
  const [name, setName] = useState("");
  const [cedula, setCedula] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();

      db.collection('BriefClientes').add({
          name: name,
          cedula: cedula,
          email: email,
          message: message
      }).then(()=> {
          alert("Brief enviado");
      } ).catch(() =>{
          alert("ha ocurrido un error");
      })

      setName('')
      setCedula('')
      setEmail('')
      setMessage('')
  }

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2>Brief diseño página web</h2>

      <label htmlFor="name">Nombre completo: </label>
      <input placeholder="representante legal de la empresa" type="text" value={name || ''}
      onChange={(e)=> setName(e.target.value)}  required/>
      <br />

      <label htmlFor="cedula">Cédula de ciudadanía </label>
      <input placeholder="representante legal de la empresa" type="text" value={cedula || ''}
       onChange={(e)=> setCedula(e.target.value)} required/>
      <br />

      <label htmlFor="email">Email </label>
      <input placeholder="representante legal de la empresa" type="email"  value={email || ''}
       onChange={(e)=> setEmail(e.target.value)} required/>
      <br />
      <label htmlFor="message">Mensaje</label>
      <textarea name="" id="" cols="30" rows="10" value={message || ''}
       onChange={(e)=> setMessage(e.target.value)} required></textarea><br/>

      <button type="submit">Enviar</button>

      <br />
    </form>
  );
};

export default Brief;
