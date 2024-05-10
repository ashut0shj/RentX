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
        image: 'https://www.jiomart.com/images/product/original/rvrkkvmj0t/lanstick-vinyl-black-mr-bean-image-with-motivational-quotes-self-adhesive-wall-sticker-24-inch-product-images-orvrkkvmj0t-p601804543-0-202305260357.jpg?im=Resize=(1000,1000)'},
    {
        type: 'Electronics',
        title: 'LED TV for Rent',
        price: 2000,
        location: 'Hyderabad',
        description: 'High-definition LED TV available for rent. Perfect for movie nights and gaming sessions.',
        image: 'https://5.imimg.com/data5/ANDROID/Default/2022/3/OP/JW/TK/100333456/product-jpeg.jpg'
    }   ,
    {
        type: 'Saree',
        title: 'Bridal Lehangafor Rent',
        price: 1500,
        location: 'raipur',
        description: 'SILVER EMBELLISHED LEHENGA',
        image: 'https://kuroindia.in/cdn/shop/products/25_6c9ae608-fe4f-4020-a2bf-7ded5ea27f19_1800x1800.png?v=1652874060'
    }   ,
    {
        type: 'Trampoline',
        title: 'Trampoline for Rent',
        price: 7000,
        location: 'Mumbai',
        description: 'Solid steel structure : Fully galvanized steel frame for better resistance to rust and corrosion; 4 U-shaped big legs with 8 balanced contact points for better stability and safety',
        image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/304138402/CE/FD/MF/46380693/dolphy-mild-steel-12-feet-jumping-trampoline-1000x1000.jpg'
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
