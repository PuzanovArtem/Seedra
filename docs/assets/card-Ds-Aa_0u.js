import"./header-BIkM6GJ9.js";import"./swiper-CLjSId5F.js";document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".content__thumbnails--img"),a=document.getElementById("currentImage");s.forEach(t=>{t.addEventListener("click",function(){const e=t.getAttribute("data-src");a.src=e,s.forEach(c=>c.classList.remove("active")),t.classList.add("active")})})});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".product-item"),a=s.querySelector(".price-info__heard-wrapper"),t=s.querySelector(".price-info__heard-full"),e=s.querySelector(".price-info__heard-fill");a.addEventListener("click",function(){a.classList.toggle("active"),a.classList.contains("active")?(t.style.display="none",e.style.display="block"):(t.style.display="block",e.style.display="none")})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".questions .question__item").forEach(a=>{a.addEventListener("click",function(){this.classList.toggle("hide");const t=this.querySelector(".question__item--image"),e=this.querySelector(".question__item--image--mobile");this.classList.contains("hide")?(t.src=t.dataset.plus,e.src=e.dataset.plus,this.querySelector(".question__item__text").style.display="none"):(t.src=t.dataset.minus,e.src=e.dataset.minus,this.querySelector(".question__item__text").style.display="block"),window.innerWidth<=425&&(t.style.opacity==="0"?t.style.opacity="1":t.style.opacity="0")})})});document.querySelectorAll(".question__item__title").forEach(s=>{s.addEventListener("click",function(){const a=this.querySelector(".toggle");a&&a.classList.toggle("active")})});const o="https://dummyjson.com/products/search?q=phone&limit=9";console.log(o);async function n(){try{const t=(await(await fetch(o)).json()).products;d(t)}catch(s){console.log(s)}}function d(s){const a=document.getElementById("related-product__list");s.forEach(t=>{const e=document.createElement("li");e.classList="related-product__item swiper-slide ",e.innerHTML=`<a href="/Seedra/src/pages/card/card.html" class="main-product__heard-wrapper">
                   <span class="main-product__heard-full"></span>
                    <span class="main-product__heard-fill"></span>
                </a>

                <img src="${t.images[0]}" alt="img" width="294" height="294" loading="lazy">

                <div class="related-product__rat-wrapper">
                    <ul class="related-product__rat-list">
                        <li class="related-product__rat-item">
                            <span class="main-product__rat-star"></span>
                        </li>  
                            <li class="related-product__rat-item">
                                <span class="main-product__rat-star"></span>
                            </li>
                            <li class="related-product__rat-item">
                              <span class="main-product__rat-star"></span>
                            </li>
                            <li class="related-product__rat-item">
                               <span class="main-product__rat-star"></span>
                            </li>
                            <li class="related-product__rat-item">
                               <span class="main-product__rat-half-star"></span>
                            </li>
                    </ul>

                    <p class="related-product__com">(${t.minimumOrderQuantity})</p>
                </div>

                <h4 class="related-product__card-title">${t.title}</h4>

                <div class="related-product__price-wrapper">
                    <p class="related-product__price">$${t.price}</p>
                    <button class="related-product__cart-btn cart-btn" aria-label="add-cart"></button>
                </div>`,a.appendChild(e);const c=e.querySelector(".main-product__heard-wrapper"),r=e.querySelector(".main-product__heard-full"),i=e.querySelector(".main-product__heard-fill");c.addEventListener("click",function(){c.classList.toggle("active"),c.classList.contains("active")?(r.style.display="none",i.style.display="block"):(r.style.display="block",i.style.display="none")});const l=e.querySelector(".related-product__cart-btn");l.addEventListener("click",function(){l.classList.toggle("active")})})}n();
