import React, { useState } from 'react';
import { Star, Clock } from 'lucide-react';

const RestaurantCard = ({ restaurant, addToCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 mr-1" size={16} />
          <span>{restaurant.rating} ({restaurant.reviewCount} reviews)</span>
        </div>
        <div className="flex items-center mb-4">
          <Clock className="text-gray-500 mr-1" size={16} />
          <span>{restaurant.deliveryTime} min</span>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
        >
          {isMenuOpen ? 'Close Menu' : 'View Menu'}
        </button>
      </div>
      {isMenuOpen && (
        <div className="p-4 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-2">Menu</h4>
          <ul>
            {restaurant.menu.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white px-2 py-1 rounded-md text-sm hover:bg-green-600 transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;