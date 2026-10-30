document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const btnSubir = document.getElementById('btnSubir');
    const infoCard = document.getElementById('infoCard');
    const fileName = document.getElementById('fileName');
    const fileType = document.getElementById('fileType');
    const fileSize = document.getElementById('fileSize');
    const imgPreview = document.getElementById('imgPreview');

    btnSubir.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            alert('Por favor, selecciona un archivo de imagen válido.');
            return;
        }

        fileName.textContent = file.name;
        fileType.textContent = file.type || 'image/jpeg';
        fileSize.textContent = file.size;

        const reader = new FileReader();
        reader.onload = (event) => {
            imgPreview.src = event.target.result;
            infoCard.classList.remove('d-none');
        };
        reader.readAsDataURL(file);
    });
});






