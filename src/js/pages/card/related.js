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
    const productsList = document.getElementById('related-product__list');

    products.forEach(product => {

        const productItem = document.createElement('li');
        productItem.classList = 'related-product__item swiper-slide ';
        productItem.innerHTML = `<div class="related-product__heard-wrapper">
                    <img src="/src/assets/images/icons/heard.svg" alt="heard" width="24" height="24" loading="lazy" class="related-product__heard-full">
                    <img src="/src/assets/images/icons/heart-fill.svg" alt="heard" width="24" height="24" loading="lazy" class="related-product__heard-fill">

                </div>

                <img src="${product.images[0]}" alt="img" width="294" height="294" loading="lazy">

                <div class="related-product__rat-wrapper">
                    <ul class="related-product__rat-list">
                        <li class="related-product__rat-item">
                            <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                        </li>  
                            <li class="related-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="related-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="related-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="related-product__rat-item">
                                <img src="/src/assets/images/icons/star-half-alt.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                    </ul>

                    <p class="related-product__com">(${product.minimumOrderQuantity})</p>
                </div>

                <h4 class="related-product__card-title">${product.title}</h4>

                <div class="related-product__price-wrapper">
                    <p class="related-product__price">$${product.price}</p>
                    <button class="related-product__cart-btn cart-btn"></button>
                </div>`;
        
        productsList.appendChild(productItem);



        
        const heardWrapper = productItem.querySelector('.related-product__heard-wrapper');
        const fullHeard = productItem.querySelector('.related-product__heard-full');
        const fillHeard = productItem.querySelector('.related-product__heard-fill');

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

        const cartButton = productItem.querySelector('.related-product__cart-btn');
        cartButton.addEventListener('click', function () {
            cartButton.classList.toggle('active');
        });

    })
}


fetchProduct();



