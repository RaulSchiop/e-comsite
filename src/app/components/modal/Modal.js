'use client'
import React from 'react';
import { AnimatePresence, delay, motion} from "framer-motion"

const Modal = ({ show, onClose, children }) => {


  return (
  <AnimatePresence>
    {show  && (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration:0.7}} 
        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50  " onClick={onClose}>
      <motion.div
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{type:"spring", duration: 0.5 }}
        exit={{ y: 500, opacity: 0 }}
      className=" relative bg-secondary w-2/3 h-2/3 rounded-xl p-20 overflow-y-auto"  onClick={(e) => e.stopPropagation()} >
        <motion.button 
        initial={{x:500,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{type:"spring" ,duration:1}}
        className="absolute w-10 h-10 top-2 right-5 text-4xl text-white p-2 rounded-full hover:text-red-600 " onClick={onClose}>
          &times;
        </motion.button>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
    )}
    
    </AnimatePresence>  
  );
};

export default Modal;