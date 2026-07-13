"use client";

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="w-full bg-[#FFFDF7] pt-32 pb-24 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <SectionHeading 
          subtitle="Our Story" 
          title="Rooted in Nature, Designed for Luxury" 
          description="Dapoli Valleys Ecoresort was born out of a profound respect for the natural environment of the Konkan coast. We aim to prove that premium hospitality and ecological sustainability can coexist harmoniously."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1505852903341-fc8d3db10436?q=80&w=1000&auto=format&fit=crop" 
              alt="Nature" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 border border-[#143621] -z-10 hidden md:block"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3 className="text-3xl font-playfair text-[#143621] mb-4">Our Vision</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                To create a sanctuary where guests can immerse themselves in the untamed beauty of nature without sacrificing the comforts of luxury living. We envision a resort that regenerates the environment rather than depleting it.
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl font-playfair text-[#143621] mb-4">Our Mission</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                To provide a sustainable, world-class eco-tourism destination that supports local communities, preserves biodiversity, and delivers an unforgettable experience for our guests and strong returns for our investors.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#143621]/10">
              <div>
                <div className="text-4xl font-playfair text-[#D4AF37] mb-2">
                  <AnimatedCounter value={50} suffix="+" />
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Acres of Forest</div>
              </div>
              <div>
                <div className="text-4xl font-playfair text-[#D4AF37] mb-2">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Eco-Friendly</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
