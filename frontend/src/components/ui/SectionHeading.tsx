"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({ subtitle, title, description, centered = false, light = false }: SectionHeadingProps) {
  const alignmentClass = centered ? 'items-center text-center' : 'items-start text-left';
  const textColorClass = light ? 'text-white' : 'text-[#0B0E0C]';
  const descColorClass = light ? 'text-gray-400' : 'text-gray-600';
  
  return (
    <div className={`flex flex-col ${alignmentClass} mb-16 md:mb-24 max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center space-x-4 mb-6"
      >
        {!centered && <div className="w-12 h-[1px] bg-[#D4AF37]"></div>}
        <span className="text-[#D4AF37] font-inter tracking-[0.2em] text-xs uppercase font-medium">
          {subtitle}
        </span>
        {centered && <div className="w-12 h-[1px] bg-[#D4AF37] hidden md:block"></div>}
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`text-4xl md:text-5xl lg:text-6xl font-playfair ${textColorClass} leading-tight mb-8`}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`font-light text-lg ${descColorClass} leading-relaxed max-w-2xl`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
