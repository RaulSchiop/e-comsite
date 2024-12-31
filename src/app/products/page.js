'use client'
import Header from "../components/header/Hader"

import Image from "next/image"

import { useEffect, useState } from "react"
import AnimationOpacity from "../components/Aminations/opacityAnimation"
import { useRouter } from "next/navigation"
import Button from "../components/Aminations/Btn"
import Modal from "../components/modal/Modal"
import Footer from "../components/Footer/Footer"
import {motion} from "framer-motion"
import { useCartContext } from "../context/context"

export default function Products(){
  const router=useRouter()
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [products,setProducts]=useState([]);
    const [modalOpen,setModalOpen]=useState(false);
    
    const {cart,addToCart}=useCartContext();
console.log(cart)

    function handleModalClose(){
      setModalOpen(false);
    }

    function handleModalOpen(product){
      setModalOpen(true)
       setSelectedProduct(product);
    }

    function handleAddToCart(product){
      
      const user = JSON.parse(localStorage.getItem("UserLogIn"));
      if (user) {
        addToCart(product);
      } else {
        router.push("/logIn")
      }  
    }
          
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
        <div className="flex flex-col min-h-screen">
        <Header></Header>
        <AnimationOpacity>
        <div className="flex items-center justify-center flex-col p-8 flex-wrap">
      
            
              <ul className="grid grid-cols-1 gap-6  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">       
                   {products.map((prod,index)=>(
            
                <li key={prod.id||index} className="bg-black flex gap-3 flex-col justify-end rounded-xl p-4 transition-transform duration-300 hover:scale-110">
                     <div onClick={(e) => {
                       e.stopPropagation(); 
                      handleModalOpen(prod)}}>
                      
                   <div className="w-full h-64 relative">
                      <Image src={prod.images[0]} alt={prod.name} fill sizes="100%" className="object-cover"/>
                   </div>
                      <h2 className="text-Text">{prod.name}</h2>
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-accent">{prod.price} lei</p>
                        <Button onClick={(e)=>{ 
                          e.stopPropagation();
                          handleAddToCart(prod)}} className="bg-accent text-white py-1 px-2 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent">Add to Cart</Button>
                      </div>
               
                      </div>
                      
                </li>   
                
             

                   ))}
                   {modalOpen && selectedProduct &&(
                      <Modal show={modalOpen} onClose={handleModalClose} >
                      <div className=" w-full  flex justify-center flex-col items-center">
                          <h1 className="text-4xl font-semibold text-white mb-6">{selectedProduct.name}</h1>
                            <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full">
                              <div className="flex items-center justify-center w-full md:w-1/2">
                                <div className="relative w-full  rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                                  <Image src={selectedProduct.images[0]} alt="Desktop Product" width={800} height={800} />
                                </div>
                              </div>
                                    <div className="flex flex-col justify-center w-full md:w-1/2 ">
                                        <h2 className="text-accent text-3xl font-bold mb-4">{selectedProduct.price}$</h2>
                                            <div className=" text-secondary text-lg mb-6">
                                                <p className="text-white">Warranty {selectedProduct.warranty}</p>
                                                <p className="text-white">Free shipping</p>
                                            </div>
                                        <Button onClick={(e)=>{
                                           e.stopPropagation(); 
                                          handleAddToCart(selectedProduct)}} className="bg-accent text-white py-2 px-2 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent">Add to Cart</Button>
                                        
                                    </div>
                                    
                            </div>
                            <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-4 mt-6">
                                {Array.isArray(selectedProduct.features) ? (
                                  selectedProduct.features.map((feature, idx) => (
                                    <div key={idx} className="bg-gray-800 text-white rounded-lg p-4 shadow">
                                      {feature}
                                    </div>
                                  ))
                                ) : (
                                  <p className="text-gray-400">No features available</p>
                                )}
                            </div>

                            <div className="mt-6 bg-gray-800 text-white rounded-lg p-4 shadow">
                              {selectedProduct.description}
                            </div>
                          </div>
                      </Modal>)}

              </ul>
            
        </div>
        </AnimationOpacity>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:1}}>
          <Footer></Footer>
        </motion.div>
        </div>
    )
}