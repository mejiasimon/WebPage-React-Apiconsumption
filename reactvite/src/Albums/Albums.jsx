import "./Albums.css";
import { Loading } from "../shared/Loading/Loading";
import { Canciones } from "../services/servicioCanciones";
import { useState, useEffect } from "react";
import { token } from "../services/ServicioToken";
export function Albums() {
  const [albums, setalbums] = useState(null);
  const [estacargando, setestacargando] = useState(true);

  useEffect(function(){
    token().then(function (respuesta) {
      Canciones(respuesta).then(function(answer){
        console.log(answer)
setalbums(answer.albums)
setestacargando(false)
      })
    });
  },[]);

  if (estacargando) {
    return <>
    <Loading></Loading>
    </>
  } else {
    return (
      <>
        <h1 className="titulo">DISCOGRAFIA</h1>
        <div className="galeria">
 {
albums.map(function(album){
  var duracion=album.tracks.items[0].duration_ms/60000
return(
<section className="container">
  <div id="player">
    <div className="caratula">
      <a href={album.external_urls.spotify}><img src={album.images[0].url} /></a>
      <div className="more">
        <div className="icon-info" />
      </div>
      <div className="bio">
        <h2>{album.name}</h2>
        <ul>
          <li><p>popularidad:{album.popularity}</p></li>
          <li><p>canciones:{album.total_tracks}</p></li>
          <li><p>fecha:{album.release_date}</p></li>
        </ul>
      </div>
    </div>
    <div className="time">
      <div className="progress" />
    </div>
    <div className="info">
      <div className="love">
        <div className="icon-heart" />
        <div className="icon-star-empty" />
      </div>
      <div className="elapsed">{duracion.toFixed(1)} min </div>
      <h2>{album.name}</h2>
      <h3>{album.tracks.items[0].name}</h3>
    </div>
    <div className="controls">
<audio controls src={album.tracks.items[0].preview_url}>

</audio>
    </div>
  </div>
</section>


)
})

 }
        </div>
      </>
    );
  }
}
