/**
 * Rotates the primary image 90° clockwise on each double-click.
 * Intended for Chrome's direct image viewer tabs.
 */
(function initImageRotator() {
    const img = findPrimaryImage();
    if (!img) return;
  
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
  
  /**
   * Returns the main image on a direct-image tab, or null.
   */
  function findPrimaryImage() {
    const images = [...document.images];
    if (images.length === 0) return null;
  
    // Direct image tab: usually one image, minimal page chrome
    if (images.length === 1) return images[0];
  
    // Fallback: largest visible image
    return images.reduce((largest, current) => {
      const largestArea = largest.naturalWidth * largest.naturalHeight;
      const currentArea = current.naturalWidth * current.naturalHeight;
      return currentArea > largestArea ? current : largest;
    });
  }