import '.././../js/components/header.js';
import '../../js/components/select.js';


// const blogApi = 'https://666b067e7013419182d1f622.mockapi.io/api/nuts/product/product'

// console.log(blogApi);

// async function fetchPost() {
//     try {
//         const response = await fetch(blogApi);
//         const posts = await response.json();
//         displayPosts(posts);
//     } catch (error) {
//         console.log('Error fetching categories:', error);
//     }
// }

// function displayPosts(posts) {
//     const postsList = document.getElementById('main-blog__list');

//     posts.forEach(post => {
//         const postItem = document.createElement('li');
//         postItem.classList.add('main-blog__item', post.cssClass);
//         postItem.innerHTML = `<div class="main-blog__data-wrapper">
//                         <img src="/src/assets/images/icons/clock-three.svg" alt="clock" width="24" height="24"
//                         loading="lazy" />
//                         <p class="main-blog__data">${post.data}</p>
//                     </div>
//                     <h3 class="main-blog__item-title">${post.title}</h3>
//                     <p class="main-blog__subtitle">${post.subtitle}</p>
//                     <a href="${post.link}?id=${post.id}" class="main-blog__item-btn secondary-btn">Read</a>
//                     <img src="${post.image}" alt="${post.imageAlt}" width="${post.imageWidth}" height="${post.imageHeight}" class="main-blog__first-img ${post.imageClass} ${post.imageClassSec}" loading="lazy" />`;
        
//         postsList.appendChild(postItem)
//     });
// }

// fetchPost();

