// Product Data
const products = [
    {
        id: 1,
        name: "36MM Watch",
        image: "Assets/Images/assets/images/image1.jpg",
        price: 5000,
    },
    {
        id: 2,
        name: "SKELETON Watch",
        image: "Assets/Images/assets/images/image2.jpg",
        price: 6000,
    },
    {
        id: 3,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/imag3.jpg",
        price: 7000,
    },
    {
        id: 4,
        name: "CHRONOGRAPH Watch",
        image: "Assets/Images/assets/images/image4.jpg",
        price: 8000,
    },
];

// Function to open modal with product details
function openModal(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-image').src = product.image;
        document.getElementById('modal-product-price').textContent = `Price: Rs. ${product.price}`;

        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    }
}