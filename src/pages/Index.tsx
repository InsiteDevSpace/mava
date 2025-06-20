
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import WhyMavaSection from '@/components/WhyMavaSection';
import ImpactSection from '@/components/ImpactSection';
import PartnersSection from '@/components/PartnersSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import AnimatedReveal from '@/components/AnimatedReveal';

const Index = () => {
  useEffect(() => {
    document.title = "MAVA - Mobilizing for Agriculture Value Chains in Africa";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <WhyMavaSection />
      <ImpactSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
      <AnimatedReveal />
    </div>
  );
};

export default Index;
