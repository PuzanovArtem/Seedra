const apiUrl = 'https://dummyjson.com/products/categories';

async function fetchCategories() {
    try {
        const response = await fetch(apiUrl);
        const categories = await response.json();
        displayCategories(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
}

function displayCategories(categories) {
    const categoryList = document.getElementById('catalog-category-list');
    
    categories.forEach(category => {
        const categoryItem = document.createElement('li');
        categoryItem.className = 'catalog__category-item catalog__category-btn';
        categoryItem.innerHTML = `
            <img src="/src/assets/images/icons/all-product-icon.svg" alt="${category.category}">
            <p>${category.name}</p>
        `;
        categoryList.appendChild(categoryItem);
    });
}


fetchCategories();
