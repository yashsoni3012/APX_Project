import React from 'react'
import comparisonImg from '../../assets/comparisonImg.png'

const Comparison = () => {
    return (
        <div>
            <div className="relative">
                {/* Responsive Image */}
                <img
                    src={comparisonImg}
                    alt="About Banner"
                    className="w-full h-[300px] md:h-[500px] object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-center bg-black/20 px-4 sm:px-8 md:px-20 text-left text-white">
                    <h6 className="text-green-700 text-sm md:text-base mb-2">Comparison Table</h6>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">Problems & Solutions</h1>

                </div>
            </div>
        </div>
    )
}

export default Comparison
