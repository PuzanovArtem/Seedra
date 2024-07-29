import"./header-BTWeqdbP.js";import"./search-z7pJi-Ut.js";const n="https://dummyjson.com/products/search?q=phone&limit=9";console.log(n);async function p(){try{const c=(await(await fetch(n)).json()).products;_(c)}catch(t){console.log(t)}}function u(t,a){return t.length>a?t.substring(0,a)+"..":t}function _(t){const a=document.getElementById("catalog-product__list");t.forEach(c=>{const e=document.createElement("li");e.classList="catalog-product__item";let i=c.title;const d=u(i,50);e.innerHTML=`<div class="product__item__content">
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

                        <p class="catalog-product__com">(${c.minimumOrderQuantity})</p>
                    </div>

                    <h4 class="catalog-product__card-title">${d}</h4>
                </div>
                <div class="catalog-product__price-wrapper">
                    <p class="catalog-product__price">$${c.price}</p>
                    <button class="catalog-product__cart-btn cart-btn" aria-label="add-cart" ></button>
                </div>`,a.appendChild(e);const s=e.querySelector(".main-product__heard-wrapper"),o=e.querySelector(".main-product__heard-full"),r=e.querySelector(".main-product__heard-fill");s.addEventListener("click",function(){s.classList.toggle("active"),s.classList.contains("active")?(o.style.display="none",r.style.display="block"):(o.style.display="block",r.style.display="none")});const l=e.querySelector(".catalog-product__cart-btn");l.addEventListener("click",function(){l.classList.toggle("active")})})}p();document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".accordion").forEach(a=>{a.addEventListener("click",()=>{const c=a.nextElementSibling,e=a.querySelector(".arrow");c.style.display==="block"?(c.style.display="none",e.classList.remove("rotate")):(c.style.display="block",e.classList.add("rotate"))})})});document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("styled-range");function a(){const c=(t.value-t.min)/(t.max-t.min)*100;t.style.background=`linear-gradient(to right, #4CAF50 ${c}%, #e1e1e1 ${c}%)`}t.addEventListener("input",a),a()});
