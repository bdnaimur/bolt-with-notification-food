import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import Cart from './components/Cart';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Chat from './components/Chat';
import { mockRestaurants } from './mockData';
import io from 'socket.io-client';

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000'); // Replace with your Socket.IO server URL
    setSocket(newSocket);

    newSocket.on('chat message', (msg) => {
      if (!isChatOpen) {
        setUnreadMessages((prev) => prev + 1);
      }
    });

    const timer = setTimeout(() => {
      setRestaurants(mockRestaurants);
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      newSocket.close();
    };
  }, [isChatOpen]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setUnreadMessages(0);
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header 
          cartItemCount={cart.length} 
          toggleChat={toggleChat} 
          unreadMessages={unreadMessages}
        />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                loading ? (
                  <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <RestaurantList restaurants={restaurants} addToCart={addToCart} />
                    </div>
                    <div className="md:col-span-1">
                      <Cart cart={cart} removeFromCart={removeFromCart} />
                    </div>
                  </div>
                )
              }
            />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
          </Routes>
        </main>
        {isChatOpen && (
          <div className="fixed bottom-4 right-4 w-96">
            <Chat socket={socket} setUnreadMessages={setUnreadMessages} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;