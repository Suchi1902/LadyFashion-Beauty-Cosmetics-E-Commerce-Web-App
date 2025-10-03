let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function displayWishlist() {
  const container = document.getElementById("wishlist-items");
  container.innerHTML = "";

  if (wishlist.length === 0) {
    container.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  wishlist.forEach((item, index) => {
    container.innerHTML += `
      <div class="wishlist-item">
        <img src="${item.image}" width="80">
        <p>${item.name}</p>
        <p>₹${item.price}</p>
        <button onclick="moveToCart(${index})">Move to Cart</button>
        <button onclick="removeFromWishlist(${index})">Remove</button>
      </div>
    `;
  });
}

function removeFromWishlist(index) {
  wishlist.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  displayWishlist();
}

function moveToCart(index) {
  const item = wishlist[index];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  removeFromWishlist(index); // also remove from wishlist
  alert(item.name + " moved to Cart!");
}

if (document.getElementById("wishlist-items")) {
  displayWishlist();
}
