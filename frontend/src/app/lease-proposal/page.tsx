"use client";

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Timeline from '@/components/ui/Timeline';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function LeaseProposalPage() {
  const timelineItems = [
    { year: "Phase 1 (Months 1-6)", title: "Site Preparation & Approvals", description: "Securing all necessary environmental clearances, master planning, and initial site clearing. Upgrading basic infrastructure (water, electricity access)." },
    { year: "Phase 2 (Months 7-12)", title: "Core Infrastructure & Cottages", description: "Construction of the main reception, restaurant, and the first 10 luxury A-frame cottages. Implementation of STP and solar arrays." },
    { year: "Phase 3 (Months 13-18)", title: "Wellness & Amenities", description: "Development of the Spa, Yoga pavilion, and Infinity pool. Landscaping and organic farm setup." },
    { year: "Phase 4 (Months 19-24)", title: "Soft Launch & Operations", description: "Staff training, soft launch, and commencement of marketing campaigns. Full operational handover." }
  ];

  return (
    <main className="w-full bg-[#0B0E0C] text-white pt-32 pb-24 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <SectionHeading 
          subtitle="Investment" 
          title="Lease Proposal & ROI" 
          description="A structured, transparent investment model designed for mutual growth and sustainable returns."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <GlassCard variant="dark">
            <h4 className="text-xl font-playfair mb-2 text-gray-300">Total Investment</h4>
            <p className="text-4xl font-light text-[#D4AF37]">₹ 5.5 Cr</p>
          </GlassCard>
          <GlassCard variant="dark">
            <h4 className="text-xl font-playfair mb-2 text-gray-300">Expected ROI</h4>
            <p className="text-4xl font-light text-[#D4AF37]">18 - 22%</p>
          </GlassCard>
          <GlassCard variant="dark">
            <h4 className="text-xl font-playfair mb-2 text-gray-300">Payback Period</h4>
            <p className="text-4xl font-light text-[#D4AF37]">4.5 Years</p>
          </GlassCard>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl font-playfair mb-12 text-center text-white">Development Timeline</h3>
          <Timeline items={timelineItems} />
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="primary" size="lg">Download Detailed Financials (PDF)</Button>
        </div>
      </div>
    </main>
  );
}
