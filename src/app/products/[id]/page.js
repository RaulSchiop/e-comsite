"use client"
import Header from "@/app/components/header/Hader";
import Image from "next/image";
import motherBoard from "../../../../public/dekstop.png"; // Example static image
import Button from "@/app/components/Aminations/Btn";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion"
import Footer from "@/app/components/Footer/Footer";

export default function ProductDetail() {
  const [descriptionDropDown,setDescriptionDropDown]=useState(false);
  const [specsDropDown,setSpecsDropDown]=useState(false);

  function HandleDescriptionDropDown(){
      setDescriptionDropDown(!descriptionDropDown);
  }

  function HandleSpecsDropDown(){
      setSpecsDropDown(!specsDropDown);
  }


  return (
    <div className="bg-white min-h-screen">
      <Header></Header>
      <div className="mt-10 w-full p-8 flex justify-center flex-col items-center">
       <h1 className="text-4xl font-semibold text-gray-900 mb-6">Product 1</h1>
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl w-full">
          <div className="flex items-center justify-center w-full md:w-1/2">
            <div className="relative w-full  rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
              <Image src={motherBoard} alt="Desktop Product" width={800} height={800} />
            </div>
          </div>
                <div className="flex flex-col justify-center w-full md:w-1/2 ">
                    <h2 className="text-accent text-3xl font-bold mb-4">5000 lei</h2>
                        <div className=" text-secondary text-lg mb-6">
                            <p>Garantie 3 ani</p>
                            <p>Transport gratuit</p>
                        </div>
                    <Button className="bg-accent text-white py-2 px-2 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent">Add to Cart</Button>
                </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
      <div  className="w-full flex flex-col">
          <Button onClick={HandleDescriptionDropDown} className="w-[100%] bg-accent text-white py-2 px-2  text-center hover:bg-white hover:text-accent border-2 border-accent">Description</Button>
          {descriptionDropDown && <motion.div 
                  layout 
                  initial={{opacity:0}} 
                  animate={{opacity:1}} 
                  transition={{duration:2}} 
                  exit={{opacity:0}} className="text-center p-4">
            <p>asdasda sd as da sd  asd  as d as d asdasdasdasd as das d as d</p>
          </motion.div>}
          <Button onClick={HandleSpecsDropDown} className="w-[100%] bg-accent text-white py-2 px-2  text-center hover:bg-white hover:text-accent border-2 border-accent">Specification</Button>
          {specsDropDown &&  <motion.div 
                  initial={{opacity:0}} 
                  animate={{opacity:1}} 
                  transition={{duration:1}} 
                  exit={{opacity:0}} className="flex items-center justify-center">
            <div className="grid grid-cols-3 grid-rows-2  gap-x-10 gap-y-4 p-4">
                <h1>Processor: Intel i5 10th Gen</h1>
                <h1>GPU: NVIDIA GTX 1660 Super</h1>
                <h1>RAM: 8GB DDR4</h1>
                <h1>Storage: 512GB SSD</h1>
                <h1>Display Support: 1080p</h1>
                <h1>Build: high qulaity</h1>
            </div>
          </motion.div> }
      </div>
      </AnimatePresence>
      <Footer></Footer>
    </div>
  );
}
