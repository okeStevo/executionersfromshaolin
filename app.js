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

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the theme on page load
if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
    darkIcon.classList.add('hidden');
    lightIcon.classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
}

// Toggle theme on button click
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
const orderNowBtns = document.querySelectorAll('.order-now-btn');
const orderForm = document.getElementById('orderForm');

// Open popup when order button is clicked
orderBtn.addEventListener('click', () => {
    orderPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Open popup when any "Order Now" button is clicked
orderNowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        orderPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close popup when close button is clicked
closePopup.addEventListener('click', () => {
    orderPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close popup when clicking outside the modal
orderPopup.addEventListener('click', (e) => {
    if (e.target === orderPopup) {
        orderPopup.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Handle form submission
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    orderPopup.classList.remove('active');
    document.body.style.overflow = 'auto';
    orderForm.reset();
});

// Initialize Hero Slider
$(document).ready(function() {
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
});