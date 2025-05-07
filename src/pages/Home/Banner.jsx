import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HomeBannerImg1 from '../../assets/Home_banner.png'; // Add real image paths
import HomeBannerImg2 from '../../assets/service_banner.png';
import HomeBannerImg3 from '../../assets/nft_banner.png';

const Banner = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false, // Optional: Remove arrows if you don't want navigation buttons
  };

  return (
    <div className="relative w-full h-[600px]">
      {/* Carousel */}
      <Slider {...settings}>
        {/* First Slide */}
        <div className="relative w-full h-[600px]">
          <img
            src={HomeBannerImg1}
            alt="Home Banner 1"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
            <div className="text-white text-start w-full px-4 sm:px-8 lg:px-16">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                AI-Powered Farming
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-10">
                Smart climate control, automated systems.
              </p>
              <Link
                to // Update the link to your contact page
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Second Slide */}
        <div className="relative w-full h-[600px]">
          <img
            src={HomeBannerImg2}
            alt="Home Banner 2"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
            <div className="text-white text-start w-full px-4 sm:px-8 lg:px-16">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                Precision Agriculture
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-10">
                Harness data and technology to optimize yields.
              </p>
              <Link
                to  // Update the link to your desired page
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Third Slide */}
        <div className="relative w-full h-[600px]">
          <img
            src={HomeBannerImg3}
            alt="Home Banner 3"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
            <div className="text-white text-start w-full px-4 sm:px-8 lg:px-16">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                Sustainable Farming Solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-10">
                Reduce waste and maximize efficiency with AI.
              </p>
              <Link
                to  // Update the link as needed
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
