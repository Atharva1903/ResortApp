"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiFeather, FiSun, FiAward } from 'react-icons/fi';

export default function About() {
  const goals = [
    { icon: <FiTarget size={24} />, title: "Our Mission", desc: "To transform Dapoli Valleys into a premier eco-tourism hub, prioritizing environmental conservation alongside luxury hospitality." },
    { icon: <FiFeather size={24} />, title: "Our Vision", desc: "Setting a national benchmark for sustainable development where nature and modern amenities coexist in perfect harmony." },
    { icon: <FiSun size={24} />, title: "Sustainability", desc: "Zero carbon footprint goal by 2030, utilizing solar energy, water harvesting, and organic farming." },
    { icon: <FiAward size={24} />, title: "Excellence", desc: "Delivering an unparalleled Aman-style luxury experience while empowering the local community." },
  ];

  return (
    <section id="about" className="py-24 bg-white text-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-earthy mb-2 font-semibold">About The Company</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Dapoli Valleys Ecoresort Pvt. Ltd.</h3>
          <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-light leading-relaxed">
            Founded with a passion for nature and a commitment to sustainable development, we bring decades of 
            experience in hospitality, real estate, and eco-tourism to breathe new life into the Dapoli Valleys.
          </p>
        </motion.div>

        {/* Founder & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1551000965-4f40f0037a9f?q=80&w=1000&auto=format&fit=crop" 
              alt="Nature trail in resort" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h4 className="text-2xl font-bold mb-2">Guided by Experience</h4>
              <p className="text-gray-200 font-light">
                Our leadership team has over 20 years of collective experience managing premium resorts, navigating local compliances, and executing large-scale renovations.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {goals.map((goal, index) => (
              <div key={index} className="bg-beige/30 p-6 rounded-xl border border-beige hover:border-gold transition-colors duration-300">
                <div className="w-12 h-12 bg-forest text-gold rounded-full flex items-center justify-center mb-4">
                  {goal.icon}
                </div>
                <h5 className="text-xl font-bold mb-3">{goal.title}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
