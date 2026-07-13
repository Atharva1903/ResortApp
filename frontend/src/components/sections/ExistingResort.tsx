"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiCoffee, FiMap, FiShield } from 'react-icons/fi';

const infrastructureData = [
  {
    id: 'buildings',
    title: 'Buildings & Rooms',
    icon: <FiHome size={28} />,
    status: 'Needs Repair',
    statusColor: 'text-red-500',
    progress: 40,
    desc: 'Existing 20 guest rooms, reception area, and staff quarters. Structural integrity is good, but interiors require a complete overhaul.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'clubhouse',
    title: 'Club House & Dining',
    icon: <FiCoffee size={28} />,
    status: 'Average',
    statusColor: 'text-yellow-600',
    progress: 60,
    desc: 'The central hub for guests. Requires modern kitchen equipment, new furniture, and expanded seating capacity.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'landscaping',
    title: 'Gardens & Roads',
    icon: <FiMap size={28} />,
    status: 'Good',
    statusColor: 'text-green-500',
    progress: 80,
    desc: 'Internal roads are paved. Landscaping is mature but requires targeted pruning and introduction of indigenous flora.',
    image: 'https://images.unsplash.com/photo-1584988753235-513ee6da86cc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'utilities',
    title: 'Utilities & Security',
    icon: <FiShield size={28} />,
    status: 'Needs Upgrade',
    statusColor: 'text-orange-500',
    progress: 30,
    desc: 'Water supply is stable. Electrical wiring needs total replacement. CCTV and boundary security must be modernized.',
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=800&auto=format&fit=crop'
  }
];

export default function ExistingResort() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section id="existing" className="py-24 bg-beige text-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-earthy mb-2 font-semibold">Infrastructure Assessment</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Existing Resort Condition</h3>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            A transparent engineering-style assessment of the current infrastructure, 
            identifying strengths and areas requiring immediate capital investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infrastructureData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layoutId={`card-container-${item.id}`}
              onClick={() => setSelectedId(item.id)}
              className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer border border-transparent hover:border-gold transition-all hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-beige rounded-xl flex items-center justify-center text-forest mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-500">Status</span>
                <span className={`text-sm font-bold ${item.statusColor}`}>{item.status}</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-forest h-2 rounded-full"
                ></motion.div>
              </div>
              
              <button className="text-earthy text-sm font-semibold uppercase tracking-wider flex items-center mt-4 group">
                View Details 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />
              
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row"
              >
                {(() => {
                  const data = infrastructureData.find(d => d.id === selectedId);
                  if (!data) return null;
                  return (
                    <>
                      <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="w-full md:w-1/2 p-8 relative">
                        <button 
                          onClick={() => setSelectedId(null)}
                          className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200"
                        >
                          ✕
                        </button>
                        <div className="w-12 h-12 bg-beige rounded-xl flex items-center justify-center text-forest mb-4">
                          {data.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-4 text-forest">{data.title}</h4>
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6 bg-gray-100 ${data.statusColor}`}>
                          Current Status: {data.status}
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {data.desc}
                        </p>
                      </div>
                    </>
                  )
                })()}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
