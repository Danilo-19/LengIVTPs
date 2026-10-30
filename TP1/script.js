document.addEventListener('DOMContentLoaded', function() {
    
    const ubicacion = document.getElementById('ubicacion');
    
    ubicacion.addEventListener('submit', function(evento) {
        
        evento.preventDefault();
        
        let latitud = document.getElementById('latitud').value.trim();
        let longitud = document.getElementById('longitud').value.trim();
        
        if (latitud === "" || longitud === "") {
            alert("Por favor, ingresá la latitud y la longitud.");
            return;
        }

        latitud = latitud.replace(',', '.');
        longitud = longitud.replace(',', '.');
        
        const urlGoogleMaps = `https://www.google.com/maps?q=${latitud},${longitud}`;        
        window.open(urlGoogleMaps, '_blank');
    });
});