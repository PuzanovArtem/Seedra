import '.././../js/components/header.js';
import '../../js/components/select.js';

document.getElementById('sort-button').addEventListener('click', function() {
    document.getElementById('sort-popup').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('sort-popup').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('sort-popup')) {
        document.getElementById('sort-popup').style.display = 'none';
    }
}

document.querySelectorAll('.filter__select-item').forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById('sort-popup').style.display = 'none';
    });
});



