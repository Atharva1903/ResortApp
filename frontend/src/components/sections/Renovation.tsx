"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const renovations = [
  {
    id: 1,
    title: "Luxury Washrooms",
    before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", // Old bathroom
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop", // Modern luxury bathroom
    desc: "Complete overhaul of plumbing, adding premium fixtures, stone finishes, and skylights for natural illumination."
  },
  {
    id: 2,
    title: "Eco-Machan Reconstruction",
    before: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=800&auto=format&fit=crop", // Old wood structure
    after: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop", // Modern resort structure
    desc: "Rebuilding traditional machans using sustainable bamboo and tensile fabric, featuring panoramic glass facades."
  }
];

export default function Renovation() {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ('clientX' in e) ? e.clientX : e.touches[0].clientX;
    const position = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleDragEnd = () => {
    window.removeEventListener('mousemove', handleDrag);
    window.removeEventListener('touchmove', handleDrag);
    window.removeEventListener('mouseup', handleDragEnd);
    window.removeEventListener('touchend', handleDragEnd);
  };

  const startDrag = () => {
    window.addEventListener('mousemove', handleDrag);
    window.addEventListener('touchmove', handleDrag);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
  };

  return (
    <section className="py-24 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gold mb-2 font-semibold">Vision vs Reality</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Renovation Requirements</h3>
          <div className="w-24 h-1 bg-beige mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Drag the slider to see our transformative vision for the existing infrastructure.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {renovations.map((reno, index) => (
            <button
              key={reno.id}
              onClick={() => {
                setActiveTab(index);
                setSliderPosition(50);
              }}
              className={`px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-gold text-forest shadow-lg' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {reno.title}
            </button>
          ))}
        </div>

        {/* Slider Container */}
        <div className="max-w-4xl mx-auto bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
          <div 
            ref={containerRef}
            className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden cursor-ew-resize select-none"
            onMouseDown={startDrag}
            onTouchStart={startDrag}
          >
            {/* After Image (Background) */}
            <img 
              src={renovations[activeTab].after} 
              alt="After Renovation" 
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute top-4 right-4 bg-forest/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-white/20 pointer-events-none">
              Proposed
            </div>

            {/* Before Image (Foreground overlay) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={renovations[activeTab].before} 
                alt="Before Renovation" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none min-w-max"
                style={{ width: containerRef.current?.offsetWidth || '100vw' }}
              />
              <div className="absolute top-4 left-4 bg-earthy/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-white/20 pointer-events-none z-10">
                Existing
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-forest">
                <span className="text-xs font-bold leading-none select-none">↔</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center px-4">
            <h4 className="text-2xl font-bold mb-2 text-gold">{renovations[activeTab].title}</h4>
            <p className="text-gray-300 font-light max-w-2xl mx-auto">{renovations[activeTab].desc}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
