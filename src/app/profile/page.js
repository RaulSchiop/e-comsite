"use client"
import { useEffect, useState } from "react";
import Header from "../components/header/Hader";
import Footer from "../components/Footer/Footer";
import {motion} from "framer-motion"
export default function Profile(){

    const [orders,setOrders]=useState([]);

useEffect(()=>{
    async function fetchOrders(){
        const userId=localStorage.getItem("UserLogIn");
        const parseUserId=JSON.parse(userId);
     
     const data={
        userId:parseUserId.id
     }
    
        const response=await fetch("/api/orders",{
            method:"POST",
            headers:  {"Content-Type": "application/json"},
            body:JSON.stringify(data)
        })
    
        if(!response.ok){
            const errorData = await response.json();
            console.error("Failed to add order:", errorData.error);
            return;
        }
        const result=await response.json();
       
    
        setOrders(result)
       }

       fetchOrders();  

},[])

console.log(orders);

    return(
        <div className="flex flex-col min-h-screen" >
            <Header></Header>
            <div className="mt-10 mb-10 h-full w-full bg-black  p-10 flex justify-center items-center flex-col "> . 
                    <div className=" w-full ">
                        <h2 className="text-white text-2xl mb-4">Items that you order</h2>
                        
                        <ul className="grid lg:grid-cols-3 gap-6 mb-6 md:grid-cols-2 sm:grid-cols-1">
                            {orders.length==0 ? <p>no items ordered</p>:

                        orders.flat().map((order,key)=>(
                                <li key={key} className="p-4 bg-secondarytext rounded-lg">
                                <h1 className="text-white">name: {order.name}</h1>
                                <h2 className="text-white">quantity: {order.quantity}</h2>
                                <p className="text-white">total price: {order.price*order.quantity} $</p>
                            </li>
                            ))
                              
                            } 

                        </ul>
                        <h1 className="text-white">total spend: {orders.flat().reduce((sum,item)=>sum + (item.price * item.quantity),0)}$</h1>
                    </div>
            </div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:1}}>
                <Footer></Footer>
            </motion.div>
        </div>
    )


}