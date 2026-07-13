"use client";

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

export default function DevelopmentVisionPage() {
  const visions = [
    { title: "Luxury A-Frame Cottages", img: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=1000&auto=format&fit=crop" },
    { title: "Ayurvedic Spa & Wellness", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop" },
    { title: "Infinity Forest Pool", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop" },
    { title: "Organic Farm-to-Table", img: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <main className="w-full bg-[#FFFDF7] pt-32 pb-24 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <SectionHeading 
          subtitle="The Future" 
          title="Development Vision" 
          description="Envisioning a premium sanctuary where modern luxury seamlessly integrates with the surrounding forest."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {visions.map((vision, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-[400px] lg:h-[500px] overflow-hidden bg-gray-900"
            >
              <img 
                src={vision.img} 
                alt={vision.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-playfair text-white mb-2">{vision.title}</h3>
                <div className="w-12 h-[2px] bg-[#D4AF37] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
