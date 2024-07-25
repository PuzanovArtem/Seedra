import"./header-BTWeqdbP.js";import"./swiper-Ci-xsG_o.js";const n="https://dummyjson.com/products/categories";async function d(){try{const i=await(await fetch(n)).json();m(i)}catch(s){console.error("Error fetching categories:",s)}}function m(s){const i=document.getElementById("main-category-list");s.forEach(a=>{const t=document.createElement("li");t.className="main-product__category-item category-btn",t.innerHTML=`
            <img src="/src/assets/images/icons/all-product-icon.svg" alt="${a.category}">
            <p>${a.name}</p>
        `,i.appendChild(t)})}d();const l="https://dummyjson.com/products?limit=6";console.log(l);async function p(){try{const a=(await(await fetch(l)).json()).products;g(a)}catch(s){console.log(s)}}function g(s){const i=document.getElementById("main-product__list");s.forEach(a=>{const t=document.createElement("li");t.classList="main-product__item",t.innerHTML=`<div class="main-product__heard-wrapper">
                    <img src="./assets/heard.svg" alt="heard" width="24" height="24" loading="lazy" class="main-product__heard-full">
                    <img src="./assets/heart-fill.svg" alt="heard" width="24" height="24" loading="lazy" class="main-product__heard-fill">

                </div>

                <img src="${a.images[0]}" alt="img" width="294" height="294" loading="lazy">

                <div class="main-product__rat-wrapper">
                    <ul class="main-product__rat-list">
                        <li class="main-product__rat-item">
                            <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                        </li>  
                            <li class="main-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="main-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="main-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="main-product__rat-item">
                                <img src="/src/assets/images/icons/star-half-alt.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                    </ul>

                    <p class="main-product__com">(${a.minimumOrderQuantity})</p>
                </div>

                <h4 class="main-product__card-title">${a.title}</h4>

                <div class="main-product__price-wrapper">
                    <p class="main-product__price">$${a.price}</p>
                    <button class="main-product__cart-btn cart-btn"></button>
                </div>`,i.appendChild(t);const c=t.querySelector(".main-product__heard-wrapper"),e=t.querySelector(".main-product__heard-full"),r=t.querySelector(".main-product__heard-fill");c.addEventListener("click",function(){c.classList.toggle("active"),c.classList.contains("active")?(e.style.display="none",r.style.display="block"):(e.style.display="block",r.style.display="none")});const o=t.querySelector(".main-product__cart-btn");o.addEventListener("click",function(){o.classList.toggle("active")})})}p();
