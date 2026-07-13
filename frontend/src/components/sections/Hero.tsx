"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import Link from 'next/link';

interface HeroProps {
  videoUrl?: string | null;
  imageUrl?: string | null;
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Hero({ 
  videoUrl = null, 
  imageUrl = null,
  title = "Sustainable Luxury Experience",
  subtitle = "Dapoli Valleys Ecoresort",
  description = "A comprehensive proposal for developing a world-class eco-tourism destination while preserving natural heritage."
}: HeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // Fallbacks
  const defaultVideo = "/assets/hero-video.mp4"; // Ensure this exists or fails gracefully
  const defaultImage = "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop";

  const finalVideo = videoUrl || defaultVideo;
  const finalImage = imageUrl || defaultImage;

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B0E0C]">
      
      {/* Cinematic Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0B0E0C] z-10" />
        
        {/* Attempt to load video, fallback to image if it fails or isn't provided */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoadedData={() => setIsVideoLoaded(true)}
          poster={finalImage}
        >
          <source src={finalVideo} type="video/mp4" />
        </video>

        {/* Image Fallback while video loads or if video fails */}
        <div 
          className={`w-full h-full object-cover absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${!isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${finalImage})` }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <span className="text-[#D4AF37] font-inter tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block font-medium">
            {subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-medium text-white mb-8 leading-tight tracking-tight max-w-5xl mx-auto">
            Transforming Nature into a <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              {title}
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto"
        >
          <Link href="/lease-proposal" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full">
              Explore Proposal
            </Button>
          </Link>
          <Link href="/resort" className="w-full sm:w-auto">
            <Button variant="glass" size="lg" className="w-full">
              View Existing Resort
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Booking-style Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-12 pb-12"
      >
        <div className="max-w-screen-xl mx-auto glass-dark border-t border-white/10 p-6 flex flex-wrap justify-between items-center gap-6">
          {[
            { value: '20', label: 'Years Lease' },
            { value: 'Eco', label: 'Tourism' },
            { value: 'Wellness', label: 'Resort' },
            { value: '100+', label: 'Local Jobs' },
          ].map((stat, index) => (
            <div key={index} className="flex-1 min-w-[120px] text-center px-4 border-r border-white/10 last:border-0">
              <div className="text-2xl md:text-3xl font-playfair text-[#D4AF37] mb-2">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.2em] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
      >
        <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mb-4 writing-vertical-rl">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-[#D4AF37] absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
