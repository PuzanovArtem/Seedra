import '.././../js/components/header.js';


const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        fetchPostDetails(postId);
    }


async function fetchPostDetails(postId) {
    try {
        const response = await fetch(`https://666b067e7013419182d1f622.mockapi.io/api/nuts/product/product/${postId}`);
        const post = await response.json();
        displayPostDetails(post);
    } catch (error) {
        console.log('Error fetching post details:', error);
    }
}

function displayPostDetails(post) {
    
    document.getElementById('post-title').innerText = post.title;
}