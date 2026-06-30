/**
 * Rotates the primary image 90° clockwise on each double-click.
 * Intended for Chrome's direct image viewer tabs.
 */
(function initImageRotator() {
   const isImageViewerPage =
    document.images.length === 1 &&
    document.body.childElementCount === 1 &&
    document.body.firstElementChild.tagName === "IMG";

  if (!isImageViewerPage) return;
    const img = document.images[0];
  
    let degrees = 0;
  
    img.style.cursor = "pointer";
    img.style.transformOrigin = "center center";
    img.style.transition = "transform 0.2s ease";
    img.title = "Double-click to rotate 90°";
  
    img.addEventListener("dblclick", (event) => {
      event.preventDefault();
      degrees = (degrees + 90) % 360;
      img.style.transform = `rotate(${degrees}deg)`;
    });
  })();