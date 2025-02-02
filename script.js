const products = [
  { id: 1, name: "Wireless Headphones", price: 99.99, image: "assets/product1.jpg" },
  { id: 2, name: "Smart Watch", price: 149.99, image: "assets/product2.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 59.99, image: "assets/product3.jpg" },
];

let cart = [];

function renderProducts() {
  const productGrid = document.querySelector(".product-grid");
  productGrid.innerHTML = products
    .map(
      (product) => `
      <div class="product" data-id="${product.id}">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `
    )
    .join("");
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  cartItems.innerHTML = cart
    .map(
      (item) => `
      <li>${item.name} - $${item.price.toFixed(2)}</li>
    `
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.length;
}

document.getElementById("checkout").addEventListener("click", () => {
  alert("Thank you for your purchase!");
  cart = [];
  updateCart();
});

// Initialize
renderProducts();