import React from 'react';

import NFT_banner from '../../pages/NFT/NFT_Banner';
import NFT_Barries from '../../pages/NFT/NFT_Barries';
import NFT_Barries_Cards from '../../pages/NFT/NFT_Barries_Cards';
import ContactUs from '../../pages/Home/ContactUs';

const Nft = () => {
  return (
    <div className="overflow-x-hidden w-full">
      <NFT_banner />
      <NFT_Barries />
      <NFT_Barries_Cards />
      <ContactUs />
    </div>
  );
};

export default Nft;
