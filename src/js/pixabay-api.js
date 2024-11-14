const API_KEY = '47065564-a622eb5e999173b8ae38c4180';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const loadingSpinner = document.getElementById('loadingSpinner');
    loadingSpinner.style.display = 'block';

    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.hits.length === 0) {
            throw new Error("Sorry, there are no images matching your search query. Please try again!");
        }
        return data.hits;
    } catch (error) {
        throw error;
    } finally {
        loadingSpinner.style.display = 'none';
    }
}

