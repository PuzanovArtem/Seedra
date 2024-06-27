document.getElementById('menu__burger').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');

    const main = document.querySelector('main');
     main.classList.toggle('main-blur');
});

const itemList = document.querySelectorAll('.menu__item');
const menu = document.getElementById('menu');
const main = document.querySelector('main');

itemList.forEach(item => {
    item.addEventListener('click', function () {
        menu.classList.remove("show");
        main.classList.remove('main-blur');
    })
})