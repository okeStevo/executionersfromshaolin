import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import { FaFacebookF, FaInstagram, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { data } from "autoprefixer";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};
const FooterLinks = [
  {
    title: "Home",
    links: [
      { name: "Top Deals", link: "/top-deals" },
      { name: "Featured Products", link: "/featured" },
      { name: "New Arrivals", link: "/new" },
      { name: "Best Sellers", link: "/bestsellers" }
    ]
  },
  {
    title: "About",
    links: [
      { name: "Our Story", link: "/about#story" },
      { name: "Mission & Vision", link: "/about#mission" },
      { name: "Team", link: "/about#team" },
      { name: "Careers", link: "/careers" }
    ]
  },
  {
    title: "Contact",
    links: [
      { name: "Customer Support", link: "/contact#support" },
      { name: "Order Tracking", link: "/contact#tracking" },
      { name: "FAQs", link: "/faqs" },
      { name: "Live Chat", link: "/contact#chat" }
    ]
  },
  {
    title: "Blog",
    links: [
      { name: "Latest News", link: "/blog#latest" },
      { name: "Style Tips", link: "/blog#style" },
      { name: "Buying Guides", link: "/blog#guides" },
      { name: "Product Reviews", link: "/blog#reviews" }
    ]
  }
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 pb-22 gap-10">
          
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src={footerLogo} alt="Logo" className="w-10 h-10" />
              <h1 className="text-2xl font-bold">Charlyn Store</h1>
            </div>
            <p className="text-sm text-gray-300">
              Stay connected with us through our Home, About, Contact, and Blog pages—your go-to for updates, support, and stories behind our brand.
            </p>
          </div>

          {/* Column 2: Important Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 whitespace-nowrap">Important Links</h2>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li 
                className="cursor-pointer hover:text-[#f97316] hover:translate-x-1
                duration-300 text-gray-300"
                key={link.title}>
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Links</h2>
            <ul className="flex flex-col gap-3">
              {FooterLinks.map((link) => (
                <li 
                className="cursor-pointer hover:text-[#f97316] hover:translate-x-1
                duration-300 text-gray-300"
                key={link.title}>
                  <span>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social & Contact */}
          <div className="flex flex-col gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-3">
              <FaFacebookF className="text-3xl" />
              <span>Charlyn_Store</span>
            </div>
            <div className="flex items-center gap-3">
              <FaInstagram className="text-3xl" />
              <span>Charlyn_Store</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationArrow className="text-3xl" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt className="text-3xl" />
              <span>+234 906 146 2887</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
