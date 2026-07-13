"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Existing Resort', href: '/resort' },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'Lease Proposal', href: '/lease-proposal' },
  { name: 'Vision', href: '/development-vision' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Documents', href: '/documents' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? 'bg-[#0B0E0C]/90 backdrop-blur-md shadow-2xl py-4 border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group">
              <span className="text-2xl md:text-3xl font-playfair font-semibold text-white tracking-widest uppercase">
                Dapoli Valleys<span className="text-[#D4AF37] group-hover:text-white transition-colors duration-300">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 ${
                    isActive ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-[1px] bg-[#D4AF37]"
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Contact / Action Button */}
          <div className="hidden md:flex xl:hidden space-x-6 items-center">
             <Link href="/contact" className="text-xs uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 px-6 py-2 rounded-full hover:bg-[#D4AF37] hover:text-[#0B0E0C] transition-all duration-300">
               Enquire
             </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37] focus:outline-none transition-colors"
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="xl:hidden fixed top-[72px] left-0 w-full bg-[#0B0E0C]/98 backdrop-blur-xl border-t border-white/5 overflow-y-auto"
          >
            <div className="px-6 py-12 flex flex-col space-y-6">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-2xl font-playfair tracking-widest ${
                        isActive ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="pt-12 mt-12 border-t border-white/10"
              >
                <Link href="/admin/login" className="text-sm text-gray-500 uppercase tracking-widest hover:text-white">Admin Login</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
