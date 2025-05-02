import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Using window.scrollTo() with smooth scroll behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  }, [location]);

  return null;
};

export default ScrollToTop;
