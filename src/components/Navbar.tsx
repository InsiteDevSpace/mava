import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-1' : 'bg-transparent py-2'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/lovable-uploads/a998129c-24cb-42f4-a139-90af909723c0.png" alt="MAVA Logo" className="h-20" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#vision" className="text-mava-blue hover:text-mava-lightblue font-medium transition-colors">
            Vision
          </a>
          <a href="#why-mava" className="text-mava-blue hover:text-mava-lightblue font-medium transition-colors">
            Why MAVA
          </a>
          <a href="#impact" className="text-mava-blue hover:text-mava-lightblue font-medium transition-colors">
            Impact
          </a>
          <a href="#partners" className="text-mava-blue hover:text-mava-lightblue font-medium transition-colors">
            Partners
          </a>
          <Button className="bg-mava-blue hover:bg-mava-blue/90 text-white" onClick={() => document.getElementById('contact')?.scrollIntoView()}>
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-mava-blue p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md animate-fade-in">
          <div className="flex flex-col py-4 px-6">
            <a href="#vision" className="py-3 text-mava-blue hover:text-mava-lightblue font-medium" onClick={() => setIsMenuOpen(false)}>
              Vision
            </a>
            <a href="#why-mava" className="py-3 text-mava-blue hover:text-mava-lightblue font-medium" onClick={() => setIsMenuOpen(false)}>
              Why MAVA
            </a>
            <a href="#impact" className="py-3 text-mava-blue hover:text-mava-lightblue font-medium" onClick={() => setIsMenuOpen(false)}>
              Impact
            </a>
            <a href="#partners" className="py-3 text-mava-blue hover:text-mava-lightblue font-medium" onClick={() => setIsMenuOpen(false)}>
              Partners
            </a>
            <Button className="mt-4 bg-mava-blue hover:bg-mava-blue/90 text-white" onClick={() => {
          document.getElementById('contact')?.scrollIntoView();
          setIsMenuOpen(false);
        }}>
              Contact Us
            </Button>
          </div>
        </div>}
    </header>
  );
};

export default Navbar;
