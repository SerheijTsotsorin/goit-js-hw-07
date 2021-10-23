import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

for (let index = 0; index < galleryItems.length; index++) {
    const element = galleryItems[index];

    const preview = element.preview;
    const image = document.createElement("img");
    const div = document.createElement("div");
    const link = document.createElement("a");

    image.src = preview;
    image.alt = "Image description";
    link.href = element.original;
    //image.setAttribute('data-source', element.original);

    //div.classList.add("gallery__item");
    image.classList.add("gallery__image");
    link.classList.add("gallery__item");

    
    link.appendChild(image);
    //div.appendChild(image);
    galleryEl.appendChild(link);
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250});
lightbox.on('show.simplelightbox');
 

console.log(galleryItems);