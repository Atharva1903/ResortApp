import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0B0E0C] text-gray-400 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
      
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        
        <div className="col-span-1 md:col-span-12 lg:col-span-4">
          <Link href="/">
            <span className="text-3xl font-playfair font-semibold text-white tracking-widest uppercase mb-6 block">
              Dapoli Valleys<span className="text-[#D4AF37]">.</span>
            </span>
          </Link>
          <p className="font-light leading-relaxed mb-8 max-w-md text-gray-400">
            Transforming nature into a sustainable luxury experience. A premium eco-resort destination setting new benchmarks in hospitality and environmental stewardship.
          </p>
          <div className="flex space-x-6">
            {/* Social Icons Placeholder */}
            {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
              <a key={social} href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-widest">
                {social}
              </a>
            ))}
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-4 lg:col-span-2">
          <h4 className="text-white font-playfair font-semibold mb-6 uppercase tracking-widest text-sm">Explore</h4>
          <ul className="space-y-4 text-sm tracking-wide">
            <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors">About Us</Link></li>
            <li><Link href="/resort" className="hover:text-[#D4AF37] transition-colors">Existing Resort</Link></li>
            <li><Link href="/development-vision" className="hover:text-[#D4AF37] transition-colors">Development Vision</Link></li>
            <li><Link href="/gallery" className="hover:text-[#D4AF37] transition-colors">Gallery</Link></li>
          </ul>
        </div>
        
        <div className="col-span-1 md:col-span-4 lg:col-span-2">
          <h4 className="text-white font-playfair font-semibold mb-6 uppercase tracking-widest text-sm">Investment</h4>
          <ul className="space-y-4 text-sm tracking-wide">
            <li><Link href="/infrastructure" className="hover:text-[#D4AF37] transition-colors">Infrastructure</Link></li>
            <li><Link href="/lease-proposal" className="hover:text-[#D4AF37] transition-colors">Lease Proposal</Link></li>
            <li><Link href="/documents" className="hover:text-[#D4AF37] transition-colors">Documents</Link></li>
            <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-4 lg:col-span-4">
          <h4 className="text-white font-playfair font-semibold mb-6 uppercase tracking-widest text-sm">Newsletter</h4>
          <p className="font-light text-sm text-gray-400 mb-6">
            Subscribe to receive updates on our development progress and investment opportunities.
          </p>
          <form className="flex border-b border-white/20 focus-within:border-[#D4AF37] transition-colors pb-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-transparent border-none outline-none w-full text-white placeholder-gray-600 text-sm font-light"
            />
            <button type="submit" className="text-[#D4AF37] hover:text-white uppercase tracking-widest text-xs font-medium ml-4 transition-colors">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider text-gray-600">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Dapoli Valleys Ecoresort Pvt. Ltd. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
          <Link href="/admin/login" className="hover:text-[#D4AF37] transition-colors">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
