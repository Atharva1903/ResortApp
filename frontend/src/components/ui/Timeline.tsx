"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

function TimelineItem({ year, title, description, index }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col md:flex-row w-full mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full md:w-1/2 flex flex-col justify-center ${isEven ? 'md:pl-16 lg:pl-24 items-start' : 'md:pr-16 lg:pr-24 items-start md:items-end text-left md:text-right'}`}
      >
        <span className="text-[#D4AF37] font-inter tracking-widest text-sm uppercase mb-2">{year}</span>
        <h3 className="text-2xl md:text-3xl font-playfair text-white mb-4">{title}</h3>
        <p className="text-gray-400 font-light leading-relaxed">{description}</p>
      </motion.div>
      
      {/* Center dot for desktop */}
      <div className="hidden md:flex flex-col items-center justify-center w-8 relative">
        <div className="w-[1px] h-full bg-white/10 absolute top-0 bottom-0 z-0"></div>
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-4 h-4 rounded-full bg-[#D4AF37] z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
        />
      </div>
      
      {/* Spacer for offset */}
      <div className="hidden md:block w-full md:w-1/2"></div>
    </div>
  );
}

interface TimelineProps {
  items: Array<Omit<TimelineItemProps, 'index'>>;
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative py-12">
      <div className="md:hidden absolute left-4 top-0 bottom-0 w-[1px] bg-white/10"></div>
      
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12 md:pl-0">
            <div className="md:hidden absolute left-3 top-6 w-2 h-2 rounded-full bg-[#D4AF37] transform -translate-x-1/2"></div>
            <TimelineItem {...item} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
