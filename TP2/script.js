document.addEventListener('DOMContentLoaded', () => {
    const ucasal = [-24.74073, -65.39156];
    const map = L.map('map').setView(ucasal, 16);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    let watchId = null, positions = [], marker = null;
    const pathLine = L.polyline([], { color: 'red', weight: 5 }).addTo(map);

    const btnI = document.getElementById('btnIniciar');
    const btnD = document.getElementById('btnDetener');
    const btnL = document.getElementById('btnLimpiar');
    const list = document.getElementById('historialList');

    btnI.addEventListener('click', () => {
        if (!navigator.geolocation) return alert("Geolocalización no soportada");
        btnI.disabled = true; btnD.disabled = false; btnL.disabled = true;

        watchId = navigator.geolocation.watchPosition(pos => {
            const { latitude: lat, longitude: lng } = pos.coords;
            const coords = [lat, lng];
            positions.push(coords);
            pathLine.setLatLngs(positions);

            if (marker) marker.setLatLng(coords);
            else marker = L.marker(coords).addTo(map);

            map.setView(coords, 17);
            
            const empty = document.getElementById('empty');
            if (empty) empty.remove();

            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between';
            li.innerHTML = `<span><b>#${positions.length}</b> → Lat: ${lat.toFixed(5)}, Lng: ${lng.toFixed(5)}</span>`;
            list.appendChild(li);

            list.parentElement.scrollTop = list.parentElement.scrollHeight;
        }, err => {
            alert("Error al obtener ubicación");
            btnI.disabled = false; btnD.disabled = true; btnL.disabled = false;
        }, { enableHighAccuracy: true, maximumAge: 0 });
    });

    btnD.addEventListener('click', () => {
        if (watchId) navigator.geolocation.clearWatch(watchId);
        watchId = null;
        btnI.disabled = false; btnD.disabled = true; btnL.disabled = false;
    });

    btnL.addEventListener('click', () => {
        positions = [];
        pathLine.setLatLngs([]);
        if (marker) { map.removeLayer(marker); marker = null; }
        list.innerHTML = '<li id="empty" class="list-group-item text-muted text-center">Sin registros. Inicie el seguimiento.</li>';
        map.setView(ucasal, 16);
    });
});



