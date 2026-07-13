import Hero from "@/components/sections/Hero";
import Link from "next/link";
import FallbackImage from "@/components/ui/FallbackImage";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Home() {
  return (
    // Explicitly locking the main background color
    <div className="w-full bg-[#0B0E0C]">
      <Hero />
      
      {/* 
        Introduction Section: 
        The negative mt-[-4rem] pulls the content slightly into the Hero's fade path,
        creating an organic overlap where text gracefully meets the cinematic header.
      */}
      <section className="relative z-30 py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto mt-[-4rem] sm:mt-[-6rem]">
        <SectionHeading 
          subtitle="Welcome" 
          title="A New Era of Eco-Tourism" 
          description="Dapoli Valleys Ecoresort is a visionary project aimed at transforming a pristine natural landscape into a world-class sustainable luxury destination. We invite forward-thinking investors to join us in this unique opportunity."
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <div className="group relative h-96 overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end transition-colors hover:border-[#D4AF37]/50">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <FallbackImage 
              src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=800&auto=format&fit=crop" 
              fallbackSrc="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=800&auto=format&fit=crop"
              alt="About" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="relative z-20">
              <h3 className="text-2xl font-playfair text-white mb-3">Our Vision</h3>
              <p className="text-sm text-gray-300 font-light mb-6 line-clamp-2">Discover the story behind Dapoli Valleys and our commitment to sustainable luxury.</p>
              <Link href="/about" className="text-[#D4AF37] uppercase tracking-widest text-xs font-medium group-hover:text-white transition-colors flex items-center">
                Explore <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="group relative h-96 overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end transition-colors hover:border-[#D4AF37]/50">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <FallbackImage 
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop" 
              fallbackSrc="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop"
              alt="Resort" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="relative z-20">
              <h3 className="text-2xl font-playfair text-white mb-3">Existing Resort</h3>
              <p className="text-sm text-gray-300 font-light mb-6 line-clamp-2">Review the current state and infrastructure of the property.</p>
              <Link href="/resort" className="text-[#D4AF37] uppercase tracking-widest text-xs font-medium group-hover:text-white transition-colors flex items-center">
                View <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="group relative h-96 overflow-hidden bg-white/5 border border-white/10 p-8 flex flex-col justify-end transition-colors hover:border-[#D4AF37]/50 lg:col-span-1 md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <FallbackImage 
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop" 
              fallbackSrc="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
              alt="Proposal" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="relative z-20">
              <h3 className="text-2xl font-playfair text-white mb-3">Lease Proposal</h3>
              <p className="text-sm text-gray-300 font-light mb-6 line-clamp-2">Detailed financial projections, lease terms, and ROI analysis.</p>
              <Link href="/lease-proposal" className="text-[#D4AF37] uppercase tracking-widest text-xs font-medium group-hover:text-white transition-colors flex items-center">
                Review <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}