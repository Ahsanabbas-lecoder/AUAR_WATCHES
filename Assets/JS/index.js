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
        name: "36MM Watch",
        image: "Assets/Images/assets/images/image2.jpg",
        price: 6000,
    },
    {
        id: 3,
        name: "SKELETON Watch",
        image: "Assets/Images/assets/images/image13.jpg",
        price: 7000,
    },
    {
        id: 4,
        name: "SKELETON Watch",
        image: "Assets/Images/assets/images/image4.jpg",
        price: 8000,
    },
    {
        id: 5,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/image5.jpg",
        price: 9000,
    },
    {
        id: 6,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/image6.jpg",
        price: 10000,
    },
    {
        id: 7,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/image6.jpg",
        price: 10000,
    },
    {
        id: 8,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/image6.jpg",
        price: 10000,
    },
    {
        id: 9,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/image6.jpg",
        price: 10000,
    },
    {
        id: 10,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/image6.jpg",
        price: 10000,
    },
    {
        id: 11,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/image6.jpg",
        price: 10000,
    },
    {
        id: 12,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/image6.jpg",
        price: 10000,
    },
    {
        id: 14,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/image6.jpg",
        price: 10000,
    },
    {
        id: 16,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/assets/images/image6.jpg",
        price: 10000,
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
function filterProducts(event, tag) {
  event.preventDefault();
  document.querySelectorAll('.cards').forEach(card => {
      let tags = card.getAttribute('data-tags');
      if (tag === 'ALL' || (tags && tags.includes(tag))) {
          card.style.display = 'block';
      } else {
          card.style.display = 'none';
      }
  });
}

