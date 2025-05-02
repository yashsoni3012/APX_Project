import React from 'react'
import blog_banner from '../../assets/blog_banner.png'


const Blog_Banner = () => {
    return (
        <div>
            <div className="relative">
                {/* Responsive Image */}
                <img
                    src={blog_banner}
                    alt="About Banner"
                    className="w-full h-[300px] md:h-[400px] object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-center bg-black/40 px-4 sm:px-8 md:px-20 text-center text-white">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">Our Blogs</h1>

                </div>
            </div>
        </div>
    )
}

export default Blog_Banner
