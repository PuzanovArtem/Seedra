import"./header-BTWeqdbP.js";import"./search-z7pJi-Ut.js";const n="https://dummyjson.com/products/search?q=phone&limit=9";console.log(n);async function i(){try{const t=(await(await fetch(n)).json()).products;d(t)}catch(a){console.log(a)}}function d(a){const s=document.getElementById("catalog-product__list");a.forEach(t=>{const c=document.createElement("li");c.classList="catalog-product__item",c.innerHTML=`<div class="main-product__heard-wrapper">
                    <span class="main-product__heard-full"></span>
                    <span class="main-product__heard-fill"></span>

                </div>

                <img src="${t.images[0]}" alt="img" width="188" height="188" loading="lazy">

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

                    <p class="catalog-product__com">(${t.minimumOrderQuantity})</p>
                </div>

                <h4 class="catalog-product__card-title">${t.title}</h4>

                <div class="catalog-product__price-wrapper">
                    <p class="catalog-product__price">$${t.price}</p>
                    <button class="catalog-product__cart-btn cart-btn"></button>
                </div>`,s.appendChild(c);const e=c.querySelector(".main-product__heard-wrapper"),l=c.querySelector(".main-product__heard-full"),o=c.querySelector(".main-product__heard-fill");e.addEventListener("click",function(){e.classList.toggle("active"),e.classList.contains("active")?(l.style.display="none",o.style.display="block"):(l.style.display="block",o.style.display="none")});const r=c.querySelector(".catalog-product__cart-btn");r.addEventListener("click",function(){r.classList.toggle("active")})})}i();document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion").forEach(s=>{s.addEventListener("click",()=>{const t=s.nextElementSibling,c=s.querySelector(".arrow");t.style.display==="block"?(t.style.display="none",c.classList.remove("rotate")):(t.style.display="block",c.classList.add("rotate"))})})});document.addEventListener("DOMContentLoaded",function(){const a=document.getElementById("styled-range");function s(){const t=(a.value-a.min)/(a.max-a.min)*100;a.style.background=`linear-gradient(to right, #4CAF50 ${t}%, #e1e1e1 ${t}%)`}a.addEventListener("input",s),s()});
