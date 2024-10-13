import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search restaurants or dishes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:border-orange-500"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;