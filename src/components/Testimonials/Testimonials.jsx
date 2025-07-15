import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
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
    text: "I wasn’t sure at first, but once I received my order, I was blown away. The fit, the feel, everything was perfect!",
    img: "https://i.pinimg.com/736x/f2/e2/55/f2e255f1708312e5e7fd3971a0aba9e7.jpg"
  }
];

const Testimonials = () => {

var settings = {
  dot: true,
  arrow: false,
  infinite: true,
  speed: 500,
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
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/*Header section*/}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">What our customers are saying</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
            <p data-aos="fade-up" className="text-xs text-gray-400 ">Hear what our happy customers have to say about their experience
            with our products. Trusted by many, their words speak volumes.</p>
        </div>
        {/*Testimonials Cards*/}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialsData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img src={data.img} 
                    alt=""
                    className="rounded-full w-20 h-20" />
                  </div>
                  <div 
                  className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif
                  absolute top-0 right-0">
                    "
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
