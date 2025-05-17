import { useState } from 'react';
import { Search } from 'lucide-react';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex justify-center items-start mt-20 mb-8 px-4 bg-white">
      <div className="relative flex items-center border border-gray-300 rounded-sm px-3 py-2 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-sm overflow-hidden">
        <Search className="text-gray-500 mr-2 w-4 h-4" />

        {!inputValue && !isFocused && (
          <span className="absolute left-10 text-gray-400 text-sm pointer-events-none animate-dropIn">
            Search by technology, coin name or NFT
          </span>
        )}

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="outline-none w-full bg-transparent text-sm relative"
          aria-label="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;
