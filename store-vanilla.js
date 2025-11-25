// Products Data
const productsData = [
    {
        id: 1,
        image: "src/assets/women/women1.jpg",
        title: "Striped Sleeveless Top",
        rating: 5.0,
        color: "Yellow, Black & Off-white",
        aosDelay: "0"
    },
    {
        id: 2,
        image: "src/assets/women/women2.jpg",
        title: "Classic Denim Jacket",
        rating: 4.5,
        color: "Black",
        aosDelay: "200"
    },
    {
        id: 3,
        image: "src/assets/women/women3.jpg",
        title: "Soft Pink Gown",
        rating: 4.7,
        color: "Pastel Pink",
        aosDelay: "400"
    },
    {
        id: 4,
        image: "src/assets/women/women4.jpg",
        title: "Lilac Fur Jacket",
        rating: 4.4,
        color: "Faint Purple",
        aosDelay: "600"
    },
    {
        id: 5,
        image: "src/assets/women/women5.jpg",
        title: "Linen Summer Dress",
        rating: 4.4,
        color: "Coral Pink",
        aosDelay: "600"
    }
];

// Top Products Data
const topProductsData = [
    {
        id: 1,
        image: "src/assets/shirt/shirt1.jpg",
        title: "Women Ethnic",
        description: "Elegant and timeless ethnic wear crafted with vibrant patterns to add a cultural touch to your style."
    },
    {
        id: 2,
        image: "src/assets/shirt/shirt2.jpg",
        title: "Women Western",
        description: "Modern western outfits designed for comfort and flair — perfect for every confident woman."
    },
    {
        id: 3,
        image: "src/assets/shirt/shirt3.jpg",
        title: "Printed T-Shirt",
        description: "Casual printed tee that brings personality to your look — bold, bright, and breathable."
    },
    {
        id: 4,
        image: "src/assets/shirt/shirt4.jpg",
        title: "Long Sleeve Tee",
        description: "Stay cool and covered in this lightweight long sleeve shirt — perfect for layering or solo wear."
    },
    {
        id: 5,
        image: "src/assets/shirt/shirt5.jpg",
        title: "Men's Classic Tee",
        description: "A go-to essential for every man — built with premium cotton for all-day comfort and clean looks."
    },
    {
        id: 6,
        image: "src/assets/shirt/shirt6.jpg",
        title: "Roots & Culture Shirt",
        description: "Celebrate culture with this iconic Africa-map shirt — bold, proud, and powerfully stylish."
    }
];

// Testimonials Data
const testimonialsData = [
    {
        id: 1,
        name: "Sarah Johnson",
        text: "I absolutely love the quality of the products! Fast delivery and great customer service. Will definitely shop again.",
        img: "https://i.pinimg.com/1200x/6d/52/c7/6d52c7371ff701b4c1343b6458bb1200.jpg"
    },
    {
        id: 2,
        name: "Michael Adeyemi",
        text: "The prices are unbeatable and the styles are trendy. I'm impressed by how easy it was to order.",
        img: "https://i.pinimg.com/1200x/22/eb/72/22eb722dafb7676609e9473c1a1c9949.jpg"
    },
    {
        id: 3,
        name: "Chidera Okafor",
        text: "I bought a few items for my family and everyone loved them. Great packaging and delivery too!",
        img: "https://i.pinimg.com/736x/9f/e1/05/9fe105d789b9a7c387aa54ae15463981.jpg"
    },
    {
        id: 4,
        name: "James Ojo",
        text: "Customer support was very helpful and responsive. The experience felt smooth from start to finish.",
        img: "https://i.pinimg.com/1200x/71/83/34/7183348f435c337bcc6deeb7e09e7c95.jpg"
    },
    {
        id: 5,
        name: "Amina Bello",
        text: "I wasn't sure at first, but once I received my order, I was blown away. The fit, the feel, everything was perfect!",
        img: "https://i.pinimg.com/736x/f2/e2/55/f2e255f1708312e5e7fd3971a0aba9e7.jpg"
    }
];

// Render Products Section
function renderProducts(containerId) {
    const container = document.getElementById(containerId);
    
    const html = `
        <div class="container mx-auto px-4">
            <div class="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up" class="text-sm text-primary">Top Selling Products for you</p>
                <h1 data-aos="fade-up" class="text-3xl font-bold">Products</h1>
                <p data-aos="fade-up" class="text-xs text-gray-400">
                    Discover what everyone's loving! Our top-selling item combines unbeatable quality, style, and value. Trusted by hundreds, it's a customer favorite for a reason. Don't miss out—grab yours while it's still in stock!
                </p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                ${productsData.map(product => `
                    <div data-aos="fade-up" data-aos-delay="${product.aosDelay}" class="space-y-3">
                        <img src="${product.image}" alt="" class="w-[150px] h-[220px] object-cover rounded-md">
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
                <button class="gradient-btn text-center mt-10 cursor-pointer text-white py-1 px-5 rounded-md">View All Button</button>
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
                <p data-aos="fade-up" class="text-sm text-primary">Top Rated Products for you</p>
                <h1 data-aos="fade-up" class="text-3xl font-bold">Best Products</h1>
                <p data-aos="fade-up" class="text-xs text-gray-400">
                    Discover what everyone's loving! Our top-selling item combines unbeatable quality, style, and value. Trusted by hundreds, it's a customer favorite for a reason. Don't miss out—grab yours while it's still in stock!
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
                                ${Array(6).fill('<i class="fas fa-star text-yellow-500 text-sm"></i>').join('')}
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
                    <img src="${testimonial.img}" alt="" class="rounded-full w-20 h-20">
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
    alert('Order placed successfully!');
    orderPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
    orderForm.reset();
});

// Initialize when DOM is ready
$(document).ready(function() {
    // Render sections
    renderProducts('products');
    renderProducts('productsRepeat');
    renderTopProducts();
    renderTestimonials();
    
    // Reinitialize AOS after rendering
    AOS.refresh();
    
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