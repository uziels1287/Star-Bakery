// Function to save favorite bakery item
function saveFavorite(itemName) {
localStorage.setItem('favoriteItem', itemName);
document.getElementById('favorite-display').innerText = 'Your favorite: ' + itemName;
}

// Function to load saved item when page reloads
function loadFavorite() {
var saved = localStorage.getItem('favoriteItem');
if (saved) {
document.getElementById('favorite-display').innerText = 'Your favorite: ' + saved;
}
}

// Simple form validation for contact page
function validateForm(event) {
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var errorMsg = document.getElementById('error-msg');

if (name === '' || email === '') {
event.preventDefault();
errorMsg.innerText = 'Please fill out all required fields.';
} else {
errorMsg.innerText = '';
}
}

// Run when page loads
window.onload = loadFavorite;