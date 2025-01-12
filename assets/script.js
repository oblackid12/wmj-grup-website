// Dummy Products for Dashboard
const products = [
    { name: "Produk 1", description: "Deskripsi produk 1", price: "Rp 100.000" },
    { name: "Produk 2", description: "Deskripsi produk 2", price: "Rp 150.000" },
    { name: "Produk 3", description: "Deskripsi produk 3", price: "Rp 200.000" },
];

// Display Products in Dashboard
const productList = document.getElementById('productList');
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
    `;
    productList.appendChild(productElement);
});

// Handling login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Add login functionality here (e.g., API request)
    alert('Login berhasil!');
});
