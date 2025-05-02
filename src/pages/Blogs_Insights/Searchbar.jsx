import { Search } from 'lucide-react';

function SearchBar() {
  return (
    <div className="flex justify-center items-start mt-20 mb-8 px-4 bg-white">
      <div className="flex items-center border border-gray-300 rounded-sm px-3 py-2 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-sm">
        <Search className="text-gray-500 mr-2 w-4 h-4" />
        <input
          type="text"
          placeholder="Search by technology, coin name or NFT"
          className="outline-none w-full bg-transparent text-sm"
        />
      </div>
    </div>
  );
}

export default SearchBar;
