"use client";

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';

export default function InfrastructurePage() {
  const infraItems = [
    { title: "Power Supply", status: "Operational", desc: "Connected to main grid with 200kVA transformer. Backup generators required." },
    { title: "Water Source", status: "Needs Upgrade", desc: "Two functional borewells. Rainwater harvesting system needs to be implemented." },
    { title: "Road Access", status: "Excellent", desc: "Direct access from the state highway. Internal roads need paving." },
    { title: "Sewage Treatment", status: "Requires Overhaul", desc: "Current septic tanks are inadequate. STP installation is mandatory." }
  ];

  return (
    <main className="w-full bg-[#FFFDF7] pt-32 pb-24 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <SectionHeading 
          subtitle="Assessment" 
          title="Infrastructure Status" 
          description="A detailed engineering assessment of the property's current infrastructure and required upgrades for a 5-star rating."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {infraItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 border border-[#143621]/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-playfair text-[#143621]">{item.title}</h3>
                <span className={`text-xs uppercase tracking-widest px-3 py-1 ${item.status === 'Operational' || item.status === 'Excellent' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {item.status}
                </span>
              </div>
              <p className="text-gray-600 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
