
import { Globe, ExternalLink } from 'lucide-react';

const PartnersSection = () => {
  return (
    <section id="partners" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-mava-blue">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-mava-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            MAVA collaborates with leading organizations committed to transforming African agriculture.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md reveal">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-center justify-items-center">
            <a 
              href="https://www.ifc.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-gray-100 p-4 rounded-lg h-28 w-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <img 
                src="/lovable-uploads/8cac8cae-5ce2-42df-85ad-169228102508.png" 
                alt="IFC Logo" 
                className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform"
              />
            </a>
            <a 
              href="https://www.ocpgroup.ma" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-gray-100 p-4 rounded-lg h-28 w-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <img 
                src="/lovable-uploads/b58c5a9d-912f-42ea-a524-ba2291651cef.png" 
                alt="OCP Logo" 
                className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform"
              />
            </a>
            <a 
              href="https://www.afd.fr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-gray-100 p-4 rounded-lg h-28 w-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <img 
                src="/lovable-uploads/d5c59e37-bc7b-49bd-84ad-598a816bef77.png" 
                alt="AFD Logo" 
                className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform"
              />
            </a>
            <a 
              href="https://www.bpifrance.fr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-gray-100 p-4 rounded-lg h-28 w-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <img 
                src="/lovable-uploads/2a94cc83-15f9-4d9c-b540-3af6c506e062.png" 
                alt="BPI France Logo" 
                className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform"
              />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-gray-100 p-4 rounded-lg h-28 w-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <img 
                src="/lovable-uploads/b036b06e-a911-4f17-8f1d-aea99c18ddf2.png" 
                alt="ATLAS Logo" 
                className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform"
              />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-gray-100 p-4 rounded-lg h-28 w-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <img 
                src="/lovable-uploads/8915f37c-4608-457f-9610-db84d36e27e1.png" 
                alt="ISFD Logo" 
                className="max-h-20 max-w-full object-contain group-hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-mava-blue reveal">
            Join Our Growing Network of Global Partners
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto reveal">
            Together with our partners, we're building a resilient, sustainable agricultural future for Africa.
            Become part of this transformative journey.
          </p>
          <div className="flex items-center justify-center gap-2 reveal">
            <Globe className="text-mava-green h-5 w-5" />
            <span className="text-lg font-medium text-mava-blue">Active in 12+ African countries and growing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
