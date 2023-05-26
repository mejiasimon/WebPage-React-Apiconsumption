import "./Albums.css";
import { Canciones } from "../services/servicioCanciones";
import { useState, useEffect } from "react";
import { token } from "../services/ServicioToken";
export function Albums() {
  const [albums, setalbums] = useState(null);
  const [estacargando, setestacargando] = useState(true);

  useEffect(function(){
    token().then(function (respuesta) {
      Canciones(respuesta).then(function(answer){
setalbums(answer.albums)
setestacargando(false)
      })
    });
  },[]);

  if (estacargando) {
    return <>
    <br /><br /><br /><br /><br /><br /><br />
    <h2>cargando...</h2>
    </>;
  } else {
    return (
      <>
        <h1 className="titulo">DISCOGRAFIA</h1>
        <div className="galeria">
     
        </div>
      </>
    );
  }
}
