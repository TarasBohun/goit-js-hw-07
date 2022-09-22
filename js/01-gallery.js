import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const itemTemplate = ({ preview, original, description }) =>
  `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;

const renderGalleryItems = () => {
  const list = galleryItems.map(itemTemplate).join("");

  gallery.innerHTML = "";
  gallery.insertAdjacentHTML("beforeend", list);
};

renderGalleryItems();

gallery.addEventListener("click", onItemClick);

function onItemClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const urlCurrentImage = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src = '${urlCurrentImage}' width = 960/>
    </div>
`);

  instance.show();

  window.addEventListener("keydown", onCloseModal);

  function onCloseModal(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
