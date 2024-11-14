import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.gallery a');

document.querySelector('.form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();

    if (!query) {
        iziToast.warning({ message: "Please enter a search query." });
        return;
    }

    document.querySelector('.gallery').innerHTML = '';
    
    try {
        const images = await fetchImages(query);
        renderGallery(images);
        lightbox.refresh();
    } catch (error) {
        console.error("Error fetching images:", error);
    }
});
