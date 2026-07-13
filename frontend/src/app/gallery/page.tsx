"use client";

import React, { useState, useEffect } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

interface GalleryItem {
  _id: string;
  url: string;
  category: string;
  title: string;
}

export default function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fallbackImages: GalleryItem[] = [
    { _id: '1', url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop', category: 'Resort', title: 'Luxury Suite' },
    { _id: '2', url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop', category: 'Nature', title: 'Surrounding Forest' },
    { _id: '3', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop', category: 'Events', title: 'Wedding Setup' },
    { _id: '4', url: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=800&auto=format&fit=crop', category: 'Nature', title: 'Local Beach' },
    { _id: '5', url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800&auto=format&fit=crop', category: 'Resort', title: 'Pool Area' },
    { _id: '6', url: 'https://images.unsplash.com/photo-1478147424095-2315c8e317b9?q=80&w=800&auto=format&fit=crop', category: 'Events', title: 'Corporate Retreat' },
  ];

  useEffect(() => {
    // Fetch from backend
    fetch('/api/gallery')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setItems(data);
        } else {
          setItems(fallbackImages);
        }
      })
      .catch(() => {
        setItems(fallbackImages);
      })
      .finally(() => setLoading(false));
  }, []);

  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];
  const filteredItems = filter === 'All' ? items : items.filter(img => img.category === filter);

  return (
    <main className="w-full bg-[#0B0E0C] text-white pt-32 pb-24 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <SectionHeading 
          subtitle="Visual Tour" 
          title="Curated Gallery" 
          description="Explore the breathtaking natural beauty and envisioned luxury of Dapoli Valleys."
          centered
          light
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-[#D4AF37] text-[#0B0E0C]' 
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredItems.map(item => (
              <motion.div
                key={item._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-sm overflow-hidden cursor-pointer group break-inside-avoid"
                onClick={() => setSelectedImage(item.url)}
              >
                <img src={item.url} alt={item.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-playfair text-xl">{item.title}</span>
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
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
            >
              <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors text-4xl font-light z-50">&times;</button>
              <img src={selectedImage} alt="Fullscreen" className="max-w-full max-h-full object-contain" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </main>
  );
}
