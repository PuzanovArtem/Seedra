


document.getElementById('menu__burger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
  const main = document.querySelector('main');
  const body = document.body;

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
      main.classList.remove('main-blur');
      body.style.overflow = 'auto';
       menu.style.display = 'none';
      
    } else {
      menu.style.display = 'flex';
      body.style.overflow = 'hidden';
      menu.classList.add('show');
            main.classList.add('main-blur');
      
  }
  
 
});

const itemList = document.querySelectorAll('.menu__item');
const menu = document.getElementById('menu');
const main = document.querySelector('main');

itemList.forEach(item => {
    item.addEventListener('click', function () {
        menu.classList.remove('show');
        main.classList.remove('main-blur');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300); 
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.getElementById('cart-icon');
  const cartPopup = document.getElementById('cart-popup');
  const closePopupBtn = document.getElementById('close-popup-btn');

  cartIcon.addEventListener('click', function () {
    cartPopup.classList.toggle('hidden');
  });

  closePopupBtn.addEventListener('click', function () {
    cartPopup.classList.add('hidden');
  });

  function updateCounter(counterId, value) {
    document.getElementById(counterId).textContent = value;
  }

  window.increment = function (counterId) {
    let counterElement = document.getElementById(counterId);
    let counterValue = parseInt(counterElement.textContent);
    counterValue++;
    updateCounter(counterId, counterValue);
  }

  window.decrement = function (counterId) {
    let counterElement = document.getElementById(counterId);
    let counterValue = parseInt(counterElement.textContent);
    if (counterValue > 0) {
      counterValue--;
      updateCounter(counterId, counterValue);
    }
  }
});
