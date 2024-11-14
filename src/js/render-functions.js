export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.map(img => `
        <li class="foto">
            <a href="${img.largeImageURL}">
                <img src="${img.webformatURL}" width="" height="" alt="${img.tags}">
            </a>
            <ul class="coments">
                <li>
                <p class="text">Likes</p>
                <p class="numb">${img.likes}</p>
                </li>
                <li>
                <p class="text">Views</p>
                <p class="numb">${img.views}</p>
                </li>
                <li>
                <p class="text">Comments</p>
                <p class="numb">${img.comments}</p>
                </li>
                <li>
                <p class="text">Downloads</p>
                <p class="numb">${img.downloads}</p>
                </li> 
            </ul>
        </li>
    `).join('');
    gallery.innerHTML = markup;
}
