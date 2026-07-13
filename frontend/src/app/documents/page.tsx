"use client";

import React, { useState, useEffect } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { motion } from 'framer-motion';
import { FiDownload, FiFileText, FiMap, FiShield, FiSearch } from 'react-icons/fi';

interface Document {
  _id: string;
  title: string;
  type: string;
  url: string;
  size: string;
}

export default function DocumentsPage() {
  const [docs, setDocs] = useState<Document[]>([]);
  const [search, setSearch] = useState('');

  const fallbackDocs: Document[] = [
    { _id: '1', title: "Detailed Lease Proposal", type: "PDF", url: "#", size: "2.4 MB" },
    { _id: '2', title: "Property Site Map", type: "PDF", url: "#", size: "5.1 MB" },
    { _id: '3', title: "Legal Clearances & NOCs", type: "ZIP", url: "#", size: "12.8 MB" },
    { _id: '4', title: "Renovation Budget Est.", type: "XLSX", url: "#", size: "1.1 MB" }
  ];

  useEffect(() => {
    fetch('/api/documents')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) setDocs(data);
        else setDocs(fallbackDocs);
      })
      .catch(() => setDocs(fallbackDocs));
  }, []);

  const getIcon = (type: string) => {
    if (type.toUpperCase() === 'PDF') return <FiFileText size={24} />;
    if (type.toUpperCase() === 'ZIP') return <FiShield size={24} />;
    return <FiMap size={24} />;
  };

  const filteredDocs = docs.filter(doc => doc.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="w-full bg-[#FFFDF7] pt-32 pb-24 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <SectionHeading 
          subtitle="Resources" 
          title="Document Center" 
          description="Access our comprehensive business plans, architectural layouts, and verified legal clearances."
          centered
        />

        <div className="max-w-2xl mx-auto relative mb-16">
          <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search documents..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-16 pr-6 py-4 bg-white border border-gray-200 focus:border-[#D4AF37] outline-none transition-colors rounded-sm text-gray-800"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDocs.map((doc, index) => (
            <motion.div
              key={doc._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 p-6 flex items-center justify-between hover:border-[#D4AF37]/50 hover:shadow-lg transition-all group"
            >
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-[#143621]/5 rounded-full flex items-center justify-center text-[#143621] group-hover:bg-[#143621] group-hover:text-[#D4AF37] transition-colors">
                  {getIcon(doc.type)}
                </div>
                <div>
                  <h4 className="font-playfair text-xl text-[#143621] mb-1">{doc.title}</h4>
                  <p className="text-xs font-inter text-gray-500 tracking-widest uppercase">{doc.type} • {doc.size}</p>
                </div>
              </div>
              <a href={doc.url} download className="text-gray-400 hover:text-[#D4AF37] p-4 transition-colors">
                <FiDownload size={24} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
