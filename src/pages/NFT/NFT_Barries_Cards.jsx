import React from 'react';
import blueberryImg from '../../assets/blueberry.png';
import strawberryImg from '../../assets/strawberry.png';
import raspberryImg from '../../assets/raspberry.png';
import blackberryImg from '../../assets/blackberry.png';
import goldenberryImg from '../../assets/golden_berry.png';
import mulberryImg from '../../assets/mulberry.png';

const NFT_Barries_Cards = ({ isImageOnLeft = true, imageUrl, title }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full relative overflow-visible">

            {/* Left Column - Image or Content */}
            {isImageOnLeft ? (
                <div className="relative z-10 h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-r-3xl">
                    <img
                        src={imageUrl}
                        alt="NFT Visual"
                        className="w-full h-full object-cover rounded-3xl"
                    />
                </div>
            ) : (
                <div className="bg-black text-white p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center h-[400px] md:h-[500px] pl-6 sm:pl-8 md:pl-12 z-0 rounded-l-3xl w-full md:w-[110%]">
                    <h3 className="text-xs sm:text-sm font-semibold mb-4 sm:mb-6 text-left text-green-600">AI FUTURE</h3>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-left">
                        {title}
                    </h2>
                    <p className="text-sm sm:text-base text-left max-w-md italic mb-6 sm:mb-8">
                        Data-driven farming uses AI and analytics to optimize crop production, reduce waste, and enhance sustainability—transforming smart agricultural practices into measurable, real-world financial returns.
                    </p>
                    <div className="flex justify-left w-full">
                        <button className="bg-green-600 text-white px-30 sm:px-30 md:px-30 py-2 rounded-md w-full sm:w-auto hover:bg-green-700 transition">
                            Buy Now
                        </button>
                    </div>
                </div>
            )}

            {/* Right Column - Green Background or Image */}
            {isImageOnLeft ? (
                <div className="bg-green-600 text-white w-full md:min-w-[105%] -ml-4 sm:-ml-8 md:-ml-[5%] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center h-[400px] md:h-[500px] pl-6 sm:pl-8 md:pl-12 z-0 rounded-r-3xl">
                    <h3 className="text-xs sm:text-sm font-semibold mb-4 sm:mb-6 text-left text-black">AI FUTURE</h3>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-left">
                        {title}
                    </h2>
                    <p className="text-sm sm:text-base text-left max-w-md italic mb-6 sm:mb-8">
                        Data-driven farming uses AI and analytics to optimize crop production, reduce waste, and enhance sustainability—transforming smart agricultural practices into measurable, real-world financial returns.
                    </p>
                    <div className="flex justify-left w-full">
                        <button className="bg-black text-white px-30 sm:px-30 md:px-30 py-2 rounded-md w-full sm:w-auto hover:bg-gray-900 transition">
                            Buy No
                        </button>
                    </div>
                </div>
            ) : (
                <div className="relative z-10 h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-r-3xl">
                    <img
                        src={imageUrl}
                        alt="NFT Visual"
                        className="w-full h-full object-cover rounded-3xl"
                    />
                </div>
            )}
        </div>
    );
};

const NFT_Barries_Cards_List = () => {
    const images = [
        blueberryImg,
        strawberryImg,
        raspberryImg,
        blackberryImg,
        goldenberryImg,
        mulberryImg,
    ];

    const titles = [
        "Blueberries",
        "Strawberries",
        "Raspberries",
        "Blackberries",
        "Golden Berries",
        "Mulberries",
    ];

    return (
        <div className="space-y-8">
            {images.map((img, i) => (
                <div key={i} className="mb-8">
                    <NFT_Barries_Cards
                        isImageOnLeft={i % 2 === 0}
                        imageUrl={img}
                        title={titles[i]} // Pass the title for each image
                    />
                </div>
            ))}
        </div>
    );
};

export default NFT_Barries_Cards_List;
