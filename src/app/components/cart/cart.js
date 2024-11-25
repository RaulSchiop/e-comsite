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
              <Image className="hidden sm:hidden md:block text" src={CartLogo} alt="cart" /> Cart
        </Button>
        
        <Modal show={modalIsOpen} onClose={handleModalClose}>
        <ul>
            <li>adadadad</li>
            <li>adadadad</li>
            <li>adadadad</li>
            <li>adadadad</li>
            <li>adadadad</li>
        </ul>
        </Modal>
    </div>
    )

}