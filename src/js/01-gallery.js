// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);
console.log(SimpleLightbox);

const gallery = document.querySelector('.gallery');

const pictures = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<div>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
     </div>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', pictures);

gallery.addEventListener('click', onClickPictures);

function onClickPictures(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
}

let clickPhoto = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
