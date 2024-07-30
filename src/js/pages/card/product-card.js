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

document.addEventListener('DOMContentLoaded', function() {
  const productItem = document.querySelector('.product-item');
  const heardWrapper = productItem.querySelector('.price-info__heard-wrapper');
  const fullHeard = productItem.querySelector('.price-info__heard-full');
  const fillHeard = productItem.querySelector('.price-info__heard-fill');

  heardWrapper.addEventListener('click', function () {
      heardWrapper.classList.toggle('active');
      if (heardWrapper.classList.contains('active')) {
          fullHeard.style.display = 'none';
          fillHeard.style.display = 'block';
      } else {
          fullHeard.style.display = 'block';
          fillHeard.style.display = 'none';
      }
  });
});

