"use client";
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
    setToastMessage('Item added to cart!');
    setIsToastVisible(true);

    // Automatically hide the toast after 3 seconds
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000); // Change this duration as needed
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, toastMessage, isToastVisible }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
