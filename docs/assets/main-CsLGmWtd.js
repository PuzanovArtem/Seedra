import"./header-BTWeqdbP.js";import"./swiper-Ci-xsG_o.js";const l="https://dummyjson.com/products/categories";async function p(){try{const c=await(await fetch(l)).json();d(c)}catch(a){console.error("Error fetching categories:",a)}}function d(a){const c=document.getElementById("main-category-list");a.forEach(s=>{const t=document.createElement("li");t.className="main-product__category-item category-btn",t.innerHTML=`
        
            <span class="main-product__icon"></span>        
            <p>${s.name}</p>
        `,c.appendChild(t)})}p();const o="https://dummyjson.com/products?limit=6";console.log(o);async function m(){try{const s=(await(await fetch(o)).json()).products;u(s)}catch(a){console.log(a)}}function u(a){const c=document.getElementById("main-product__list");a.forEach(s=>{const t=document.createElement("li");t.classList="main-product__item",t.innerHTML=`<div class="main-product__heard-wrapper">
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
                </div>`,c.appendChild(t);const r=t.querySelector(".main-product__heard-wrapper"),i=t.querySelector(".main-product__heard-full"),n=t.querySelector(".main-product__heard-fill");r.addEventListener("click",function(){r.classList.toggle("active"),r.classList.contains("active")?(i.style.display="none",n.style.display="block"):(i.style.display="block",n.style.display="none")});const e=t.querySelector(".main-product__cart-btn");e.addEventListener("click",function(){e.classList.toggle("active")})})}m();