# Charlyn Store - Vanilla JavaScript Version

This is a vanilla HTML/CSS/JavaScript conversion of the React-based Charlyn Store e-commerce website.

## 📁 Files

- **store-vanilla.html** - Main HTML file with complete page structure
- **store-vanilla.js** - JavaScript file with all functionality
- **app.js** - Alternative JavaScript implementation

## 🚀 Features

All features from the React version have been converted:

### ✅ Implemented Features

1. **Responsive Navbar**
   - Logo and branding
   - Search functionality
   - Shopping cart button
   - Dark mode toggle
   - Dropdown menu for trending products

2. **Hero Section**
   - Auto-playing carousel with 4 slides
   - Smooth transitions
   - Call-to-action buttons
   - Responsive images

3. **Products Section**
   - Grid layout of products
   - Product cards with images, titles, colors, and ratings
   - "View All" button

4. **Top Products Section**
   - Featured product cards
   - Hover effects
   - Star ratings
   - Order buttons

5. **Banner Section**
   - Promotional content
   - Feature highlights with icons
   - Responsive layout

6. **Subscribe Section**
   - Email subscription form
   - Background image

7. **Testimonials Section**
   - Customer reviews carousel
   - Auto-playing slider
   - Responsive design

8. **Footer**
   - Company information
   - Quick links
   - Social media links
   - Contact information

9. **Order Popup Modal**
   - Form with name, phone, and address fields
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
   Simply open store-vanilla.html in any modern web browser
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

## 🔄 Differences from React Version

### Removed
- React and ReactDOM
- React hooks (useState, useEffect)
- JSX syntax
- Component-based architecture
- Vite build system
- npm dependencies

### Added
- Vanilla JavaScript event listeners
- Direct DOM manipulation
- jQuery for carousel functionality
- CDN-based dependencies
- Simpler file structure

### Maintained
- All visual design and styling
- All functionality
- Responsive layout
- Dark mode
- Animations
- Carousel features

## 🎨 Customization

### Colors
Edit the CSS variables in the `<style>` section:
```css
:root {
    --color-primary: #ffcc70;
    --color-secondary: #f97316;
}
```

### Products Data
Edit the arrays in `store-vanilla.js`:
- `productsData` - Main products section
- `topProductsData` - Featured products
- `testimonialsData` - Customer reviews

### Images
Replace image paths in:
- HTML file for static images
- JavaScript arrays for dynamic content

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
- store-vanilla.html
- store-vanilla.js
- src/ folder (with all assets)

No special server configuration needed!

## 💡 Future Enhancements

Possible additions:
- Add backend integration for order form
- Implement actual search functionality
- Add shopping cart functionality
- Connect email subscription to mailing service
- Add more product pages
- Implement filtering and sorting

---

**Original React Version**: See the `src/` folder for the React implementation
**Vanilla Version**: Use `store-vanilla.html` for the standalone version