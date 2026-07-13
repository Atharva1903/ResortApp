"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden" id="home">
      {/* Background Image / Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop" 
          alt="Dapoli Valleys Resort" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gold tracking-widest uppercase font-semibold text-sm mb-4 block">
            Dapoli Valleys Ecoresort
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transforming Nature into a <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
              Sustainable Luxury Experience
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light mb-10">
            A comprehensive proposal for developing a world-class eco-tourism destination while preserving natural heritage.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#proposal"
            className="px-8 py-4 bg-forest text-white rounded-md hover:bg-forest/80 transition-all font-medium text-lg uppercase tracking-wide border border-forest hover:border-white/20"
          >
            Explore Proposal
          </a>
          <a
            href="/proposal.pdf"
            className="px-8 py-4 glass text-white rounded-md hover:bg-white hover:text-forest transition-all font-medium text-lg uppercase tracking-wide"
          >
            Download PDF
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { value: '20', label: 'Years Lease' },
            { value: 'Eco', label: 'Tourism' },
            { value: 'Wellness', label: 'Resort' },
            { value: '100+', label: 'Local Jobs' },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-lg p-4 text-center">
              <div className="text-2xl md:text-4xl font-bold text-gold mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-200 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
