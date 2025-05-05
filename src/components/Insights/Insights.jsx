import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Blog_Banner from '../../pages/Blogs_Insights/Blog_Banner'
import SearchBar from '../../pages/Blogs_Insights/Searchbar'
import Blog_technology from '../../pages/Blogs_Insights/Blog_technology'
import Details from '../../pages/Blogs_Insights/Details'
import ContactUs from '../../pages/Home/ContactUs'

const Insights = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Controls animation duration
      once: true,     // Ensures animation runs only once
      offset: 100,    // Delays animation start by 100px
    })
  }, [])

  return (
    <div>
      <div data-aos="fade" className="transition-all duration-700">
        <Blog_Banner />
      </div>
      <div data-aos="fade-up" className="transition-all duration-700 delay-100">
        <SearchBar />
      </div>
      <div data-aos="fade-left" className="transition-all duration-700 delay-200">
        <Blog_technology />
      </div>
      <div data-aos="fade-right" className="transition-all duration-700 delay-300">
        <Details />
      </div>
      <div data-aos="fade-up" className="transition-all duration-700 delay-400">
        <ContactUs />
      </div>
    </div>
  )
}

export default Insights
