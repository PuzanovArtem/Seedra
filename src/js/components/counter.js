const cart = document.querySelector('.cart');

    cart.addEventListener('click', (event) => {
        if (event.target.classList.contains('minus') || event.target.classList.contains('plus')) {
            const counterValueElement = event.target.parentElement.querySelector('.cart__counter-value');
            let count = parseInt(counterValueElement.textContent);

            if (event.target.classList.contains('minus')) {
                if (count > 0) {
                    count--;
                }
            } else if (event.target.classList.contains('plus')) {
                count++;
            }

            counterValueElement.textContent = count;
        }
    });