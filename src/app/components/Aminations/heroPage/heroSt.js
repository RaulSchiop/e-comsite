'use client'
import React from 'react';
import { motion } from 'framer-motion';

const HeroSt = ({ children, className }) => (
  <motion.div
  
  initial={{opacity:0,x:-500}} animate={{opacity:1,x:0}}
    className={className} 
  >
    {children} 
  </motion.div>
);

export default HeroSt;
