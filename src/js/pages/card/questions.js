const questionBlocks = document.querySelectorAll('.questions .question__item');

questionBlocks.forEach((block) => {
  block.addEventListener("click", function() {
    this.classList.toggle('hide');
    const img = this.querySelector('.question__item--image');
    if (this.classList.contains('hide')) {
      img.src = img.dataset.plus;
    } else {
      img.src = img.dataset.minus;
    }
  });
});