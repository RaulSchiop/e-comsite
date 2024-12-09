
"use client"

import { createContext, useContext, useState } from "react";


export const cartContext = createContext(
  {  cart: [],
    addToCart: () => {},
    deleteFromCart: () => {}}
);

export function useCartContext(){ return useContext(cartContext)};

export function CartProvider ({children}) {
    const [cart, setCart] = useState([]);

    

    function addToCart(product) {
        setCart((prevCart) => {
            const existentCartProductIndex = prevCart.findIndex((item) => item._id === product._id);
         if (existentCartProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existentCartProductIndex] ={
                ...updatedCart[existentCartProductIndex],
                quantity: updatedCart[existentCartProductIndex].quantity + 1
                };
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    }
    
    
    function deleteFromCart(productId){
        setCart((prevCart) => {
            const existentCartproductIndex = prevCart.findIndex((item) => item._id === productId);
            if (existentCartproductIndex !== -1) {
                const updatedCart = prevCart.map((item, index) => {
                    if (index === existentCartproductIndex) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item; 
                }).filter((item) => item.quantity > 0); 
                return updatedCart;
            }
            return prevCart; 
        });
    }

    return (
        <cartContext.Provider value={{ cart ,addToCart ,deleteFromCart}}>
          {children}
        </cartContext.Provider>
      );

}