


const apiUrl = 'https://dummyjson.com/products/categories';

async function fetchCategories() {
    try {
        const response = await fetch(apiUrl);
        const categories = await response.json();
        displayCategories(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

function displayCategories(categories) {
    const categoryList = document.getElementById('main-category-list');
    
    categories.forEach(category => {
        const categoryItem = document.createElement('li');
        categoryItem.className = 'main-product__category-item category-btn';

        categoryItem.innerHTML = `
        
            <span class="main-product__icon"></span>        
            <p>${category.name}</p>
        `;
        categoryList.appendChild(categoryItem);
    });
}


fetchCategories();



const productUrl = 'https://dummyjson.com/products?limit=6';

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
        
        
        
        productItem.innerHTML = `<div class="main-product__heard-wrapper">
                    <span class="main-product__heard-full"></span>
                    <span class="main-product__heard-fill"></span>
                    

                </div>

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

                <h3 class="main-product__card-title">${product.title}</h3>

                <div class="main-product__price-wrapper">
                    <p class="main-product__price">$${product.price}</p>
                    <button class="main-product__cart-btn cart-btn" aria-lable="cart"></button>
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







