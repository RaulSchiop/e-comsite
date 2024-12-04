'use client'
import Image from "next/image"

import Button from "../../Aminations/Btn"
import { useEffect,useState } from "react"
import Link from "next/link"
export default function Card(){

    const [products,setProducts]=useState([]);
    const [sliceNumber, setSliceNumber] = useState(3); 

  function moreProducts() {
    setSliceNumber(sliceNumber + 3);
  }

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


    return(
        <div className="flex items-center justify-center flex-col p-8">
      
                <h1 className=" text-accent text-3xl lg:text-5xl font-bold mb-10">New Arrivals</h1>
                <ul className="grid grid-cols-3 gap-6 mb-6 ">
                    {products.slice(0, sliceNumber).map((prod,index)=>(
                    <li key={prod.id || index} className="bg-black rounded-xl p-4 flex flex-col justify-between h-full">
                        <Link href={`/products/${prod._id}`}>
                        <Image src={prod.images[0]} alt={prod.name} width={400} height={400} />
                        <div>
                            <h2 className="text-Text">{prod.name}</h2>
                            <p className="text-accent">{prod.price}</p>
                         </div>
                         </Link>
                     </li>
                    ))}
                   
            
                    
                </ul>
            <Button onClick={moreProducts} className="bg-accent text-white py-2 px-4 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent">See More</Button>
        </div>
    
    )

}