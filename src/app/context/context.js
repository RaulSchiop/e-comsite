
"use client"

import { createContext, useContext, useState } from "react";


export const cartContext = createContext(
  {  cart: [],
    addToCart: () => {},
    deleteFromCart: () => {}}
);

export function useCartContext(){ return useContext(cartContext)};

export function CartProvider ({children}) {
    const [cart,setCart]=useState([]);

    function addToCart(product){

        setCart((prevCart)=>{
            const existentCartproductIndex=prevCart.findIndex((item)=>item.id===product.id)
           if(existentCartproductIndex!==-1){
            const updatedCart=[...prevCart];
            updatedCart[existentCartproductIndex].quantity+=1;
                return updatedCart;
           }else{
            return [...prevCart,{...product,quantity:1}]
           }

        });

    }
    function deleteFromCart(productId){
        setCart((prevCart)=>{
            const existentCartproductIndex=prevCart.findIndex((item)=>item.id===productId)
            if(existentCartproductIndex!==-1){
                const updatedCart=[...prevCart];
                if(updatedCart[existentCartproductIndex].quantity>1){
                    updatedCart[existentCartproductIndex].quantity-=1;
                }else{
                    updatedCart.splice(existentCartproductIndex,1);  
                }
                return updatedCart;
            }
            return prevCart;
        })
    }

    return (
        <cartContext.Provider value={{ cart ,addToCart ,deleteFromCart}}>
          {children}
        </cartContext.Provider>
      );

}