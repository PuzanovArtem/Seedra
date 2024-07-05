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

document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.getElementById('styled-range');

    function updateRangeBackground() {
        const value = (rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min) * 100;
        rangeInput.style.background = `linear-gradient(to right, #4CAF50 ${value}%, #e1e1e1 ${value}%)`;
    }

    rangeInput.addEventListener('input', updateRangeBackground);

    // Initialize background on load
    updateRangeBackground();
});



// fetch api product-list


const productUrl = 'https://dummyjson.com/products/search?q=phone&limit=9';

console.log(productUrl)

async function fetchProduct() {
    try {
        const response = await fetch(productUrl);
        const data = await response.json();
        const products = data.products;

        displayProducts(products);
    } catch (error) {
        console.log(error);
    }
}


function displayProducts(products) {
    const productsList = document.getElementById('catalog-product__list');

    products.forEach(product => {

        const productItem = document.createElement('li');
        productItem.classList = 'catalog-product__item';
        productItem.innerHTML = `<div class="catalog-product__heard-wrapper">
                    <img src="/src/assets/images/icons/heard.svg" alt="heard" width="24" height="24" loading="lazy" class="catalog-product__heard-full">
                    <img src="/src/assets/images/icons/heart-fill.svg" alt="heard" width="24" height="24" loading="lazy" class="catalog-product__heard-fill">

                </div>

                <img src="${product.images[0]}" alt="img" width="188" height="188" loading="lazy">

                <div class="catalog-product__rat-wrapper">
                    <ul class="catalog-product__rat-list">
                        <li class="catalog-product__rat-item">
                            <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                        </li>  
                            <li class="catalog-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="catalog-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="catalog-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="catalog-product__rat-item">
                                <img src="/src/assets/images/icons/star-half-alt.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                    </ul>

                    <p class="catalog-product__com">(${product.minimumOrderQuantity})</p>
                </div>

                <h4 class="catalog-product__card-title">${product.title}</h4>

                <div class="catalog-product__price-wrapper">
                    <p class="catalog-product__price">$${product.price}</p>
                    <button class="catalog-product__cart-btn cart-btn"></button>
                </div>`;
        
        productsList.appendChild(productItem);



        
        const heardWrapper = productItem.querySelector('.catalog-product__heard-wrapper');
        const fullHeard = productItem.querySelector('.catalog-product__heard-full');
        const fillHeard = productItem.querySelector('.catalog-product__heard-fill');

        heardWrapper.addEventListener('click', function () {
            heardWrapper.classList.toggle('active');
            if (heardWrapper.classList.contains('active')) {
                fullHeard.style.display = 'none';
                fillHeard.style.display = 'block';
            } else {
                fullHeard.style.display = 'block';
                fillHeard.style.display = 'none';
            }
        });

        const cartButton = productItem.querySelector('.catalog-product__cart-btn');
        cartButton.addEventListener('click', function () {
            cartButton.classList.toggle('active');
        });

    })
}


fetchProduct();
