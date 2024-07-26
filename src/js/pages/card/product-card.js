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
});
