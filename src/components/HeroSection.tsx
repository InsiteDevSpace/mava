
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video or Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-mava-blue/70 to-mava-blue/40 z-10"></div>
        <div className="w-full h-full">
          <img 
            src="/lovable-uploads/4a02efe4-3f2f-42b6-8969-ec46b86a6033.png" 
            alt="Agricultural Field with Farmers" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4 leading-tight animate-fade-in">
            Transforming African Agriculture: <span className="text-mava-yellow">Innovating</span> for Sustainability, Food Security, and Growth
          </h1>
          
          <div className="p-4 rounded-lg mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-2">
              MAVA is an ambitious joint initiative by IFC (World Bank Group) and OCP Group, designed to accelerate Africa's agricultural transformation through innovation, inclusion, and investment.
            </p>
            <p className="text-sm md:text-base italic opacity-80">
              Powered by INNOVX
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg" 
              className="bg-mava-green hover:bg-mava-green/90 text-white"
              onClick={() => document.getElementById('vision')?.scrollIntoView()}
            >
              Discover Our Vision
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="text-white h-8 w-8" />
      </div>
    </section>
  );
};

export default HeroSection;
