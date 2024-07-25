import"./header-BTWeqdbP.js";import"./select-Bu8B1k0f.js";const e="https://666b067e7013419182d1f622.mockapi.io/api/nuts/product/product";console.log(e);async function l(){try{const t=await(await fetch(e)).json();c(t)}catch(a){console.log("Error fetching categories:",a)}}function c(a){const t=document.getElementById("main-blog__list");a.forEach(i=>{const s=document.createElement("li");s.classList.add("main-blog__item",i.cssClass),s.innerHTML=`<div class="main-blog__data-wrapper">
                        <img src="/src/assets/images/icons/clock-three.svg" alt="clock" width="24" height="24"
                        loading="lazy" />
                        <p class="main-blog__data">${i.data}</p>
                    </div>
                    <h3 class="main-blog__item-title">${i.title}</h3>
                    <p class="main-blog__subtitle">${i.subtitle}</p>
                    <a href="${i.link}?id=${i.id}" class="main-blog__item-btn secondary-btn">Read</a>
                    <img src="${i.image}" alt="${i.imageAlt}" width="${i.imageWidth}" height="${i.imageHeight}" class="main-blog__first-img ${i.imageClass} ${i.imageClassSec}" loading="lazy" />`,t.appendChild(s)})}l();
