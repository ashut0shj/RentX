window.onload = function() {
    // Get product price from the URL query parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productPrice = parseFloat(urlParams.get('price'));
    console.log("Product Price:", productPrice); // Debug

    // Calculate insurance cost (10% of product price)
    const insuranceCost = 0.1 * productPrice;
    console.log("Insurance Cost:", insuranceCost); // Debug

    // Calculate total amount
    const totalAmount = productPrice + insuranceCost;
    console.log("Total Amount:", totalAmount); // Debug

    // Populate the final price and bill details
    document.getElementById('calculatedPrice').innerText = `₹${totalAmount.toFixed(2)}`;
    document.getElementById('productPrice').innerText = `₹${productPrice.toFixed(2)}`;
    document.getElementById('insuranceCost').innerText = `₹${insuranceCost.toFixed(2)}`;
    document.getElementById('totalAmount').innerText = `₹${totalAmount.toFixed(2)}`;

    // Payment button click event handler
    document.getElementById('payButton').addEventListener('click', function() {
        const selectedPaymentMethod = document.getElementById('paymentOptions').value;
        alert(`Payment successful! Method: ${selectedPaymentMethod}, Amount: ₹${totalAmount.toFixed(2)}`);
    });
};
