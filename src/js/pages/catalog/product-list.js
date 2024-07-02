document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            const panel = accordion.nextElementSibling;
            const arrow = accordion.querySelector('.arrow');
            if (panel.style.display === "block") {
                panel.style.display = "none";
                arrow.classList.remove('rotate');
            } else {
                panel.style.display = "block";
                arrow.classList.add('rotate');
            }
        });
    });
});