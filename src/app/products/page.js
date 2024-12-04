'use client'
import Header from "../components/header/Hader"

import Image from "next/image"

import { useEffect, useState } from "react"
import AnimationOpacity from "../components/Aminations/opacityAnimation"
import Link from "next/link"
import Button from "../components/Aminations/Btn"

export default function Products(){

    const [products,setProducts]=useState([]);
    useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        console.log(data); 
        
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Expected an array, but got:", data);
          setProducts([]);  
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
}, []);

  
    console.log(products);

    return(
        <>
        <Header></Header>
        <AnimationOpacity>
        <div className="flex items-center justify-center flex-col p-8 flex-wrap">
      
            
              <ul className="grid grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">       
                   {products.map((prod,index)=>(
            
                <li key={prod.id||index} className="bg-black flex gap-3 flex-col justify-end rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                     <div>
                      <Link href={`/products/${prod._id}`}>
                   <div className="w-full h-64 relative">
                      <Image src={prod.images[0]} alt={prod.name} fill sizes="100%" className="object-cover"/>
                   </div>
                      <h2 className="text-Text">{prod.name}</h2>
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-accent">{prod.price} lei</p>
                        <Button className="bg-accent text-white py-1 px-2 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent">Add to Cart</Button>
                      </div>
                      </Link>
                      </div>
                </li>   
                
                   ))}
                   

              </ul>
            
        </div>
        </AnimationOpacity>
        </>
    )
}