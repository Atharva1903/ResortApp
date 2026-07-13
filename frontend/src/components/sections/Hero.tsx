"use client";

import React, { useState, useRef } from 'react';
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
  
  // Parallax & Fade constraints on scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 350]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Fallbacks
  const defaultVideo = "/assets/hero-video.mp4"; 
  const defaultImage = "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop";

  const finalVideo = videoUrl || defaultVideo;
  const finalImage = imageUrl || defaultImage;

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B0E0C]"
    >
      {/* Cinematic Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        {/* Deep Ambient Overlays with Multi-Stop Bottom Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] z-10" />
        
        {/* Smooth Transition Video Element */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={finalImage}
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-out ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={finalVideo} type="video/mp4" />
        </video>

        {/* Fallback Image (Visible while video loads or if video fails) */}
        {!isVideoLoaded && (
          <div 
            className="w-full h-full absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
            style={{ backgroundImage: `url(${finalImage})` }}
          />
        )}
      </motion.div>

      {/* 
        PREMIUM SECTION BLENDER: 
        This absolute layout layer builds a wide, smooth interpolation path 
        between the visual assets above and the page content below.
        Completely synced to the home page's #0B0E0C color matrix.
      */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[45vh] pointer-events-none z-10 bg-gradient-to-b from-transparent via-[#0B0E0C]/60 to-[#0B0E0C]"
      />

      {/* Main Typography & Actions Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center pb-24 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full"
        >
          <span className="text-[#D4AF37] font-sans tracking-[0.4em] uppercase text-xs mb-6 block font-semibold sm:text-sm">
            {subtitle}
          </span>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-400/80 mb-8 leading-[1.15] tracking-tight max-w-5xl mx-auto">
            {title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-zinc-300/90 max-w-2xl mx-auto font-light leading-relaxed mb-10 block balance">
            {description}
          </p>
        </motion.div>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
        >
          <Link href="/lease-proposal" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:px-8 tracking-wide transition-transform active:scale-[0.98]">
              Explore Proposal
            </Button>
          </Link>
          <Link href="/resort" className="w-full sm:w-auto">
            <Button variant="glass" size="lg" className="w-full sm:px-8 tracking-wide transition-transform active:scale-[0.98]">
              View Existing Resort
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Floating Modern Dashboard Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-12 pb-8 sm:pb-12"
      >
        <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-xl border border-white/[0.06] rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-2 divide-x-0 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] shadow-2xl shadow-black/80">
          {[
            { value: '20', label: 'Years Lease' },
            { value: 'Eco', label: 'Tourism' },
            { value: 'Wellness', label: 'Resort' },
            { value: '100+', label: 'Local Jobs' },
          ].map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center text-center px-4 transition-transform duration-300 hover:scale-105"
            >
              <span className="text-2xl md:text-3xl font-serif font-light text-[#D4AF37] tracking-wide mb-1">
                {stat.value}
              </span>
              <span className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sleek Minimalist Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-36 right-12 z-20 hidden lg:flex flex-col items-center gap-3"
      >
        <span className="text-[9px] text-zinc-400 uppercase tracking-[0.4em] [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden rounded-full">
          <motion.div 
            animate={{ y: [-32, 64] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="w-full h-8 bg-[#D4AF37]/80 absolute top-0 left-0"
          />
        </div>
      </motion.div>
    </section>
  );
}