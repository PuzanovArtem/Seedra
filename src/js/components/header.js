


document.getElementById('menu__burger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const main = document.querySelector('main');

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        main.classList.remove('main-blur');
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300); 
    } else {
        menu.style.display = 'flex';
        setTimeout(() => {
            menu.classList.add('show');
            main.classList.add('main-blur');
        }, 10); 
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
