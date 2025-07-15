import React from "react";
import Image1 from "../../assets/Hero/kids.png";
import Image2 from "../../assets/Hero/women.png";
import Image3 from "../../assets/Hero/men.png";
import Image4 from "../../assets/Hero/shopping.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Kid's Wear",
    description: "Shop the cutest styles for less! Enjoy up to 50% off on all Kid's Wear – comfy, colorful, and perfect for every occasion.",
  },
  {
    id: 2,
    img: Image2,
    title: "Upto 50% off on all Women's Wear",
    description: "Elevate your style for less! Enjoy up to 50% off on all Women's Wear – trendy, elegant, and made for you.",
  },
  {
    id: 3,
    img: Image3,
    title: "Upto 50% off on all Men's Wear",
    description: "Step up your wardrobe with up to 50% off on all Men's Wear – stylish, sharp, and made to impress.",
  },
  {
    id: 4,
    img: Image4,
    title: "Upto 75% off on all bulk purchase",
    description: "Stock up and save big! Enjoy up to 75% off on all bulk purchases – perfect for families, resellers, and savvy shoppers.",
  },
];

const Hero = ({ handleOrderPopup }) => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] 
    sm:min-h-[650px] bg-gray-100 flex justify-center items-center 
    dark:bg-gray-950 dark:text-white duration-200 ">
      {/* Background Pattern */}
        <div className="h-[700px] w-[700px] bg-primary absolute -top-1/2 right-0 rounded-3xl rotate-45 z-10"></div>
      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0 relative z-10">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                {/* text content section */}
                <div
                className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
                order-2 sm:order-1 relative z-10"
                >
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p 
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm">
                    {data.description}
                  </p>
                  <div 
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    <button 
                    onClick={handleOrderPopup}
                    style={{
                      backgroundImage: "linear-gradient(to right, #FFB800, #FF9900)", 
                    }}
                    className="hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">Order Now</button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img src={data.img} 
                    alt=""
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-125 object-contain mx-auto" 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
