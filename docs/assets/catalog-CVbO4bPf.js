import"./header-BGzQFwTE.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector('.select_form[data-id="1"]');if(!t)return;const c=t.querySelector("select"),s=t.querySelector(".select__title"),e=t.querySelector(".select__options"),o=t.querySelectorAll(".select__option"),l=s.querySelector(".select__content");s.addEventListener("click",a=>{a.stopPropagation(),e.hidden=!e.hidden,e.classList.toggle("show")}),o.forEach(a=>{a.addEventListener("click",n=>{const i=a.getAttribute("data-value"),d=a.textContent;c.value=i,l.textContent=d,e.hidden=!0,e.classList.remove("show")})}),document.addEventListener("click",a=>{t.contains(a.target)||(e.hidden=!0,e.classList.remove("show"))})});document.addEventListener("DOMContentLoaded",function(){document.getElementById("popupButton").onclick=function(){document.getElementById("herbsPopup").style.display="block"},document.getElementsByClassName("popup-close")[0].onclick=function(){document.getElementById("herbsPopup").style.display="none"},window.onclick=function(e){e.target==document.getElementById("herbsPopup")&&(document.getElementById("herbsPopup").style.display="none")};const t=document.querySelector(".search-form__filter"),c=document.getElementById("filter-popup"),s=document.querySelector(".filter-popup__close");t.addEventListener("click",()=>{c.style.display="block"}),s.addEventListener("click",()=>{c.style.display="none"}),window.addEventListener("click",e=>{e.target==c&&(c.style.display="none")})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion").forEach(c=>{c.addEventListener("click",()=>{const s=c.nextElementSibling,e=c.querySelector(".arrow");s.style.display==="block"?(s.style.display="none",e.classList.remove("rotate")):(s.style.display="block",e.classList.add("rotate"))})})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("styled-range");function c(){const s=(t.value-t.min)/(t.max-t.min)*100;t.style.background=`linear-gradient(to right, #4CAF50 ${s}%, #e1e1e1 ${s}%)`}t.addEventListener("input",c),c()});const r="https://dummyjson.com/products/search?q=phone&limit=9";console.log(r);async function u(){try{const s=(await(await fetch(r)).json()).products;g(s)}catch(t){console.log(t)}}function g(t){const c=document.getElementById("catalog-product__list");t.forEach(s=>{const e=document.createElement("li");e.classList="catalog-product__item",e.innerHTML=`<div class="catalog-product__heard-wrapper">
                    <img src="/src/assets/images/icons/heard.svg" alt="heard" width="24" height="24" loading="lazy" class="catalog-product__heard-full">
                    <img src="/src/assets/images/icons/heart-fill.svg" alt="heard" width="24" height="24" loading="lazy" class="catalog-product__heard-fill">

                </div>

                <img src="${s.images[0]}" alt="img" width="188" height="188" loading="lazy">

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

                    <p class="catalog-product__com">(${s.minimumOrderQuantity})</p>
                </div>

                <h4 class="catalog-product__card-title">${s.title}</h4>

                <div class="catalog-product__price-wrapper">
                    <p class="catalog-product__price">$${s.price}</p>
                    <button class="catalog-product__cart-btn cart-btn"></button>
                </div>`,c.appendChild(e);const o=e.querySelector(".catalog-product__heard-wrapper"),l=e.querySelector(".catalog-product__heard-full"),a=e.querySelector(".catalog-product__heard-fill");o.addEventListener("click",function(){o.classList.toggle("active"),o.classList.contains("active")?(l.style.display="none",a.style.display="block"):(l.style.display="block",a.style.display="none")});const n=e.querySelector(".catalog-product__cart-btn");n.addEventListener("click",function(){n.classList.toggle("active")})})}u();const p="https://dummyjson.com/products/categories";async function m(){try{const c=await(await fetch(p)).json();y(c)}catch(t){console.error("Error fetching categories:",t)}}function y(t){const c=document.getElementById("catalog-category-list");t.forEach(s=>{const e=document.createElement("li");e.className="catalog__category-item catalog__category-btn",e.innerHTML=`
            <img src="/src/assets/images/icons/all-product-icon.svg" alt="${s.category}">
            <p>${s.name}</p>
        `,c.appendChild(e)})}m();
