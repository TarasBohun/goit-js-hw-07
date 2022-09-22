import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function renderGalleryItems() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
                 <img class="gallery__image"
                 src="${preview}" 
                 alt="${description}" />
</a>`;
    })
    .join("");
}

gallery.innerHTML = renderGalleryItems();

gallery.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  const isImage = e.target.classList.contains("gallery__image");
  if (!isImage) {
    return;
  }
  const imageAlt = e.target.alt;
  console.log(imageAlt);

  let lightbox = new SimpleLightbox(".gallery__item");
  lightbox.on("show.simplelightbox", function () {});
  //   console.log(e.currentTarget);
  //   console.log(lightbox);
}
