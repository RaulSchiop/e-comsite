'use client'

import Button from "../Aminations/Btn";
import Image from "next/image"
import CartLogo from "../../../../public/cart.svg";
import { useState } from "react";
import Modal from "../modal/Modal";
import { useCartContext } from "@/app/context/context";


export default function Cart(){

    const [modalIsOpen,setModalIsOpen]=useState(false);
    

   const {cart, addToCart , deleteFromCart}= useCartContext()

  

    function handleModalOpen(){
        setModalIsOpen(true);
    }
    function handleModalClose(){
        setModalIsOpen(false);
    }

    function handleAddToCart(product){
        addToCart(product);

    }

    function handleDeleteFromCart(productId){
        deleteFromCart(productId);
        
    }

    async function fetchToOrder(){
        const userId=localStorage.getItem("UserLogIn")
        const parseId=JSON.parse(userId)

        console.log(parseId.id);
       

        const dataToOrder={
            cart:cart,
            userId:parseId.id
        }

        const response=await fetch("/api/addorder",{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body:JSON.stringify(dataToOrder)
        })

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Failed to add order:", errorData.error);
            return;
          }
        const result = await response.json();
        console.log("Order added successfully:", result);
        setModalIsOpen(false);
    }

    function handleAddToOrder(){

        fetchToOrder()

    }

    return(
    <div>
        
        <Button onClick={handleModalOpen} className="flex gap-2 bg-accent p-2 rounded-md items-center justify-center text-Text ">
              <Image height={30} width={30} src={CartLogo} alt="cart" />
        </Button>

        
        <Modal show={modalIsOpen} onClose={handleModalClose}>

           

        <ul className="flex flex-col gap-y-4">


        {cart.length === 0 ? <p className="text-accent text-3xl">empty cart</p>:
        cart.map((product,index)=>(
            <li key={product.id || index} className="bg-black flex items-center justify-between px-4 py-1 rounded-lg">



               <h1 >{product.name}</h1>
                <p>{product.price*product.quantity}$</p>
                <div>
                    <Button onClick={()=>handleAddToCart(product)}>+</Button>
                    <p>{product.quantity}</p>
                    <Button onClick={()=>handleDeleteFromCart(product._id)}>-</Button>
                </div>
                
            </li>
        ))
            }
           
        </ul>
        <div className="flex items-center justify-between">
            <Button onClick={handleAddToOrder} className="bg-accent text-white mt-10 py-2 px-2 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent">Submit order</Button>
            {cart.length===0?<></>:(
            <h1> {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)}$</h1>
            )
            }
        </div>                 
        </Modal>
    </div>
    )

}