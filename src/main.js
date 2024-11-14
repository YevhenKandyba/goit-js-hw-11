import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';


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
        iziToast.error({ message: error.message || "An error occurred. Please try again." });
        console.error("Error fetching images:", error);
    }
});
