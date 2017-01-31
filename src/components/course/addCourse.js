import React from 'react';

export default function (props) {
  return (<div>
      <input onChange={props.change} type="text"

      />

      <button onClick={props.save} >Aceptar</button>


  </div>);

}
