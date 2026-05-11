export function setupImageLightbox(selector = ".project-image img") {
  const zoomableImages = Array.from(
    document.querySelectorAll<HTMLImageElement>(selector)
  );

  let lightbox: HTMLDivElement | null = null;
  let lightboxImage: HTMLImageElement | null = null;

  const closeLightbox = () => {
    if (!lightbox) {
      return;
    }

    lightbox.classList.remove("open");
    document.body.style.overflow = "";
  };

  const openLightbox = (src: string, alt: string) => {
    if (!lightbox || !lightboxImage) {
      return;
    }

    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const imageHandlers = zoomableImages.map((image) => {
    const onClick = () => openLightbox(image.currentSrc || image.src, image.alt);
    image.addEventListener("click", onClick);
    return { image, onClick };
  });

  if (zoomableImages.length > 0) {
    lightbox = document.createElement("div");
    lightbox.className = "image-lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Увеличенное изображение");

    lightboxImage = document.createElement("img");
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target === lightboxImage) {
        closeLightbox();
      }
    });
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  };

  document.addEventListener("keydown", onKeyDown);

  return () => {
    imageHandlers.forEach(({ image, onClick }) => {
      image.removeEventListener("click", onClick);
    });
    document.removeEventListener("keydown", onKeyDown);
    lightbox?.remove();
    document.body.style.overflow = "";
  };
}
