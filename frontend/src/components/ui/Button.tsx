"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "relative overflow-hidden font-inter font-medium tracking-widest uppercase transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-[#143621] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0E0C] border border-[#143621]",
    secondary: "bg-[#D4AF37] text-[#0B0E0C] hover:bg-transparent hover:text-[#D4AF37] border border-[#D4AF37]",
    outline: "bg-transparent text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0E0C] border border-[#D4AF37]",
    glass: "glass-dark text-white hover:bg-white/10 border border-white/20",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-12 py-4 text-sm",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
