const productUrl = "https://dummyjson.com/products/search?q=phone&limit=9";

console.log(productUrl);

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

// Функция для обрезки строки и добавления многоточия
function truncateDescription(description, maxLength) {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + "..";
  } else {
    return description;
  }
}

function displayProducts(products) {
  const productsList = document.getElementById("catalog-product__list");

  // // Пользовательский текст для проверки
  // const customTitle = "Привет как дела. Этот текст тут для поверки сокращения текста :)";

  products.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.classList = "catalog-product__item";

    // // Используем customTitle, если он задан, иначе product.title
    // let productTitle = customTitle ? customTitle : product.title;

    // const truncatedTitle = truncateDescription(productTitle, 150);

    let productTitle = product.title;
    // Обрезаем заголовок продукта
    const truncatedTitle = truncateDescription(productTitle, 50);

    productItem.innerHTML = `<a class="product__item__content" href="/Seedra/src/pages/card/card.html">
                    <div class="main-product__heard-wrapper">
                        <span class="main-product__heard-full"></span>
                        <span class="main-product__heard-fill"></span>
                    </div>

                    <picture class="photo-video__content--image">
                            <source
                            srcset="https://picsum.photos/seed/picsum/200/300"
                            type="image/webp"
                            />
                            <img
                            src="https://picsum.photos/id/237/200/300"
                            alt="photo-review"
                            width="145"
                            height="146"
                            loading="lazy"
                            />
                        </picture>
                    <div class="catalog-product__rat-wrapper">
                        <ul class="catalog-product__rat-list">
                            <li class="catalog-product__rat-item">
                                <span class="main-product__rat-star"></span>
                            </li>  
                            <li class="catalog-product__rat-item">
                                <span class="main-product__rat-star"></span>
                            </li>
                            <li class="catalog-product__rat-item">
                                <span class="main-product__rat-star"></span>
                            </li>
                            <li class="catalog-product__rat-item">
                                <span class="main-product__rat-star"></span>
                            </li>
                            <li class="catalog-product__rat-item">
                                <span class="main-product__rat-half-star"></span>
                            </li>
                        </ul>

                        <p class="catalog-product__com">(${product.minimumOrderQuantity})</p>
                    </div>

                    <h4 class="catalog-product__card-title">${truncatedTitle}</h4>
                </a>
                <div class="catalog-product__price-wrapper">
                    <p class="catalog-product__price">$${product.price}</p>
                    <button class="catalog-product__cart-btn cart-btn" aria-label="add-cart" ></button>
                </div>`;

    productsList.appendChild(productItem);

    const heardWrapper = productItem.querySelector(
      ".main-product__heard-wrapper"
    );
    const fullHeard = productItem.querySelector(".main-product__heard-full");
    const fillHeard = productItem.querySelector(".main-product__heard-fill");

    heardWrapper.addEventListener("click", function () {
      heardWrapper.classList.toggle("active");
      if (heardWrapper.classList.contains("active")) {
        fullHeard.style.display = "none";
        fillHeard.style.display = "block";
      } else {
        fullHeard.style.display = "block";
        fillHeard.style.display = "none";
      }
    });

    const cartButton = productItem.querySelector(".catalog-product__cart-btn");
    cartButton.addEventListener("click", function () {
      cartButton.classList.toggle("active");
    });
  });
}

fetchProduct();

// <img src="${product.images[0]}" alt="img" width="188" height="188" loading="lazy">
