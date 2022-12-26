//import React, { Component } from 'react';
//import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
//import React from 'react';
import { render } from 'react-dom';

//const App = ()=> <h1>Hola Mundo!</h1>

/*const nombres = [
  'Juan',
  'Laura',
  'Lionel',
  'Cody'
]

const Saludar = (props) =>{
  console.log(props.idioma);
  const saludo = props.idioma === 'es' ? 'Hola' : 'Hello'
  return <p>{saludo} {props.nombre}</p>
}

const App = ()=>{
  return <div><Saludar nombre='Juan' idioma = 'en'/></div>
}*/

/*const Button = ()=>{
  const [counter, setCounter] = useState(0);
  
  return (
    <div>
      <p>Presionado : { counter }</p>
      <button onClick={ ()=> setCounter(counter + 1)}>Click me!</button>
    </div>
  )
}


const Lista = ()=> {
  return (
  <div>
    <select>
      {nombres.map( nombre => <option value={nombre+1}>{nombre}</option>)}
    </select>
  </div>
  )
}*/

const Button = () =>{
  const [counter, setCounter] = useState(0);
  useEffect(()=>{
    console.log("Me ejecuté");
  },[]);
  return <button onClick={()=> setCounter(counter + 1)}>Clicks: {counter}</button>
}

const App = ()=> <Button/>


render(<App />, document.getElementById('react-app'));