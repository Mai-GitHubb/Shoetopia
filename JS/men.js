let cartItems = [];
let cartTotal = 0;

function addItemToCart(name, price) {
    cartItems.push({ name, price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartTotalElement = document.getElementById('total-price');
    const totalItemsElement = document.getElementById('total-items');
    
    // Update total price and total items in cart
    cartTotalElement.textContent = cartTotal.toFixed(2);
    totalItemsElement.textContent = cartItems.length;
}

// Add event listeners to all "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productName = this.dataset.name;
            const productPrice = parseFloat(this.dataset.price);
            addItemToCart(productName, productPrice);
        });
    });
});
