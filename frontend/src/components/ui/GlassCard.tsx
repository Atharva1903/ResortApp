"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
}

export default function GlassCard({ children, variant = 'dark', className = '', ...props }: GlassCardProps) {
  const baseClass = variant === 'dark' ? 'glass-dark' : 'glass';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`${baseClass} p-8 md:p-12 rounded-none border-l-2 border-l-[#D4AF37] ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
