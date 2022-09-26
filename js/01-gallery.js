import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector(".gallery");

createGalleryGrid(galleryItems);

galleryBox.addEventListener("click", onOpenModal);

function onOpenModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
		<img src="${e.target.dataset.source}">
	`);
  instance.show();
}

function createGalleryGrid(obj) {
  const galleryGrid = obj.map(createGalleryItem);
  galleryBox.insertAdjacentHTML("beforeend", galleryGrid.join(" "));
  //   console.log(galleryGrid);
}

function createGalleryItem({ preview, original, description }) {
  return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
}
