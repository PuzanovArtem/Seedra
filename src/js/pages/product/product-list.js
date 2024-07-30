const productUrl = 'https://dummyjson.com/products?limit=9';

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
    const productsList = document.getElementById('main-product__list');

    products.forEach(product => {

        const productItem = document.createElement('li');
        productItem.classList = 'main-product__item';
        productItem.innerHTML = `<a href="/Seedra/src/pages/card/card.html" class="main-product__heard-wrapper">
                    <span class="main-product__heard-full"></span>
                    <span class="main-product__heard-fill"></span>
                    

                </ф>

                <img src="${product.images[0]}" alt="img" width="294" height="294" loading="lazy">

                <div class="main-product__rat-wrapper">
                    <ul class="main-product__rat-list">
                        <li class="main-product__rat-item">
                           <span class="main-product__rat-star"></span>
                        </li>  
                            <li class="main-product__rat-item">
                               <span class="main-product__rat-star"></span>
                            </li>
                            <li class="main-product__rat-item">
                                <span class="main-product__rat-star"></span>
                            </li>
                            <li class="main-product__rat-item">
                               <span class="main-product__rat-star"></span>
                            </li>
                            <li class="main-product__rat-item">
                                <span class="main-product__rat-half-star"></span>
                            </li>
                    </ul>

                    <p class="main-product__com">(${product.minimumOrderQuantity})</p>
                </div>

                <h4 class="main-product__card-title">${product.title}</h4>

                <div class="main-product__price-wrapper">
                    <p class="main-product__price">$${product.price}</p>
                    <button class="main-product__cart-btn cart-btn" aria-label="add-cart"></button>
                </div>`;
        
        productsList.appendChild(productItem);



        
        const heardWrapper = productItem.querySelector('.main-product__heard-wrapper');
        const fullHeard = productItem.querySelector('.main-product__heard-full');
        const fillHeard = productItem.querySelector('.main-product__heard-fill');

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

        const cartButton = productItem.querySelector('.main-product__cart-btn');
        cartButton.addEventListener('click', function () {
            cartButton.classList.toggle('active');
        });

    })
}


fetchProduct();







