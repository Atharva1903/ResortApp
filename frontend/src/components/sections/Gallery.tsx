"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Resort', 'Nature', 'Events'];

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop', category: 'Resort' },
  { id: 2, src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop', category: 'Nature' },
  { id: 3, src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop', category: 'Events' },
  { id: 4, src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=800&auto=format&fit=crop', category: 'Nature' },
  { id: 5, src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop', category: 'Resort' },
  { id: 6, src: 'https://images.unsplash.com/photo-1478147424095-2315c8e317b9?q=80&w=800&auto=format&fit=crop', category: 'Events' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section className="py-24 bg-white text-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-widest text-earthy mb-2 font-semibold">Visual Tour</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h3>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat ? 'bg-forest text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map(img => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(img.src)}
              >
                <img src={img.src} alt="Gallery item" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium tracking-wider uppercase text-sm border border-white px-4 py-2 rounded">View</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            >
              <button className="absolute top-8 right-8 text-white text-4xl hover:text-gold">&times;</button>
              <img src={selectedImage} alt="Fullscreen" className="max-w-full max-h-full rounded-lg shadow-2xl" />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
