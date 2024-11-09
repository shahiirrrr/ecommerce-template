function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}


// Function to fetch and display products
function loadProducts() {
    fetch('products.json')
        .then(response => response.json())  // Parse the JSON data
        .then(products => {
            const productGrid = document.getElementById('product-grid');
            productGrid.innerHTML = '';  // Clear any existing products

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <a href="product.html?id=${product.id}" class="btn-primary">View Details</a>
                `;

                productGrid.appendChild(productCard);  // Add the product card to the grid
            });
        })
        .catch(error => console.error('Error loading products:', error));
}

// Call the loadProducts function when the page loads
window.onload = loadProducts;



