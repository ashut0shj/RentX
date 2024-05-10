// Sample rental data
const rentalsData = [
    {
        type: 'Apartment',
        title: '1 BHK Apartment for Rent',
        price: 10000,
        location: 'Mumbai',
        description: 'A cozy 1 BHK apartment with modern amenities. Close to shopping centers and transportation.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiJqVZGCBeCIbYNzLAqDitsqrBBih9mjRUw&s'
    },
    {
        type: 'House',
        title: 'Independent House for Rent',
        price: 25000,
        location: 'Bangalore',
        description: 'Spacious independent house with a garden. Suitable for families. Close to schools and parks.',
        image: 'https://hips.hearstapps.com/hmg-prod/images/bb5-1556809406.jpg?crop=1xw:1xh;center,top&resize=980:*'
    },
    {
        type: 'Room',
        title: 'Furnished Room for Rent',
        price: 8000,
        location: 'Delhi',
        description: 'Well-furnished room in a shared apartment. Ideal for working professionals. Utilities included.',
        image: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-10/31/18/enhanced/13618ea84f0f/enhanced-3200-1572546694-1.jpg?output-format=auto&output-quality=auto'
    },
    {
        type: 'Dress',
        title: 'Traditional Saree for Rent',
        price: 500,
        location: 'Jaipur',
        description: 'Beautiful traditional saree available for rent. Perfect for weddings and special occasions.',
        image: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-10/31/18/enhanced/13618ea84f0f/enhanced-3200-1572546694-1.jpg?output-format=auto&output-quality=auto'
    },
    {
        type: 'Furniture',
        title: 'Sofa Set for Rent',
        price: 1500,
        location: 'Chennai',
        description: 'Comfortable sofa set available for rent. Adds elegance to your living room.',
        image: ''},
    {
        type: 'Electronics',
        title: 'LED TV for Rent',
        price: 2000,
        location: 'Hyderabad',
        description: 'High-definition LED TV available for rent. Perfect for movie nights and gaming sessions.',
        image: 'https://5.imimg.com/data5/ANDROID/Default/2022/3/OP/JW/TK/100333456/product-jpeg.jpg'
    }   ,

];

function generateRentals() {
    const rentalsSection = document.getElementById('rentals');

    rentalsData.forEach(rental => {
        const rentalDiv = document.createElement('div');
        rentalDiv.classList.add('rental');

        rentalDiv.innerHTML = `
            <img src="${rental.image}" alt="${rental.title}">
            <div class="rental-details">
                <h3>${rental.title}</h3>
                <p class="price">₹${rental.price} / month</p>
                <p class="location">Location: ${rental.location}</p>
                <p class="description">${rental.description}</p>
            </div>
            <button class="rentButton" onclick="redirectToProductPage('${rental.title}', ${rental.price}, '${rental.location}', '${rental.description}', '${rental.image}')">Rent Now</button>
        `;

        rentalsSection.appendChild(rentalDiv);
    });
}

function redirectToProductPage(title, price, location, description, image) {
    const url = `product.html?title=${encodeURIComponent(title)}&price=${price}&location=${encodeURIComponent(location)}&description=${encodeURIComponent(description)}&image=${encodeURIComponent(image)}`;
    window.location.href = url;
}

window.onload = generateRentals;
