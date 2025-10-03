// Load products dynamically on homepage
window.onload = function () {
  if (document.getElementById("product-list")) {
    displayProducts();
  }
};

// Display product cards
function displayProducts() {
  const container = document.getElementById("product-list");
  container.innerHTML = "";
  products.forEach((p) => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" width="200" height="200">
        <h3>${p.name}</h3>
        <p>₹${p.price} <span class="discount">-${p.discount}%</span></p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <button onclick="addToWishlist(${p.id})">♡ Wishlist</button>
      </div>
    `;
  });
}
