import"./header-BTWeqdbP.js";import"./swiper-Ci-xsG_o.js";document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".content__thumbnails--img"),a=document.getElementById("currentImage");s.forEach(e=>{e.addEventListener("click",function(){const i=e.getAttribute("data-src");a.src=i,s.forEach(c=>c.classList.remove("active")),e.classList.add("active")})});const t=document.querySelector(".reset-thumbnail");t&&t.addEventListener("click",function(){const e=a.getAttribute("data-original");a.src=e,s.forEach(i=>i.classList.remove("active")),t.classList.add("active")})});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".questions .question__item").forEach(a=>{a.addEventListener("click",function(){this.classList.toggle("hide");const t=this.querySelector(".question__item--image"),e=this.querySelector(".question__item--image--mobile");this.classList.contains("hide")?(t.src=t.dataset.plus,e.src=e.dataset.plus,this.querySelector(".question__item__text").style.display="none"):(t.src=t.dataset.minus,e.src=e.dataset.minus,this.querySelector(".question__item__text").style.display="block"),window.innerWidth<=425&&(t.style.opacity==="0"?t.style.opacity="1":t.style.opacity="0")})})});const o="https://dummyjson.com/products/search?q=phone&limit=9";console.log(o);async function d(){try{const t=(await(await fetch(o)).json()).products;n(t)}catch(s){console.log(s)}}function n(s){const a=document.getElementById("related-product__list");s.forEach(t=>{const e=document.createElement("li");e.classList="related-product__item swiper-slide ",e.innerHTML=`<div class="related-product__heard-wrapper">
                    <img src="/src/assets/images/icons/heard.svg" alt="heard" width="24" height="24" loading="lazy" class="related-product__heard-full">
                    <img src="/src/assets/images/icons/heart-fill.svg" alt="heard" width="24" height="24" loading="lazy" class="related-product__heard-fill">

                </div>

                <img src="${t.images[0]}" alt="img" width="294" height="294" loading="lazy">

                <div class="related-product__rat-wrapper">
                    <ul class="related-product__rat-list">
                        <li class="related-product__rat-item">
                            <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                        </li>  
                            <li class="related-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="related-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="related-product__rat-item">
                                <img src="/src/assets/images/icons/star.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                            <li class="related-product__rat-item">
                                <img src="/src/assets/images/icons/star-half-alt.svg" alt="star" width="16" height="16" loading="lazy">
                            </li>
                    </ul>

                    <p class="related-product__com">(${t.minimumOrderQuantity})</p>
                </div>

                <h4 class="related-product__card-title">${t.title}</h4>

                <div class="related-product__price-wrapper">
                    <p class="related-product__price">$${t.price}</p>
                    <button class="related-product__cart-btn cart-btn"></button>
                </div>`,a.appendChild(e);const i=e.querySelector(".related-product__heard-wrapper"),c=e.querySelector(".related-product__heard-full"),r=e.querySelector(".related-product__heard-fill");i.addEventListener("click",function(){i.classList.toggle("active"),i.classList.contains("active")?(c.style.display="none",r.style.display="block"):(c.style.display="block",r.style.display="none")});const l=e.querySelector(".related-product__cart-btn");l.addEventListener("click",function(){l.classList.toggle("active")})})}d();
