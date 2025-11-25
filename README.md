# Charlyn Clothing Store

A modern, responsive clothing e-commerce website built with vanilla HTML, CSS, and JavaScript.

## 📁 Files

- **index.html** - Main HTML file with complete page structure
- **script.js** - JavaScript file with all functionality
- **images/** - Folder containing all product images

## 🚀 Features

### ✅ Implemented Features

1. **Responsive Navbar**
   - Logo and branding
   - Search functionality
   - Shopping cart button
   - Dark mode toggle
   - Dropdown menu for categories

2. **Hero Section**
   - Auto-playing carousel with 4 slides
   - Smooth transitions
   - Call-to-action buttons
   - Responsive images

3. **Products Section**
   - Grid layout of latest arrivals
   - Product cards with images, titles, colors, and ratings
   - "View All" button

4. **Featured Products Section**
   - Best-selling product cards
   - Hover effects
   - Star ratings
   - Order buttons

5. **Banner Section**
   - Promotional content
   - Feature highlights with icons
   - Responsive layout

6. **Subscribe Section**
   - Email subscription form
   - Gradient background

7. **Testimonials Section**
   - Customer reviews carousel
   - Auto-playing slider
   - Responsive design

8. **Footer**
   - Company information
   - Quick links
   - Categories
   - Social media links
   - Contact information

9. **Order Popup Modal**
   - Form with name, phone, email, and address fields
   - Close button
   - Click outside to close
   - Form validation

10. **Dark Mode**
    - Toggle between light and dark themes
    - Persistent theme using localStorage
    - Smooth transitions

11. **Animations**
    - AOS (Animate On Scroll) library integration
    - Smooth fade-in and zoom effects

## 🛠️ Technologies Used

- **HTML5** - Page structure
- **CSS3** - Styling (via Tailwind CSS CDN)
- **JavaScript (ES6)** - Functionality
- **jQuery** - Required for Slick Carousel
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **Slick Carousel** - For hero and testimonials sliders
- **AOS** - Animate On Scroll library
- **Font Awesome** - Icons

## 📦 External Dependencies (CDN)

All dependencies are loaded via CDN, so no installation is required:

- Tailwind CSS v3
- AOS v2.3.4
- Slick Carousel v1.8.1
- Font Awesome v6.5.1
- jQuery v3.6.0

## 🎯 How to Use

1. **Open the HTML file**
   ```
   Simply open index.html in any modern web browser
   ```

2. **No build process required**
   - All dependencies are loaded from CDN
   - No npm install needed
   - No compilation required

3. **Test features**
   - Click the shopping cart icon to open the order modal
   - Toggle dark mode using the sun/moon icon
   - Navigate through the hero slider (auto-plays)
   - Scroll to see AOS animations
   - View testimonials carousel

## 🎨 Customization

### Colors
Edit the CSS variables in the `<style>` section of index.html:
```css
:root {
    --color-primary: #ffcc70;
    --color-secondary: #f97316;
}
```

### Products Data
Edit the arrays in `script.js`:
- `productsData` - Latest arrivals section
- `topProductsData` - Featured products
- `testimonialsData` - Customer reviews

### Images
Replace image paths in:
- HTML file for hero slider images
- JavaScript arrays for product images
- All images should be in the `images/` folder

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- The dark mode preference is saved in localStorage
- Form submission shows an alert (can be connected to backend)
- All animations are smooth and performant
- Mobile-responsive design
- No build step required

## 🚀 Deployment

Simply upload these files to any web server:
- index.html
- script.js
- images/ folder (with all product images)

No special server configuration needed!

## 💡 Future Enhancements

Possible additions:
- Add backend integration for order form
- Implement actual search functionality
- Add shopping cart functionality with item management
- Connect email subscription to mailing service
- Add product detail pages
- Implement filtering and sorting
- Add size and color selection
- Integrate payment gateway

---

**Live Demo**: Open `index.html` in your browser to see the site in action!

**Contact**: +234 906 146 2887