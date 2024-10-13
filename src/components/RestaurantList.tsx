import React, { useState, useMemo } from 'react';
import RestaurantCard from './RestaurantCard';
import SearchBar from './SearchBar';

const RestaurantList = ({ restaurants, addToCart }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      const restaurantMatch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase());
      const menuMatch = restaurant.menu.some((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return restaurantMatch || menuMatch;
    });
  }, [restaurants, searchQuery]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Featured Restaurants</h2>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredRestaurants.length === 0 ? (
        <p className="text-gray-500 text-center">No restaurants or dishes found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantList;