"use client";

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function ResortPage() {
  return (
    <main className="w-full bg-[#0B0E0C] text-white pt-32 pb-24 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <SectionHeading 
          subtitle="Current State" 
          title="The Existing Resort" 
          description="An overview of the current property, its structures, and the immense potential it holds for transformation."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Main Image */}
          <div className="lg:col-span-2 relative h-[500px]">
             <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1000&auto=format&fit=crop" alt="Resort Overview" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E0C] to-transparent"></div>
          </div>
          
          <div className="flex flex-col space-y-6 justify-center">
            <GlassCard variant="dark">
              <h4 className="text-xl font-playfair mb-2 text-[#D4AF37]">Total Area</h4>
              <p className="text-3xl font-light">12 Acres</p>
            </GlassCard>
            <GlassCard variant="dark">
              <h4 className="text-xl font-playfair mb-2 text-[#D4AF37]">Current Structures</h4>
              <p className="text-3xl font-light">15 Cottages</p>
            </GlassCard>
            <GlassCard variant="dark">
              <h4 className="text-xl font-playfair mb-2 text-[#D4AF37]">Location</h4>
              <p className="text-xl font-light text-gray-300">Dapoli, Maharashtra</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  );
}
