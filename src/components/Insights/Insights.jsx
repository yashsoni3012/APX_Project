import React from 'react';

import Blog_Banner from '../../pages/Blogs_Insights/Blog_Banner';
import SearchBar from '../../pages/Blogs_Insights/Searchbar';
import Blog_technology from '../../pages/Blogs_Insights/Blog_technology';
import Details from '../../pages/Blogs_Insights/Details';
import ContactUs from '../../pages/Home/ContactUs';

const Insights = () => {
  return (
    <div className="overflow-x-hidden w-full space-y-10">
      <Blog_Banner />
      <SearchBar />
      <Blog_technology />
      <Details />
      <ContactUs />
    </div>
  );
};

export default Insights;
