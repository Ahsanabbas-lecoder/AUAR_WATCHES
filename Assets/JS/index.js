 // Product Data
 const products = [
    {
        id: 1,
        name: "36MM Watch",
        image: "Assets/Images/PRODUCTS/BlackLinkSkeleton2Rounded40mm.webp",
        price: 5000,
    },
    {
        id: 2,
        name: "36MM Watch",
        image: "Assets/Images/PRODUCTS/New_Diamond_Rounded_5ae39b3d-49ac-4c12-8bc7-b48d1544a448.webp",
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
// Cart functionality
const cart = [
    {
        id: 1,
        name: "36MM Watch",
        image: "Assets/Images/PRODUCTS/BlackLinkSkeleton2Rounded40mm.webp",
        price: 5000,
    },
    {
        id: 2,
        name: "36MM Watch",
        image: "Assets/Images/PRODUCTS/New_Diamond_Rounded_5ae39b3d-49ac-4c12-8bc7-b48d1544a448.webp",
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

// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        return true;
    }
    return false;
}

// Function to update cart count in UI
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Function to handle Buy Now
function buyNow(productId) {
    if (addToCart(productId)) {
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    }
}

// Update the modal buttons to use these functions
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const productId = button.getAttribute('data-product-id');
            
            // Update the Add to Cart button
            const addToCartBtn = modal.querySelector('.btn-success');
            if (addToCartBtn) {
                addToCartBtn.onclick = function() {
                    addToCart(productId);
                    bootstrap.Modal.getInstance(modal).hide();
                    alert('Item added to cart!');
                };
            }
            
            // Update the Buy Now button
            const buyNowBtn = modal.querySelector('.btn-primary');
            if (buyNowBtn) {
                buyNowBtn.onclick = function() {
                    buyNow(productId);
                };
            }
        });
    }
    
    // Initialize cart count
    updateCartCount();
});
// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        // Get current cart from sessionStorage or initialize empty array
        let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        return true;
    }
    return false;
}
