document.addEventListener("DOMContentLoaded", function() {
  const thumbnails = document.querySelectorAll('.content__thumbnails--img');
  const currentImage = document.getElementById('currentImage');
  
  
  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
          const src = thumbnail.getAttribute('data-src');
          currentImage.src = src;
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          thumbnail.classList.add('active');
      });
  });

  // Обработчик для сброса к исходному изображению
  const resetThumbnail = document.querySelector('.reset-thumbnail');
  if (resetThumbnail) {
      resetThumbnail.addEventListener('click', function() {
          const originalSrc = currentImage.getAttribute('data-original');
          currentImage.src = originalSrc;
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          resetThumbnail.classList.add('active');
      });
  }
});



function increment(id) {
  const counterElement = document.getElementById(id);
  let currentValue = parseInt(counterElement.innerText, 10);
  counterElement.innerText = currentValue + 1;
}

function decrement(id) {
  const counterElement = document.getElementById(id);
  let currentValue = parseInt(counterElement.innerText, 10);
  counterElement.innerText = currentValue - 1;
}