document.addEventListener('DOMContentLoaded', function() {
  const questionBlocks = document.querySelectorAll('.questions .question__item');

  questionBlocks.forEach((block) => {
    block.addEventListener("click", function() {
      this.classList.toggle('hide');
      const imgDesktop = this.querySelector('.question__item--image');
      const imgMobile = this.querySelector('.question__item--image--mobile');

      if (this.classList.contains('hide')) {
        imgDesktop.src = imgDesktop.dataset.plus;
        imgMobile.src = imgMobile.dataset.plus;
        this.querySelector('.question__item__text').style.display = 'none';
      } else {
        imgDesktop.src = imgDesktop.dataset.minus;
        imgMobile.src = imgMobile.dataset.minus;
        this.querySelector('.question__item__text').style.display = 'block';
      }

      // Изменение прозрачности изображения на мобильных устройствах
      if (window.innerWidth <= 425) {
        if (imgDesktop.style.opacity === '0') {
          imgDesktop.style.opacity = '1';
        } else {
          imgDesktop.style.opacity = '0';
        }
      }
    });
  });
});