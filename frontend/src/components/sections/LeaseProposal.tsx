"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiFileText, FiDollarSign, FiRepeat, FiCornerRightUp } from 'react-icons/fi';

const leaseTerms = [
  {
    id: 1,
    title: "Lease Tenure",
    icon: <FiClock size={24} />,
    desc: "A guaranteed 20-year initial lease period ensuring sufficient runway for heavy capital expenditure and ROI stabilization.",
  },
  {
    id: 2,
    title: "Security Deposit",
    icon: <FiFileText size={24} />,
    desc: "Refundable security deposit equivalent to 6 months of the initial rent, held in an interest-bearing escrow account.",
  },
  {
    id: 3,
    title: "Rent Structure",
    icon: <FiDollarSign size={24} />,
    desc: "Fixed base rent + revenue share model. Rent escalates by 15% every 3 years to account for inflation.",
  },
  {
    id: 4,
    title: "Renewal Terms",
    icon: <FiRepeat size={24} />,
    desc: "Right of first refusal for an additional 10-year term upon mutual agreement of revised commercial terms.",
  },
  {
    id: 5,
    title: "Transfer Rights",
    icon: <FiCornerRightUp size={24} />,
    desc: "Ability to sub-lease or transfer operational management to global hospitality brands (e.g., Aman, Four Seasons) subject to approval.",
  }
];

export default function LeaseProposal() {
  return (
    <section id="proposal" className="py-24 bg-white text-forest relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-beige/30 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-earthy mb-2 font-semibold">Commercial Terms</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Lease Proposal</h3>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light leading-relaxed">
            We propose a mutually beneficial, long-term partnership that provides security for heavy infrastructural investment while ensuring sustained returns for the trust.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {leaseTerms.map((term, index) => (
              <motion.div 
                key={term.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Icon */}
                <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-forest text-gold rounded-full border-4 border-white flex items-center justify-center transform -translate-x-1/2 z-10 shadow-lg">
                  {term.icon}
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:border-gold transition-colors">
                    <h4 className="text-xl font-bold mb-3">{term.title}</h4>
                    <p className="text-gray-600 leading-relaxed font-light">{term.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
