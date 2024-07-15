let select = function () {
    const selectCust = document.querySelectorAll('.filter__custom-select');
    const selectItems = document.querySelectorAll('.filter__select-item');

    selectCust.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItems.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.classList.toggle('is-active');
    }

    function selectChoose() {


        let text = this.innerText;
        let select = this.closest('.select');
        let currentText = select.querySelector('.filter__select-selected');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};

select();