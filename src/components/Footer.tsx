import { ArrowUp, Linkedin, Globe, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
const FooterLink = ({
  href,
  children,
  className
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => <a href={href} className={cn("text-white/80 hover:text-white transition-colors duration-200", className)}>
    {children}
  </a>;
const Footer = () => {
  return <footer className="bg-gradient-to-b from-mava-blue to-mava-blue/90 text-white">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src="/lovable-uploads/296bf5bc-717a-4538-8206-ca62b5b2fd29.png" alt="MAVA Logo" className="h-10 mb-6 animate-fade-in" />
            <p className="text-white/90 mb-6 max-w-md leading-relaxed">
              Mobilizing for Agriculture Value Chains in Africa through sustainable 
              innovation and investment, empowering communities and enhancing food systems.
            </p>
            <div className="flex gap-5">
              <FooterLink href="https://www.linkedin.com/company/mavaplatform" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
                <Linkedin className="h-5 w-5" />
              </FooterLink>
              <FooterLink href="mailto:contact@mava.africa" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
                <Mail className="h-5 w-5" />
              </FooterLink>
              <FooterLink href="https://mava.africa" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
                <Globe className="h-5 w-5" />
              </FooterLink>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#vision">Our Vision</FooterLink>
              </li>
              <li>
                <FooterLink href="#why-mava">Why MAVA</FooterLink>
              </li>
              <li>
                <FooterLink href="#impact">Impact Projects</FooterLink>
              </li>
              <li>
                <FooterLink href="#partners">Partners</FooterLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {new Date().getFullYear()} MAVA Initiative. All rights reserved.
          </p>
        </div>
      </div>

      <button className="fixed bottom-6 right-6 bg-mava-green p-3 rounded-full shadow-lg text-white hover:bg-mava-green/90 transition-colors hover:scale-105 transform duration-200" onClick={() => window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })} aria-label="Scroll to top">
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>;
};
export default Footer;