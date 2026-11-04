import React, { useState } from 'react';
export default function ProyectoBlob() {

    const [miBlob, setMiBlob] = useState(null);
    const [consola, setConsola] = useState("");
    const handleCrear = () => {

        const contenido = "Archivo binario de prueba para el trabajo practico de Lenguajes IV.";
        const nuevoBlob = new Blob([contenido], { type: 'text/plain' });
        setMiBlob(nuevoBlob);
        setConsola(`l@ucasal:~$ Blob instanciado en memoria.\n> Tipo MIME:
        text/plain\n> Peso: ${nuevoBlob.size} bytes\n> Estado: Buffer cargado y
        listo.`);

    };

    const handleDescargar = () => {
        if (!miBlob) {
            setConsola("l@ucasal:~$ Exception: No se encontro ningun Blob en memoria.\n> Ejecute la instruccion 'Crear Archivo' primero.");
            return;
        }

        const urlTemporal = URL.createObjectURL(miBlob);
        const link = document.createElement('a');
        link.href = urlTemporal;
        link.download = "output_blob.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(urlTemporal);
        setConsola("ls@ucasal:~$ Proceso de descarga iniciado.\n> Archivo guardado en el disco local exitosamente.");
    };

    const handleSlice = async () => {
        if (!miBlob) {
            setConsola("l@ucasal:~$ Exception: Operacion de particion fallida. Buffer vacio.");
            return;
        }

    const blobCortado = miBlob.slice(0, 15, 'text/plain');
    const textoCortado = await blobCortado.text();
    setConsola(`l@ucasal:~$ Ejecutando Slice(0, 15)...\n> Tamaño
    original: ${miBlob.size} bytes\n> Tamaño del fragmento:
    ${blobCortado.size} bytes\n> Data extraida: "${textoCortado}"`);

    };

    return (
    <div style={{ backgroundColor: '#786060', minHeight: 'calc(100vh -65px)', color: '#ededed', display: 'flex', flexDirection: 'column',alignItems: 'center', paddingTop: '60px', fontFamily: '"Inter",system-ui, sans-serif' }}>

        <div style={{ maxWidth: '650px', width: '100%', padding: '0 20px'}}>

            <h2 style={{ fontSize: '1.4rem', fontWeight: '600',
            marginBottom: '8px', letterSpacing: '-0.5px' }}>
            Manipulación de Blobs
            </h2>
            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom:
            '30px' }}>

            </p>

            <div style={{ display: 'flex', gap: '12px', marginBottom:
            '35px' }}>
                <button onClick={handleCrear} style={btnStyle}>Crear
                Archivo</button>
                <button onClick={handleDescargar}
                style={btnStyle}>Descargar</button>
                <button onClick={handleSlice} style={btnStyle}>Ejecutar
                Slice</button>
            </div>

            <div style={{ backgroundColor: '#050505', border: '1px solid#222', borderRadius: '8px', overflow: 'hidden' }}>


                <div style={{

                    }}>
                    {consola}
                </div>
            </div>
        </div>
    </div>
    );
}

const btnStyle = {
    backgroundColor: '#111',
    color: '#ededed',
    border: '1px solid #333',
    padding: '10px 18px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: '500'
};