import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".js-gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
);

container.insertAdjacentHTML("beforeend", markup.join(""));
container.addEventListener("click", onClick);

let instance;

function onClick(event) {
  event.preventDefault();
  const { target } = event;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  instance = basicLightbox.create(
    `<div class="modal">
      <img src="${target.dataset.source}" alt="${target.alt}">
    </div>`
  );
  instance.show();
}

container.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance) {
    instance.close();
  }
});
