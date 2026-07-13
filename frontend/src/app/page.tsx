import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ExistingResort from "@/components/sections/ExistingResort";
import Renovation from "@/components/sections/Renovation";
import LeaseProposal from "@/components/sections/LeaseProposal";
import DevelopmentVision from "@/components/sections/DevelopmentVision";
import Gallery from "@/components/sections/Gallery";
import Documents from "@/components/sections/Documents";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <ExistingResort />
      <Renovation />
      <LeaseProposal />
      <DevelopmentVision />
      <Gallery />
      <Documents />
      <Contact />
    </div>
  );
}
