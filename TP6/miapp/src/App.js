import React, { useState } from 'react';


export default function App() {

  const [miBlob, setMiBlob] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [textoVisible, setTextoVisible] = useState("");
  const hola = () => {
  alert("Hola como estan!");
  
  };

// Función flecha para crear el blob
const handleCrear = () => {

  const datos = "hola me llamo lucas tengo 21 años mi deporte es el fútbol";
  const archivoBlob = new Blob([datos], { type: 'text/plain' });
  setMiBlob(archivoBlob);
  setTextoVisible(datos);

  };

  // Función tradicional para descargar el blob
  function handleDescargar() {

    if (!miBlob) {
      setMensaje("Crea el archivo primero.");
      return;
    }

    const url = URL.createObjectURL(miBlob);
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = "texto-simple.txt";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    URL.revokeObjectURL(url);
    setMensaje("Archivo descargado.");
  
  }

  // Función flecha para cortar el blob (Slice)

  const handleSlice = async () => {

    if (!miBlob) {
      setMensaje("Crea el archivo primero.");
      return;
    }
    const recorte = miBlob.slice(0, 19, 'text/plain');
    const texto = await recorte.text();
    setMensaje(`"${texto}"`);
  
  };

  return (
    
    <div>
    <h2>BLobs</h2>
    <div>
      <button onClick={handleCrear}>Crear archivo</button>
      <button onClick={handleDescargar}>Descargar</button>
      <button onClick={handleSlice}>Hacer Slice</button>
      <button onClick={hola}>Boton Hola</button>
    </div>
      <p>{mensaje}</p>
      {textoVisible && <pre>{textoVisible}</pre>}
    </div>

  );

}

