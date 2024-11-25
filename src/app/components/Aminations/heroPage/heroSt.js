'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HeroDr = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 500 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      className={className}
      
    >
      {children}
    </motion.div>
  );
};

export default HeroDr;
