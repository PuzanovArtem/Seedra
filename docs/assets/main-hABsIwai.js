import"./header-BIkM6GJ9.js";import"./swiper-CLjSId5F.js";const l="https://dummyjson.com/products/categories";async function p(){try{const c=await(await fetch(l)).json();d(c)}catch(a){console.error("Error fetching categories:",a)}}function d(a){const c=document.getElementById("main-category-list");a.forEach(s=>{const t=document.createElement("li");t.className="main-product__category-item category-btn",t.innerHTML=`
        
            <span class="main-product__icon"></span>        
            <p>${s.name}</p>
        `,c.appendChild(t)})}p();const o="https://dummyjson.com/products?limit=6";console.log(o);async function m(){try{const s=(await(await fetch(o)).json()).products;u(s)}catch(a){console.log(a)}}function u(a){const c=document.getElementById("main-product__list");a.forEach(s=>{const t=document.createElement("li");t.classList="main-product__item",t.innerHTML=`<a href="/Seedra/src/pages/card/card.html">
        <div class="main-product__heard-wrapper">
                    <span class="main-product__heard-full"></span>
                    <span class="main-product__heard-fill"></span>
                    

                </div>

                <img src="${s.images[0]}" alt="img" width="294" height="294" loading="lazy">

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

                    <p class="main-product__com">(${s.minimumOrderQuantity})</p>
                </div>

                <h3 class="main-product__card-title">${s.title}</h3>

                <div class="main-product__price-wrapper">
                    <p class="main-product__price">$${s.price}</p>
                    <button class="main-product__cart-btn cart-btn" aria-label="cart"></button>
                </div>
                </a>`,c.appendChild(t);const r=t.querySelector(".main-product__heard-wrapper"),e=t.querySelector(".main-product__heard-full"),i=t.querySelector(".main-product__heard-fill");r.addEventListener("click",function(){r.classList.toggle("active"),r.classList.contains("active")?(e.style.display="none",i.style.display="block"):(e.style.display="block",i.style.display="none")});const n=t.querySelector(".main-product__cart-btn");n.addEventListener("click",function(){n.classList.toggle("active")})})}m();
