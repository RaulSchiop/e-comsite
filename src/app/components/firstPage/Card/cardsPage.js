"use client";
import Image from "next/image";
import Modal from "../../modal/Modal";
import Button from "../../Aminations/Btn";
import { useEffect, useState } from "react";
import { useCartContext } from "@/app/context/context";
import { useRouter } from "next/navigation";

export default function Card() {
   const router = useRouter();
   const { addToCart } = useCartContext();
   const [selectedProduct, setSelectedProduct] = useState(null);
   const [products, setProducts] = useState([]);
   const [sliceNumber, setSliceNumber] = useState(3);
   const [modalOpen, setModalOpen] = useState(false);

   function handleModalClose() {
      setModalOpen(false);
   }

   function handleModalOpen(product) {
      setModalOpen(true);
      setSelectedProduct(product);
   }

   function handleAddToCart(product) {
      const user = JSON.parse(localStorage.getItem("UserLogIn"));
      if (user) {
         addToCart(product);
      } else {
         router.push("/logIn");
      }
   }

   function moreProducts() {
      setSliceNumber(sliceNumber + 3);
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

   return (
      <div className="flex items-center justify-center flex-col p-8">
         <h1 className=" text-accent text-3xl lg:text-5xl font-bold mb-10">
            New Arrivals
         </h1>
         <ul className="grid lg:grid-cols-3 gap-6 mb-6 md:grid-cols-3 ">
            {products.slice(0, sliceNumber).map((prod, index) => (
               <li
                  key={prod.id || index}
                  className="bg-black rounded-xl p-4 flex flex-col justify-between h-full"
               >
                  <div
                     className="flex flex-col justify-between h-full w-full"
                     onClick={() => handleModalOpen(prod)}
                  >
                     <Image
                        src={prod.images[0]}
                        alt={prod.name}
                        width={400}
                        height={400}
                     />
                     <div>
                        <h2 className="text-Text">{prod.name}</h2>
                        <div className="flex justify-between items-center mt-4">
                           <p className="text-accent">{prod.price}</p>
                           <Button
                              onClick={(e) => {
                                 e.stopPropagation();
                                 handleAddToCart(prod);
                              }}
                              className="bg-accent text-white py-1 px-2 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent"
                           >
                              Add to Cart
                           </Button>
                        </div>
                     </div>
                  </div>
               </li>
            ))}

            {modalOpen && selectedProduct && (
               <Modal show={modalOpen} onClose={handleModalClose}>
                  <div className=" w-full p-0 flex justify-center flex-col items-center ">
                     <h1 className="text-4xl font-semibold text-white mb-6">
                        {selectedProduct.name}
                     </h1>
                     <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full">
                        <div className="flex items-center justify-center w-full md:w-1/2">
                           <div className="relative w-full  rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
                              <Image
                                 src={selectedProduct.images[0]}
                                 alt="Desktop Product"
                                 width={800}
                                 height={800}
                              />
                           </div>
                        </div>
                        <div className="flex flex-col justify-center w-full md:w-1/2 sm:w-full ">
                           <h2 className="text-accent text-3xl font-bold mb-4">
                              {selectedProduct.price}$
                           </h2>
                           <div className=" text-secondary text-lg mb-6">
                              <p className="text-white">
                                 Warranty {selectedProduct.warranty}
                              </p>
                              <p className="text-white">Free shipping</p>
                           </div>
                           <Button
                              onClick={(e) => {
                                 e.stopPropagation();
                                 handleAddToCart(selectedProduct);
                              }}
                              className="bg-accent text-white py-2 px-2 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent"
                           >
                              Add to Cart
                           </Button>
                        </div>
                     </div>
                     <div className="grid lg:grid-cols-3 lg:grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-4 mt-6">
                        {Array.isArray(selectedProduct.features) ? (
                           selectedProduct.features.map((feature, idx) => (
                              <div
                                 key={idx}
                                 className="bg-gray-800 text-white rounded-lg p-4 shadow"
                              >
                                 {feature}
                              </div>
                           ))
                        ) : (
                           <p className="text-gray-400">
                              No features available
                           </p>
                        )}
                     </div>

                     <div className="mt-6 bg-gray-800 text-white rounded-lg p-4 shadow">
                        {selectedProduct.description}
                     </div>
                  </div>
               </Modal>
            )}
         </ul>
         <Button
            onClick={moreProducts}
            className="bg-accent text-white py-2 px-4 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent"
         >
            See More
         </Button>
      </div>
   );
}
