"use client";

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <main className="w-full bg-[#0B0E0C] text-white pt-32 pb-0 min-h-screen flex flex-col">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex-grow w-full">
        <SectionHeading 
          subtitle="Get in Touch" 
          title="Contact Us" 
          description="We welcome inquiries from investors, partners, and media."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <div className="flex flex-col space-y-12">
            <div className="flex items-start space-x-6">
              <div className="text-[#D4AF37] mt-1"><FiMapPin size={28} /></div>
              <div>
                <h4 className="font-playfair text-2xl mb-2">Location</h4>
                <p className="text-gray-400 font-light leading-relaxed">Dapoli Valleys Ecoresort<br/>State Highway 4, Dapoli<br/>Ratnagiri District, Maharashtra 415712</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="text-[#D4AF37] mt-1"><FiMail size={28} /></div>
              <div>
                <h4 className="font-playfair text-2xl mb-2">Email</h4>
                <p className="text-gray-400 font-light">invest@dapolivalleys.com</p>
                <p className="text-gray-400 font-light">info@dapolivalleys.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="text-[#D4AF37] mt-1"><FiPhone size={28} /></div>
              <div>
                <h4 className="font-playfair text-2xl mb-2">Phone</h4>
                <p className="text-gray-400 font-light">+91 98765 43210</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-dark p-8 md:p-12">
            <h3 className="font-playfair text-3xl mb-8">Send an Enquiry</h3>
            <form className="flex flex-col space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" className="bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:border-[#D4AF37] outline-none transition-colors" />
                <input type="text" placeholder="Last Name" className="bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:border-[#D4AF37] outline-none transition-colors" />
              </div>
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:border-[#D4AF37] outline-none transition-colors" />
              <textarea placeholder="Message" rows={5} className="bg-white/5 border border-white/10 p-4 text-white placeholder-gray-500 focus:border-[#D4AF37] outline-none transition-colors resize-none"></textarea>
              <Button variant="primary" size="lg" className="self-start">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Map */}
      <div className="w-full h-96 bg-gray-800 grayscale opacity-80 mt-auto relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121759.43126435645!2d73.1098!3d17.7656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa77b9496e7efb%3A0x6b8bc2138a0a99ff!2sDapoli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(80%) contrast(80%)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
}
