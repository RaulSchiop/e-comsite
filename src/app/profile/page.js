"use client"
import { useState } from "react";
import Header from "../components/header/Hader";
import Footer from "../components/Footer/Footer";
import {motion} from "framer-motion"
export default function Profile(){

    const [orders,setOrders]=useState([]);

    return(
        <div className="flex flex-col min-h-screen" >
            <Header></Header>
            <div className="mt-10 mb-10 h-full w-full bg-black  p-10 flex justify-center items-center flex-col ">
                <h1 className="text-accent text-4xl mb-5">Schiop Raul</h1>
                    <div className=" w-full ">
                        <h2 className="text-white text-2xl mb-4">Orders</h2>
                        
                        <ul className="grid lg:grid-cols-3 gap-6 mb-6 md:grid-cols-2 sm:grid-cols-1">
                            {/* {orders.length==0 ? <p>no orders</p>:
                                <li></li>
                            } */}
                            <li className="p-4 bg-secondarytext rounded-lg">
                                <h1 className="text-white">order Id: asd1231231232312dsdq</h1>
                                <h1 className="text-white">dekstop gamaing</h1>
                                <h2 className="text-white">quantity: 2</h2>
                                <p className="text-white">total price: 5000 $</p>
                            </li>
                            <li className="p-4 bg-secondarytext rounded-lg">
                                <h1 className="text-white">order Id: asd1231231232312dsdq</h1>
                                <h1 className="text-white">dekstop gamaing</h1>
                                <h2 className="text-white">quantity: 2</h2>
                                <p className="text-white">total price: 5000 $</p>
                            </li>
                            <li className="p-4 bg-secondarytext rounded-lg">
                                <h1 className="text-white"> order Id: asd1231231232312dsdq</h1>
                                <h1 className="text-white">dekstop gamaing</h1>
                                <h2 className="text-white">quantity: 2</h2>
                                <p className="text-white">total price: 5000 $</p>
                            </li>
                            <li className="p-4 bg-secondarytext rounded-lg">
                                <h1 className="text-white">order Id: asd1231231232312dsdq</h1>
                                <h1 className="text-white">dekstop gamaing</h1>
                                <h2 className="text-white">quantity: 2</h2>
                                <p className="text-white">total price: 5000 $</p>
                            </li>
                            <li className="p-4 bg-secondarytext rounded-lg">
                                <h1 className="text-white">order Id: asd1231231232312dsdq</h1>
                                <h1 className="text-white">dekstop gamaing</h1>
                                <h2 className="text-white">quantity: 2</h2>
                                <p className="text-white">total price: 5000 $</p>
                            </li>
                            <li className="p-4 bg-secondarytext rounded-lg">
                                <h1 className="text-white">order Id: asd1231231232312dsdq</h1>
                                <h1 className="text-white">dekstop gamaing</h1>
                                <h2 className="text-white">quantity: 2</h2>
                                <p className="text-white">total price: 5000 $</p>
                            </li>


                        </ul>
                    </div>
            </div>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:1}}>
                <Footer></Footer>
            </motion.div>
        </div>
    )


}