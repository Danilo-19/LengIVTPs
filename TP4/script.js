
document.addEventListener('DOMContentLoaded', () => {
    const btnCrear = document.getElementById('btnCrear');
    const btnDescargar = document.getElementById('btnDescargar');
    const btnSlice = document.getElementById('btnSlice');
    const resultado = document.getElementById('resultado');
    const resultadoTexto = document.getElementById('resultadoTexto');

    let miBlob = null; 

    btnCrear.addEventListener('click', () => {
        const contenidoTexto = "Hola Mundo! Este es un archivo de texto creado por Danilo Josué Mejia, utilizando la API de Blobs en JavaScript para el Trabajo Práctico N° 4 de Lenguajes IV.";
        
        miBlob = new Blob([contenidoTexto], { type: 'text/plain;charset=utf-8' });

        btnDescargar.disabled = false;
        btnSlice.disabled = false;

        resultadoTexto.innerHTML = `<strong>¡Blob Creado Exitosamente!</strong><br>Tamaño: ${miBlob.size} bytes | Tipo MIME: ${miBlob.type}`;
        resultado.className = "alert alert-success mt-4 mx-auto";
        resultado.classList.remove('d-none');
    });

    btnDescargar.addEventListener('click', () => {
        if (!miBlob) return;

        const urlDescarga = URL.createObjectURL(miBlob);

        const enlace = document.createElement('a');
        enlace.href = urlDescarga;
        enlace.download = 'ejemplo_blob.txt';
        document.body.appendChild(enlace);
        enlace.click();
        document.body.removeChild(enlace);

        URL.revokeObjectURL(urlDescarga);

        resultadoTexto.innerHTML = `<strong>Descarga iniciada:</strong> Se descargó 'ejemplo_blob.txt' (${miBlob.size} bytes).`;
        resultado.className = "alert alert-info mt-4 mx-auto";
        resultado.classList.remove('d-none');
    });

    btnSlice.addEventListener('click', () => {
        if (!miBlob) return;

        const fragmentoBlob = miBlob.slice(0, 10, 'text/plain;charset=utf-8');

        const lector = new FileReader();
        lector.onload = function(evento) {
            const textoFragmento = evento.target.result;
            resultadoTexto.innerHTML = `<strong>Resultado de slice(0, 10):</strong><br>` +
                `Original (${miBlob.size} bytes) ➔ Fragmento (${fragmentoBlob.size} bytes)<br>` +
                `Texto extraído: <em>"${textoFragmento}"</em>`;
            resultado.className = "alert alert-warning mt-4 mx-auto";
            resultado.classList.remove('d-none');
        };
        lector.readAsText(fragmentoBlob);
    });
});







