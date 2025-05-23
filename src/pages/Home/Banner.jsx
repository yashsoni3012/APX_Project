import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import gsap from 'gsap';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import HomeBannerImg1 from '../../assets/Home_banner.png';
import HomeBannerImg2 from '../../assets/service_banner.png';
import HomeBannerImg3 from '../../assets/nft_banner.png';

const BannerSlide = ({ img, heading, subtext, buttonText, buttonLink, isActive }) => {
  const contentRef = useRef();

  useEffect(() => {
    if (isActive && contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
          ease: 'power3.out',
        }
      );
    }
  }, [isActive]);

  return (
    <div className="relative w-full h-[50vh] sm:h-[600px]">
      <img src={img} alt={heading} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
        <div
          className="text-white text-start w-full px-4 sm:px-8 lg:px-16 max-w-8xl mx-auto"
          ref={contentRef}
        >
          <h1 className="text-xl sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
            {heading}
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mb-6 sm:mb-10 leading-relaxed">
            {subtext}
          </p>
          <Link
            to={buttonLink}
            className="bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-green-700 transition"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const slides = [
    {
      img: HomeBannerImg1,
      heading: 'AI-Powered Farming',
      subtext: 'Smart climate control, automated systems.',
      buttonText: 'Contact Us',
      buttonLink: '',
    },
    {
      img: HomeBannerImg2,
      heading: 'Precision Agriculture',
      subtext: 'Harness data and technology to optimize yields.',
      buttonText: 'Learn More',
      buttonLink: '',
    },
    {
      img: HomeBannerImg3,
      heading: 'Sustainable Farming Solutions',
      subtext: 'Reduce waste and maximize efficiency with AI.',
      buttonText: 'Get Started',
      buttonLink: '',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    beforeChange: (_, next) => setActiveSlide(next),
    prevArrow: (
      <button className="slick-prev slick-arrow z-10">
        <span className="text-white text-2xl sm:text-4xl">&#10094;</span>
      </button>
    ),
    nextArrow: (
      <button className="slick-next slick-arrow z-10">
        <span className="text-white text-2xl sm:text-4xl">&#10095;</span>
      </button>
    ),
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[600px]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <BannerSlide
            key={index}
            isActive={index === activeSlide}
            {...slide}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
