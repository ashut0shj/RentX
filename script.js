// Sample rental data
const rentalsData = [
    {
        type: 'Apartment',
        title: '1 BHK Apartment for Rent',
        price: 10000,
        location: 'Mumbai',
        description: 'A cozy 1 BHK apartment with modern amenities. Close to shopping centers and transportation.',
        image: 'apartment_mumbai.jpg'
    },
    {
        type: 'House',
        title: 'Independent House for Rent',
        price: 25000,
        location: 'Bangalore',
        description: 'Spacious independent house with a garden. Suitable for families. Close to schools and parks.',
        image: 'house_bangalore.jpg'
    },
    {
        type: 'Room',
        title: 'Furnished Room for Rent',
        price: 8000,
        location: 'Delhi',
        description: 'Well-furnished room in a shared apartment. Ideal for working professionals. Utilities included.',
        image: 'room_delhi.jpg'
    },
    {
        type: 'Dress',
        title: 'Traditional Saree for Rent',
        price: 500,
        location: 'Jaipur',
        description: 'Beautiful traditional saree available for rent. Perfect for weddings and special occasions.',
        image: 'saree_jaipur.jpg'
    },
    {
        type: 'Furniture',
        title: 'Sofa Set for Rent',
        price: 1500,
        location: 'Chennai',
        description: 'Comfortable sofa set available for rent. Adds elegance to your living room.',
        image: 'sofa_chennai.jpg'
    },
    {
        type: 'Electronics',
        title: 'LED TV for Rent',
        price: 2000,
        location: 'Hyderabad',
        description: 'High-definition LED TV available for rent. Perfect for movie nights and gaming sessions.',
        image: 'tv_hyderabad.jpg'
    }   
];

// Function to generate rental listings
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

// Call the function to generate rentals when the page loads
window.onload = generateRentals;
