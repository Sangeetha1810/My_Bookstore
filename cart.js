// Function to add a book to the cart
function addToCart(title, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart data or create new

    // Add new book
    cart.push({ title, price, image });

    // Save back to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${title} has been added to your cart!`);
}

// Function to display cart items in cart.html
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");

    if (!cartItems) return; // Prevent errors if not on the cart page

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.innerHTML = ""; // Clear previous content
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button class="remove-from-cart" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

// Function to remove item from cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove item
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(); // Update cart display
}

// Load cart items when cart page loads
document.addEventListener("DOMContentLoaded", displayCart);
