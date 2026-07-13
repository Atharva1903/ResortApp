import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0d120f] text-gray-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div className="col-span-1 md:col-span-2">
          <span className="text-2xl font-bold text-white tracking-wider mb-4 block">
            Dapoli Valleys<span className="text-gold">.</span>
          </span>
          <p className="font-light leading-relaxed max-w-sm mb-6">
            Transforming nature into a sustainable luxury experience. Setting new benchmarks in eco-tourism and hospitality.
          </p>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Dapoli Valleys Ecoresort Pvt. Ltd.
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="#proposal" className="hover:text-gold transition-colors">Lease Proposal</a></li>
            <li><a href="#development" className="hover:text-gold transition-colors">Development Vision</a></li>
            <li><a href="/admin" className="hover:text-gold transition-colors">Admin Login</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Environmental Compliance</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
