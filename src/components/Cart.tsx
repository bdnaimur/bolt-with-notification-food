import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, X } from 'lucide-react';

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <ShoppingBag className="mr-2" />
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span>{item.name}</span>
                <div className="flex items-center">
                  <span className="mr-2">${item.price.toFixed(2)}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                  >
                    <X size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-lg">${total.toFixed(2)}</span>
            </div>
            <Link
              to="/checkout"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors duration-200 text-center block"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;