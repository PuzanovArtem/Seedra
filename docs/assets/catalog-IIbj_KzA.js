import"./header-BTWeqdbP.js";import"./search-z7pJi-Ut.js";const r="https://dummyjson.com/products/search?q=phone&limit=9";console.log(r);async function n(){try{const t=(await(await fetch(r)).json()).products;d(t)}catch(a){console.log(a)}}function d(a){const e=document.getElementById("catalog-product__list");a.forEach(t=>{const s=document.createElement("li");s.classList="catalog-product__item",s.innerHTML=`<div class="catalog-product__heard-wrapper">
                    <img src="/src/assets/images/icons/heard.svg" alt="heard" width="24" height="24" loading="lazy" class="catalog-product__heard-full">
                    <img src="/src/assets/images/icons/heart-fill.svg" alt="heard" width="24" height="24" loading="lazy" class="catalog-product__heard-fill">

                </div>

                <img src="${t.images[0]}" alt="img" width="188" height="188" loading="lazy">

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

                    <p class="catalog-product__com">(${t.minimumOrderQuantity})</p>
                </div>

                <h4 class="catalog-product__card-title">${t.title}</h4>

                <div class="catalog-product__price-wrapper">
                    <p class="catalog-product__price">$${t.price}</p>
                    <button class="catalog-product__cart-btn cart-btn"></button>
                </div>`,e.appendChild(s);const c=s.querySelector(".catalog-product__heard-wrapper"),l=s.querySelector(".catalog-product__heard-full"),o=s.querySelector(".catalog-product__heard-fill");c.addEventListener("click",function(){c.classList.toggle("active"),c.classList.contains("active")?(l.style.display="none",o.style.display="block"):(l.style.display="block",o.style.display="none")});const i=s.querySelector(".catalog-product__cart-btn");i.addEventListener("click",function(){i.classList.toggle("active")})})}n();document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion").forEach(e=>{e.addEventListener("click",()=>{const t=e.nextElementSibling,s=e.querySelector(".arrow");t.style.display==="block"?(t.style.display="none",s.classList.remove("rotate")):(t.style.display="block",s.classList.add("rotate"))})})});document.addEventListener("DOMContentLoaded",function(){const a=document.getElementById("styled-range");function e(){const t=(a.value-a.min)/(a.max-a.min)*100;a.style.background=`linear-gradient(to right, #4CAF50 ${t}%, #e1e1e1 ${t}%)`}a.addEventListener("input",e),e()});
