"use client";

import React from 'react';
import { motion } from 'framer-motion';

const visions = [
  {
    title: "Luxury A-frame Tents",
    category: "Accommodation",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800&auto=format&fit=crop",
    desc: "Introducing 15 exclusive, ultra-luxury A-frame tents overlooking the valley, equipped with private plunge pools."
  },
  {
    title: "Holistic Wellness Centre",
    category: "Amenities",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop",
    desc: "A world-class spa offering Ayurvedic treatments, yoga pavilions, and meditation zones immersed in nature."
  },
  {
    title: "Farm-to-Table Restaurant",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    desc: "An organic restaurant sourcing 70% of ingredients from our in-house greenhouse and local farmers."
  },
  {
    title: "Adventure & Nature Trails",
    category: "Activities",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
    desc: "Curated bird-watching paths, zip-lining, and guided night safaris focusing on conservation awareness."
  }
];

export default function DevelopmentVision() {
  return (
    <section id="development" className="py-24 bg-beige text-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-earthy mb-2 font-semibold">Future Roadmap</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Development Vision</h3>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Beyond renovation, we aim to transform Dapoli Valleys into an internationally recognized luxury eco-tourism destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </span>
                <h4 className="text-white text-2xl font-bold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
