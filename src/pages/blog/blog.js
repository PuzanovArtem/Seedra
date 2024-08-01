import '.././../js/components/header.js';
import '../../js/components/select.js';



document.getElementById('sort-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
    document.querySelector('.select-popup').style.display = 'block';
    document.body.style.overflow = 'hidden';
});


window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
         document.querySelector('.select-popup').style.display = 'none';
         document.body.style.overflow = '';
    }
}

document.querySelectorAll('.filter__select-item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
         document.body.style.overflow = '';
    });
});




