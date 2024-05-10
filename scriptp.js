// Function to generate rental listings
function generateRentals() {
    // Code for generating rentals...
}

// Function to calculate final price based on duration and quantity
function calculateFinalPrice() {
    const pricePerMonth = parseFloat(document.getElementById('productPrice').dataset.price);
    const duration = document.getElementById('duration').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    let finalPrice = pricePerMonth;

    switch (duration) {
        case 'days':
            finalPrice *= quantity / 30; // Assuming 30 days in a month
            break;
        case 'weeks':
            finalPrice *= quantity / 4; // Assuming 4 weeks in a month
            break;
        case 'months':
            finalPrice *= quantity;
            break;
        default:
            break;
    }

    document.getElementById('finalPrice').textContent = `$${finalPrice.toFixed(2)}`;
}

window.onload = function() {
    // Redirect to final page when Rent Now button is clicked
    document.getElementById('rentButton').addEventListener('click', function() {
        window.location.href = 'final.html'; // Redirect to final page
    });

    // Get the query parameters from the URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Get the product details from the query parameters
    const productName = urlParams.get('title');
    const productPrice = urlParams.get('price');
    const productLocation = urlParams.get('location');
    const productDescription = urlParams.get('description');
    const productImage = urlParams.get('image');

    // Populate the product details in the HTML elements
    document.getElementById('productName').innerText = productName;
    document.getElementById('productImages').innerHTML = `<img src="${productImage}" alt="${productName}">`;
    document.getElementById('productDescription').innerText = productDescription;
    document.getElementById('productLocation').innerText = `Location: ${productLocation}`;
    document.getElementById('productPrice').innerText = `Price: $${productPrice} / month`;
    document.getElementById('productPrice').dataset.price = productPrice;

    // Sample review data
    const reviews = [
        { user: 'User1', comment: 'Great product!', rating: 5 },
        { user: 'User2', comment: 'Not bad.', rating: 3 },
        // Add more reviews as needed
    ];

    // Populate the review section
    const reviewContainer = document.getElementById('reviews');
    reviews.forEach(review => {
        // Code for populating reviews...
    });

    // Event listeners
    const durationSelect = document.getElementById('duration');
    const quantityInput = document.getElementById('quantity');

    durationSelect.addEventListener('change', calculateFinalPrice);
    quantityInput.addEventListener('input', calculateFinalPrice);

    // Initial calculation
    calculateFinalPrice();

    // Call function to generate rentals
    generateRentals();
};
