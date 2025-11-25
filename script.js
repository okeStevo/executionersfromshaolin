// Products Data - Using actual images from the images folder
const productsData = [
    {
        id: 1,
        image: "images/t-shirt1.JPG",
        title: "Classic T-Shirt",
        rating: 5.0,
        color: "White",
        aosDelay: "0"
    },
    {
        id: 2,
        image: "images/full-men-Tshirt.JPG",
        title: "Premium Men's Tee",
        rating: 4.8,
        color: "Black",
        aosDelay: "200"
    },
    {
        id: 3,
        image: "images/full-men-cloth-white.PNG",
        title: "Elegant White Outfit",
        rating: 4.9,
        color: "White",
        aosDelay: "400"
    },
    {
        id: 4,
        image: "images/full-men-cloth-black.JPG",
        title: "Sophisticated Black Suit",
        rating: 4.7,
        color: "Black",
        aosDelay: "600"
    },
    {
        id: 5,
        image: "images/full-men-jacket-black].PNG",
        title: "Premium Black Jacket",
        rating: 4.9,
        color: "Black",
        aosDelay: "800"
    }
];

// Top Products Data
const topProductsData = [
    {
        id: 1,
        image: "images/BON_1175.jpg",
        title: "Designer Collection",
        description: "Exclusive designer piece crafted with premium materials for the fashion-forward individual."
    },
    {
        id: 2,
        image: "images/BON_1237.jpg",
        title: "Casual Elegance",
        description: "Perfect blend of comfort and style for everyday wear that makes a statement."
    },
    {
        id: 3,
        image: "images/BON_1261.jpg",
        title: "Urban Street Style",
        description: "Contemporary streetwear that captures the essence of modern fashion trends."
    },
    {
        id: 4,
        image: "images/IMG_1765.jpg",
        title: "Classic Wardrobe Essential",
        description: "Timeless piece that belongs in every wardrobe. Versatile and effortlessly stylish."
    },
    {
        id: 5,
        image: "images/full-men-cloth.JPG",
        title: "Premium Full Outfit",
        description: "Complete ensemble designed for those who appreciate quality and sophistication."
    },
    {
        id: 6,
        image: "images/t-shirt1.JPG",
        title: "Signature T-Shirt",
        description: "Our bestselling tee made from premium cotton for ultimate comfort and durability."
    }
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        name: "Adebayo Ogunleye",
        text: "The quality of the clothing is exceptional! I've ordered multiple times and each piece exceeds my expectations. Highly recommend!",
        img: "https://i.pravatar.cc/150?u=adebayo"
    },
    {
        id: 2,
        name: "Chioma Nwosu",
        text: "Fast delivery and amazing customer service. The clothes fit perfectly and the fabric quality is top-notch!",
        img: "https://i.pravatar.cc/150?u=chioma"
    },
    {
        id: 3,
        name: "Tunde Bakare",
        text: "I'm impressed by the attention to detail in every piece. Charlyn Clothing has become my go-to store for quality fashion.",
        img: "https://i.pravatar.cc/150?u=tunde"
    },
    {
        id: 4,
        name: "Fatima Abdullahi",
        text: "Love the variety and style! The clothes are modern, comfortable, and reasonably priced. Will definitely shop again!",
        img: "https://i.pravatar.cc/150?u=fatima"
    },
    {
        id: 5,
        name: "Emeka Okafor",
        text: "Outstanding quality and great customer support. The ordering process was smooth and delivery was quick. Five stars!",
        img: "https://i.pravatar.cc/150?u=emeka"
    }
];

// Render Products Section
function renderProducts(containerId) {
    const container = document.getElementById(containerId);
    
    const html = `
        <div class="container mx-auto px-4">
            <div class="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" class="text-sm text-primary">New Arrivals</p>
                <h1 data-aos="fade-up" class="text-3xl font-bold">Latest Collection</h1>
                <p data-aos="fade-up" class="text-xs text-gray-400">
                    Discover our newest arrivals featuring the latest trends in fashion. Each piece is carefully selected to bring you style, comfort, and quality.
                </p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                ${productsData.map(product => `
                    <div data-aos="fade-up" data-aos-delay="${product.aosDelay}" class="space-y-3">
                        <img src="${product.image}" alt="${product.title}" class="w-[150px] h-[220px] object-cover rounded-md">
                        <div>
                            <h3 class="font-semibold">${product.title}</h3>
                            <p class="text-sm text-gray-600">${product.color}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <i class="fas fa-star text-yellow-400"></i>
                            <span>${product.rating}</span>
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="flex justify-center">
                <button class="gradient-btn text-center mt-10 cursor-pointer text-white py-1 px-5 rounded-md">View All Products</button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Render Top Products Section
function renderTopProducts() {
    const container = document.getElementById('topProducts');
    
    const html = `
        <div class="container mx-auto px-4">
            <div class="text-left mb-24">
                <p data-aos="fade-up" class="text-sm text-primary">Featured Collection</p>
                <h1 data-aos="fade-up" class="text-3xl font-bold">Best Sellers</h1>
                <p data-aos="fade-up" class="text-xs text-gray-400">
                    Our most popular items loved by customers. Premium quality clothing that combines style, comfort, and durability.
                </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                ${topProductsData.map(product => `
                    <div data-aos="zoom-in" class="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-secondary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                        <div class="h-[250px] flex justify-center items-center bg-gray-50">
                            <img src="${product.image}" alt="${product.title}" class="h-[200px] object-contain transform group-hover:scale-105 duration-300 drop-shadow-md">
                        </div>
                        <div class="p-4 text-center">
                            <div class="w-full flex items-center justify-center gap-1 mb-2">
                                ${Array(5).fill('<i class="fas fa-star text-yellow-500 text-sm"></i>').join('')}
                            </div>
                            <h1 class="text-xl font-bold">${product.title}</h1>
                            <p class="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">${product.description}</p>
                            <button class="order-now-btn gradient-btn hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">Order Now</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Render Testimonials
function renderTestimonials() {
    const container = document.getElementById('testimonialsSlider');
    
    const html = testimonialsData.map(testimonial => `
        <div class="my-6">
            <div class="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                <div class="mb-4">
                    <img src="${testimonial.img}" alt="${testimonial.name}" class="rounded-full w-20 h-20">
                </div>
                <div class="flex flex-col items-center gap-4">
                    <div class="space-y-3">
                        <p class="text-xs text-gray-500">${testimonial.text}</p>
                        <h1 class="text-xl font-bold text-black/80 dark:text-light">${testimonial.name}</h1>
                    </div>
                </div>
                <p class="text-black/20 text-9xl font-serif absolute top-0 right-0">"</p>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

// Initialize AOS
AOS.init({
    offset: 100,
    duration: 800,
    easing: "ease-in-sine",
    delay: 100,
    once: true,  // Animation happens only once
    mirror: false  // Elements don't animate out when scrolling past them
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const darkIcon = document.querySelector('.dark-icon');
const lightIcon = document.querySelector('.light-icon');

const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
}

darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkIcon.classList.add('hidden');
        lightIcon.classList.remove('hidden');
    } else {
        localStorage.setItem('theme', 'light');
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
    }
});

// Popup Modal
const orderPopup = document.getElementById('orderPopup');
const orderBtn = document.getElementById('orderBtn');
const closePopup = document.getElementById('closePopup');
const orderForm = document.getElementById('orderForm');

orderBtn.addEventListener('click', () => {
    orderPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closePopup.addEventListener('click', () => {
    orderPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
});

orderPopup.addEventListener('click', (e) => {
    if (e.target === orderPopup) {
        orderPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your order! We will contact you shortly.');
    orderPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
    orderForm.reset();
});

// Initialize when DOM is ready
$(document).ready(function() {
    // Render sections
    renderProducts('products');
    renderProducts('featured');
    renderTopProducts();
    renderTestimonials();
    
    // Reinitialize AOS after rendering - with a small delay to ensure DOM is ready
    setTimeout(() => {
        AOS.refresh();
    }, 100);
    
    // Initialize Hero Slider
    $('#heroSlider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    });

    // Initialize Testimonials Slider
    $('#testimonialsSlider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    
    // Add event listeners to dynamically created order buttons
    document.querySelectorAll('.order-now-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            orderPopup.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
});