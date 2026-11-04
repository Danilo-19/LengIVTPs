import React, { useState } from 'react';
import './App.css';

function App() {
  let titulo = "SportGames"
  let nombre = "gabriel"
  let deportes = ["Futbol", "Voleyball", "BasketBall","Beisbol","Tenis"]
  
  const [miBlob, setMiBlob] = useState(null);
  const [contenidoSlice, setContenidoSlice] = useState("");
  
  const crearArchivo = () => {
    const texto = `mi proyecto es ${titulo}, mi nombre es ${nombre} y mi deporte es ${deportes[0]}`;
    const blob = new Blob([texto], { type: 'text/plain' });
    setMiBlob(blob);
    alert("Archivo creado");
}


  const descargar = () => {
    const url = URL.createObjectURL(miBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'SportGames.txt';
    a.click();
  }
  const mostrar = () => {
    const pedazo = miBlob.slice(0, 20);
    pedazo.text().then(texto => setContenidoSlice(texto));
  }
    
    
  
  return (
    <div className="App">

      <header className="App-header">
      <h1>Mi Proyecto es {titulo}</h1>
      </header>

      <h1>mi nombre es {nombre}</h1>
      <h1>Mi deporte favorito es {deportes[0]}</h1>
      {contenidoSlice && <p>{contenidoSlice}</p>}
      
      <button className="btn-verde" onClick={crearArchivo}>Crear TXT</button>
      <button className="btn-verde" onClick={descargar}>Descargar archivo</button>
      <button className="btn-verde" onClick={mostrar}>Mostrar TXT</button>

    </div>
  );
}

export default App;
