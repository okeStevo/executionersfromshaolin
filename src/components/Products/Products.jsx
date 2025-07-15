import React from "react";
import Img1 from "../../assets/women/women1.jpg";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women5.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData =[
    {
        id: 1,
        Image: Img1,
        title: "Striped Sleeveless Top",
        rating: 5.0,
        color: "Yellow, Black & Off-white",
        aosDelay: "0",
    },
    {
        id: 2,
        Image: Img2,
        title: "Classic Denim Jacket",
        rating: 4.5,
        color: "Black",
        aosDelay: "200",
    },
    {
        id: 3,
        Image: Img3,
        title: "Soft Pink Gown",
        rating: 4.7,
        color: "Pastel Pink",
        aosDelay: "400",
    },
    {
        id: 4,
        Image: Img4,
        title: "Lilac Fur Jacket",
        rating: 4.4,
        color: "Faint Purple",
        aosDelay: "600",
    },
    {
        id: 5,
        Image: Img5,
        title: "Linen Summer Dress",
        rating: 4.4,
        color: "Coral Pink",
        aosDelay: "600",
    },
    
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
            <p data-aos="fade-up" className="text-xs text-gray-400 ">Discover what everyone’s loving! Our top-selling item combines unbeatable quality, style, and value. Trusted by hundreds, it’s a customer favorite for a reason. Don’t miss out—grab yours while it’s still in stock!</p>
        </div>
        {/* Body Section */}
        <div>
            <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* Card Section */}
                {
                ProductsData.map((data) => (
                    <div 
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id} 
                        className="space-y-3"
                    >
                        <img src={data.Image} alt="" className="w-[150px] h-[220px] object-cover rounded-md" />
                        <div>
                            <h3 className="font-semibold ">{data.title}</h3>
                            <p className="text-sm text-gray-600">{data.color}</p>
                        </div>
                        <div className="flex item-center gap-1">
                            <FaStar className="text-yellow-400"/>
                            <span>{data.rating}</span> 
                        </div>
                    </div>
                ))}
            </div>
            {/*view all button */}
            <div className="flex justify-center">
                <button 
                style={{backgroundImage: "linear-gradient(to right, #FFB800, #FF9900)", }}
                className="text-center mt-10 cursor-pointer text-white py-1 px-5 rounded-md">View All Button</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
