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
        image: 'data:image/jpeg;base64,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'
    },
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
                <p class="price">$${rental.price} / month</p>
                <p class="location">Location: ${rental.location}</p>
                <p class="description">${rental.description}</p>
            </div>
            <button class="rentButton">Rent Now</button>
        `;

        rentalsSection.appendChild(rentalDiv);
    });
}

window.onload = generateRentals;
