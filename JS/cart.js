function getCartFromStorage() {
  let cartItems = localStorage.getItem("cartItems");
  return cartItems
    ? cartItems.split(";").map((item) => {
        let parts = item.split(",");
        return { name: parts[0], price: parseFloat(parts[1]), image: parts[2] };
      })
    : [];
}

function saveCartToStorage(cart) {
  let cartItemsString = cart
    .map((item) => item.name + "," + item.price + "," + item.image)
    .join(";");
  localStorage.setItem("cartItems", cartItemsString);
}

function addToCart(productName, price, imageUrl) {
  let cart = getCartFromStorage();
  cart.push({ name: productName, price: price, image: imageUrl });
  saveCartToStorage(cart);
  updateCart();
}

function removeFromCart(button) {
  let cartItem = button.parentNode;
  let productName = cartItem.querySelector("p").innerText.split(" - ")[0];
  let cart = getCartFromStorage();

  let indexToRemove = cart.findIndex((item) => item.name === productName);
  if (indexToRemove !== -1) {
    let removedPrice = cart[indexToRemove].price;
    let totalPrice =
      parseFloat(
        document.getElementById("order-summary").innerText.split("$")[1]
      ) - removedPrice;
    cart.splice(indexToRemove, 1);
    saveCartToStorage(cart);
    cartItem.parentElement.remove();
    document.getElementById("order-summary").innerHTML =
      "<h2>Order Summary</h2><p>Total: $" + totalPrice.toFixed(2) + "</p>";

    if (cart.length === 0) {
      const cartItemsContainer = document.getElementById("cart-items");
      const emptyCartMessage = document.createElement("div");
      emptyCartMessage.textContent = "You have no items in your cart.";
      cartItemsContainer.innerHTML = "";
      cartItemsContainer.appendChild(emptyCartMessage);
    }
    
  }
}


function updateCart() {
  let cart = getCartFromStorage();
  const cartItemsContainer = document.getElementById("cart-items");
  const orderSummary = document.getElementById("order-summary");
  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;

  if (cart.length === 0) {
    const emptyCartMessage = document.createElement("div");
    emptyCartMessage.textContent = "You have no items in your cart.";
    cartItemsContainer.appendChild(emptyCartMessage);
    orderSummary.innerHTML = "<h2>Order Summary</h2><p>Total: $0.00</p>";
  } else {
    cart.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.classList.add("cart-item");
      itemElement.innerHTML =
        '<center><img src="' +
        item.image +
        '" alt="' +
        item.name +
        '"><br><p>' +
        item.name +
        "</p><br><p></p> PRICE - $" +
        item.price +
        '</p><br><button class = "remove-btn" onclick="removeFromCart(this)">Remove</button></center>';
      cartItemsContainer.appendChild(itemElement);
      totalPrice += item.price;
    });

    orderSummary.innerHTML =
      "<h2>Order Summary</h2><p>Total: $" + totalPrice.toFixed(2) + "</p>";
  }
}


window.onload = function () {
  updateCart();
};

function showMessage(
  message = 'Added to Cart<i class="ri-shopping-cart-2-line" style="font-size: 127%;"></i>'
) {
  let messageElement = document.createElement("div");
  messageElement.innerHTML = message;
  messageElement.classList.add("message");
  document.body.appendChild(messageElement);
  setTimeout(() => {
    messageElement.remove();
  }, 1900);
}
