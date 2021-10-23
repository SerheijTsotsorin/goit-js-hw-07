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
    image.setAttribute('data-source', element.original);

    div.classList.add("gallery__item");
    image.classList.add("gallery__image");
    link.classList.add("gallery__link");

    
    link.appendChild(image);
    div.appendChild(image);
    galleryEl.appendChild(div);
};

galleryEl.addEventListener('click', imgShow);

const instance = basicLightbox.create(`<img src="" />`, {
  onShow: () => {
    window.addEventListener('keydown', keydownEscape);
  },
  onClose: () => {
    window.removeEventListener('keydown', keydownEscape);
  },
});

function keydownEscape(event) {
  console.log(event);
  if (event.key === 'Escape') {
    instance.close();
    return;
  }
};

function imgShow(event) {
  event.preventDefault();
  instance.element().querySelector('img').src = event.target.dataset.source;
  instance.show();
};
    


// galleryEl.addEventListener("click",(event) => onImageClick(event));
// function onImageClick(event) {
//     event.preventDefault();
//     const bigImage = event.target.dataset.source;
//     const instance = basicLightbox.create(`<img src=${bigImage} width="800" height="600">`,
    
//     );
//     instance.show();
// };


