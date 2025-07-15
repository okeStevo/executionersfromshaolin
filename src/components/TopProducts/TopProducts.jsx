import React from "react";
import Img1 from "../../assets/shirt/shirt1.jpg";
import Img2 from "../../assets/shirt/shirt2.jpg";
import Img3 from "../../assets/shirt/shirt3.jpg";
import Img4 from "../../assets/shirt/shirt4.jpg";
import Img5 from "../../assets/shirt/shirt5.jpg";
import Img6 from "../../assets/shirt/shirt6.jpg";
import { FaStar } from "react-icons/fa6";


const ProductsData =[
    {
        id: 1,
        Image: Img1,
        title: "Women Ethnic",
        description: "Elegant and timeless ethnic wear crafted with vibrant patterns to add a cultural touch to your style.",
    },
    {
        id: 2,
        Image: Img2,
        title: "Women Western",
        description: "Modern western outfits designed for comfort and flair — perfect for every confident woman.",
    },
    {
        id: 3,
        Image: Img3,
        title: "Printed T-Shirt",
        description: "Casual printed tee that brings personality to your look — bold, bright, and breathable.",
    },
    {
        id: 4,
        Image: Img4,
        title: "Long Sleeve Tee",
        description: "Stay cool and covered in this lightweight long sleeve shirt — perfect for layering or solo wear.",
    },
    {
        id: 5,
        Image: Img5,
        title: "Men's Classic Tee",
        description: "A go-to essential for every man — built with premium cotton for all-day comfort and clean looks.",
    },
    {
        id: 6,
        Image: Img6,
        title: "Roots & Culture Shirt",
        description: "Celebrate culture with this iconic Africa-map shirt — bold, proud, and powerfully stylish.",
    },
    
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
  <div>
    <div className="container">
        {/*Header Section */}
        <div className="text-left mb-24">
            <p data-aos="fade-up" className="text-sm text-primary">Top Rated Products for you</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">Best Products</h1>
            <p data-aos="fade-up" className="text-xs text-gray-400 ">Discover what everyone’s loving! Our top-selling item combines unbeatable quality, style, and value. Trusted by hundreds, it’s a customer favorite for a reason. Don’t miss out—grab yours while it’s still in stock!</p>
        </div>   
        {/*Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 
        md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {
                ProductsData.map((data) => (
                    <div 
                    key={data.id}
                    data-aos="zoom-in"
                    className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 
                    dark:hover:bg-[#f97316] hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                        {/* Image Section */}
                        <div className="h-[250px] flex justify-center items-center bg-gray-50">
                            <img 
                            src={data.Image} 
                            alt={data.title}
                            className="h-[200px] object-contain transform group-hover:scale-105 
                            duration-300 drop-shadow-md" />
                        </div>
                        {/* Details Section */}
                        <div className="p-4 text-center">
                            {/* Star rating*/}
                            <div className="w-full flex items-center justify-center gap-1 mb-2">
                                {[...Array(6)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500 text-sm" />
                                ))}
                            </div>
                            <h1 
                            className="text-xl font-bold ">{data.title}</h1>
                            <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                {data.description}
                            </p>
                            <button 
                                style={{backgroundImage: "linear-gradient(to right, #FFB800, #FF9900)", }}
                                className=" hover:scale-105 duration-300 text-white py-1 px-4 
                                rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                                onClick={handleOrderPopup}
                            >Order Now</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  </div>
  );
};

export default TopProducts;
  