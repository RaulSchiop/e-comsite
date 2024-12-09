'use client'

import Button from "../Aminations/Btn";
import Image from "next/image"
import CartLogo from "../../../../public/cart.svg";
import { useState } from "react";
import Modal from "../modal/Modal";

export default function Cart(){

    const [modalIsOpen,setModalIsOpen]=useState(false);

    function handleModalOpen(){
        setModalIsOpen(true);
    }
    function handleModalClose(){
        setModalIsOpen(false);
    }

    return(
    <div>
        
        <Button onClick={handleModalOpen} className="flex gap-2 bg-accent p-2 rounded-md items-center justify-center text-Text ">
              <Image height={30} width={30} src={CartLogo} alt="cart" />
        </Button>

        
        <Modal show={modalIsOpen} onClose={handleModalClose}>

           

        <ul className="flex flex-col gap-y-4">
            <li className="bg-black flex items-center justify-between px-4 py-1 rounded-lg">
                <h1 >dekstop gameing pc</h1>
                <p>5000 $</p>
                <div>
                    <Button>+</Button>
                    <p>1</p>
                    <Button>-</Button>
                </div>
            </li>
            <li className="bg-black flex items-center justify-between px-4 py-2 rounded-lg">
                <h1 >dekstop gameing pc</h1>
                <p>5000 $</p>
                <div>
                    <Button>+</Button>
                    <p>1</p>
                    <Button>-</Button>
                </div>
            </li>
            <li className="bg-black flex items-center justify-between px-4 py-2 rounded-lg">
                <h1 >dekstop gameing pc</h1>
                <p>5000 $</p>
                <div>
                    <Button>+</Button>
                    <p>1</p>
                    <Button>-</Button>
                </div>
            </li>
            <li className="bg-black flex items-center justify-between px-4 py-2 rounded-lg">
                <h1 >dekstop gameing pc</h1>
                <p>5000 $</p>
                <div>
                    <Button>+</Button>
                    <p>1</p>
                    <Button>-</Button>
                </div>
            </li>
        </ul>
        <Button className="bg-accent text-white mt-10 py-2 px-2 rounded-md text-center hover:bg-white hover:text-accent border-2 border-accent">Submit order</Button>
                              
        </Modal>
    </div>
    )

}