document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll('.filter ul li a');
    const products = document.querySelectorAll('.pro');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    filterLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const filter = this.dataset.filter;

            filterLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            products.forEach(product => {
                if (filter === 'all' || product.dataset.category === filter) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    priceRange.addEventListener('input', function () {
        priceValue.textContent = this.value;

        products.forEach(product => {
            const price = parseInt(product.querySelector('.des h4').textContent.substring(1));
            if (price <= this.value) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const product = button.closest('.pro');
            const productDetails = {
                img: product.querySelector('img').src,
                brand: product.querySelector('.des span').textContent,
                name: product.querySelector('.des h3').textContent,
                price: product.querySelector('.des h4').textContent
            };

            addToCart(productDetails);
        });
    });

    function addToCart(productDetails) {
        let cart = localStorage.getItem('cart');
        if (cart) {
            cart = JSON.parse(cart);
        } else {
            cart = [];
        }

        cart.push(productDetails);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart!');
    }
});
