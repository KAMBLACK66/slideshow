
const images = document.querySelectorAll('img');
let currentSlideIndex = 0;
for (let i = 0; i < images.length; i++) {
  images[i].dataset.index = i;
  images[i].alt = `Image slide ${i + 1}`;
}
document.body.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.key === 'ArrowLeft' ? currentSlideIndex-- : currentSlideIndex++;
    if (currentSlideIndex >= images.length) {
      currentSlideIndex = 0;
    }
    if (currentSlideIndex < 0) {
      currentSlideIndex = images.length - 1;
    }
    changeImage();
  }
});
document.body.addEventListener('click', (event) => {

  if (event.target.className.includes('thumbnail')) {
    currentSlideIndex = Number(event.target.dataset.index);
    changeImage();
  }
});
function changeImage() {
  images.forEach((image) => (image.className = ''));
  setImageClasses();
}
function setImageClasses() {
  images[currentSlideIndex].classList.add('active');
  const prevIndex =
    currentSlideIndex - 1 < 0 ? images.length - 1 : currentSlideIndex - 1;
  const nextIndex =
    currentSlideIndex + 1 >= images.length ? 0 : currentSlideIndex + 1;
  images[prevIndex].className = 'thumbnail thumbnail-prev';
  images[nextIndex].className = 'thumbnail thumbnail-next';
}
