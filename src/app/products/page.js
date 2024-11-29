'use client'
import Header from "../components/header/Hader"
import MotherBoard from "../../../public/motherBoard.png"
import Image from "next/image"

import { useEffect, useState } from "react"

export default function Products(){

    const [products,setProducts]=useState([]);
    useEffect(() => {
        async function fetchProducts() {
          try {
            const response = await fetch("/api/products");
            const data = await response.json();
            setProducts(data);
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
        <div className="flex items-center justify-center flex-col p-8 flex-wrap">
      
            
                <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">       
                   {products.map((prod,index)=>(

                    <li key={prod.id||index} className="bg-black flex gap-3 flex-col justify-end rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                    <Image src={prod.images[0]} height={400} width={400} alt={prod.name}></Image>
                    <h2 className="text-Text">{prod.name}</h2>
                    <p className="text-accent">{prod.price} lei</p>
                    </li>   
                   ))}
                   

                </ul>
            
        </div>
        
        </>
    )
}