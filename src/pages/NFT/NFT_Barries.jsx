import React from 'react';

const NFT_Barries = () => {
    return (    
        <div className="px- sm:px-6 lg:px-20 py-10 bg-white">
            <div className="max-w-7xl mx-auto mb-10 text-center">
                <h6 className="text-green-600 text-sm md:text-base">NFT</h6>
                <h3 className="text-black text-2xl md:text-3xl font-bold mt-2">
                    OUR NFT BERRIES
                </h3>
                <p className="mx-auto text-justify w-full sm:w-[80%] md:w-[60%] lg:w-[40%] text-sm sm:text-base md:text-lg text-black mt-4 italic">
                    Each NFT represents a batch of berries harvested from an APX vertical farm.
                    These NFTs are dynamic, updating with real-time harvest data, ownership changes,
                    and carbon footprint stats.
                </p>
            </div>
        </div>
    );
};

export default NFT_Barries;
