


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