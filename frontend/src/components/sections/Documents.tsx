"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiFileText, FiMap, FiShield } from 'react-icons/fi';

const documents = [
  { title: "Detailed Lease Proposal", type: "PDF", size: "2.4 MB", icon: <FiFileText size={24} /> },
  { title: "Property Site Map", type: "PDF", size: "5.1 MB", icon: <FiMap size={24} /> },
  { title: "Legal Clearances & NOCs", type: "ZIP", size: "12.8 MB", icon: <FiShield size={24} /> },
  { title: "Renovation Budget Est.", type: "XLSX", size: "1.1 MB", icon: <FiFileText size={24} /> }
];

export default function Documents() {
  return (
    <section className="py-24 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-gold mb-2 font-semibold">Resources & Downloads</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Legal & Project Documents</h3>
          <div className="w-24 h-1 bg-beige mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Access our comprehensive business plan, architectural layouts, and verified legal clearances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 flex items-center justify-between hover:bg-white/10 transition-colors group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-gold">
                  {doc.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{doc.title}</h4>
                  <p className="text-sm text-gray-400">{doc.type} • {doc.size}</p>
                </div>
              </div>
              <button className="text-white hover:text-gold p-3 bg-white/5 rounded-full group-hover:bg-gold group-hover:text-forest transition-all">
                <FiDownload size={20} />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
