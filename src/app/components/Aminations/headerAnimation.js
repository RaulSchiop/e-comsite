'use client'
import React from 'react';
import { motion } from 'framer-motion';

const HaderAnim = ({ children, className }) => (
  <motion.div
  
  initial={{opacity:0,y:-500}} animate={{opacity:1,y:0}}
    className={className} 
  >
    {children} 
  </motion.div>
);

export default HaderAnim;
