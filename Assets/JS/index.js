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
        image: "Assets/Images/PRODUCTS/RoseBlackRubberSkeleton1Rounded40mm.webp",
        price: 7000,
    },
    {
        id: 4,
        name: "SKELETON Watch",
        image: "Assets/Images/PRODUCTS/RoseLinkSkeleton1Rounded40mm_0c8e5e5d-ead3-493f-8512-6512717fb635.webp",
        price: 8000,
    },
    {
        id: 5,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/PRODUCTS/Steel_Frosted.webp",
        price: 9000,
    },
    {
        id: 6,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/PRODUCTS/Steel_Link_Skeleton2_Rounded_40mm.webp",
        price: 10000,
    },
    {
        id: 7,
        name: "ULTRA THIN Watch",
        image: "Assets/Images/PRODUCTS/SteelBlackRubberSkeleton1Rounded40mm.webp",
        price: 10000,
    },
    {
        id: 8,
        name: "COMING SOON Watch",
        image: "Assets/Images/PRODUCTS/Box_2_Shot.webp",
        price: 12000,
    },
    {
        id: 9,
        name: "COMING SOON Watch",
        image: "Assets/Images/PRODUCTS/Rose_Gold_Frosted.webp",
        price: 15000,
    },
    {
        id: 10,
        name: "COMING SOON Watch",
        image: "Assets/Images/PRODUCTS/Rose_Gold_Ruby_Diamond_Front_Rounded.webp",
        price: 18000,
    }
];

// Cart functionality
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Function to update cart count in UI
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        return true;
    }
    return false;
}

// Function to handle Buy Now
function buyNow(productId) {
    if (addToCart(productId)) {
        // Redirect to checkout page
        window.location.href = 'checkout.html';
    }
}

// Function to open modal with product details
function openModal(productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        document.getElementById('modal-product-name').textContent = product.name;
        document.getElementById('modal-product-image').src = product.image;
        document.getElementById('modal-product-price').textContent = `Price: Rs. ${product.price}`;

        // Update the Add to Cart button
        document.getElementById('add-to-cart-btn').onclick = function() {
            addToCart(productId);
            const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
            modal.hide();
            alert('Item added to cart!');
        };
        
        // Update the Buy Now button
        document.getElementById('buy-now-btn').onclick = function() {
            buyNow(productId);
        };

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

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});