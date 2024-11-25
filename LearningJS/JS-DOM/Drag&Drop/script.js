const galleryImages = document.querySelectorAll('.galeria .draggable');
const favoritesDropzone = document.getElementById('favorites-dropzone');
const favoritesCount = document.getElementById('favorites-count');
let count = 0;

galleryImages.forEach(img => {
    img.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.src);
    });
});

favoritesDropzone.addEventListener('dragover', (event) => {
    event.preventDefault();
    favoritesDropzone.classList.add('dragover');
});

favoritesDropzone.addEventListener('dragleave', () => {
    favoritesDropzone.classList.remove('dragover');
});

favoritesDropzone.addEventListener('drop', (event) => {
    event.preventDefault();
    favoritesDropzone.classList.remove('dragover');

    const imageSrc = event.dataTransfer.getData('text/plain');
    if (!document.querySelector(`.favorites img[src="${imageSrc}"]`)) {
        const favoriteImage = document.createElement('img');
        favoriteImage.src = imageSrc;
        favoriteImage.classList.add('draggable');
        favoriteImage.width = 200;
        favoriteImage.height = 300;

        favoriteImage.addEventListener('click', () => {
            favoriteImage.remove();
            updateFavoritesCount(-1);
        });

        favoritesDropzone.appendChild(favoriteImage);
        updateFavoritesCount(1);
    }
});

function updateFavoritesCount(change) {
    count += change;
    favoritesCount.textContent = `(${count})`;
}