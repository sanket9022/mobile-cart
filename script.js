const products = [
    { id: 1, name: "iPhone 14", price: "$999", image: "i phone 14.png" },
    { id: 2, name: "Samsung Galaxy S23", price: "$899", image: "s 23.png" },
    { id: 3, name: "Google Pixel 7", price: "$799", image: "pixel 7.png" },
    { id: 4, name: "vivo v40",price: "$599",image:"v 40.png" }  
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="150">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
});

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
