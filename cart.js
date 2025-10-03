let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(c => c.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

// Display cart
function displayCart() {
  const container = document.getElementById("cart-items");
  const totalBox = document.getElementById("cart-total");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" width="80">
        <p>${item.name}</p>
        <p>₹${item.price}</p>
        <input type="number" min="1" value="${item.qty}" onchange="updateQty(${index}, this.value)">
        <p>₹${itemTotal}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  totalBox.innerText = "Total: ₹" + total;
}

function updateQty(index, qty) {
  cart[index].qty = parseInt(qty);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

document.addEventListener("DOMContentLoaded", displayCart);
