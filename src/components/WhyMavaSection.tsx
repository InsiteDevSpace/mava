
import { Sprout, Shield, Lightbulb, Building } from 'lucide-react';
const WhyMavaSection = () => {
  return <section id="why-mava" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-mava-blue">
            Why MAVA
          </h2>
          <div className="w-24 h-1 bg-mava-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">We're supporting the structuring and derisking of sustainable agricultural value chains that transform rural economies while protecting our planet for future generations.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md reveal card-hover">
            <div className="bg-mava-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Building className="h-8 w-8 text-mava-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-mava-blue">Building Value Chains</h3>
            <p className="text-gray-600">
              We develop integrated agricultural value chains that connect farmers to markets and increase rural incomes.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md reveal card-hover">
            <div className="bg-mava-yellow/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-mava-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-mava-blue">Strengthening Food Sovereignty</h3>
            <p className="text-gray-600">
              Our initiatives enhance Africa's food security by boosting local production and reducing import dependency.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md reveal card-hover">
            <div className="bg-mava-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-mava-orange" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-mava-blue">Fostering Green Innovation</h3>
            <p className="text-gray-600">
              We promote innovative agricultural technologies that increase productivity while minimizing environmental impact.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md reveal card-hover">
            <div className="bg-mava-lightblue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Sprout className="h-8 w-8 text-mava-lightblue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-mava-blue">Climate Resilience</h3>
            <p className="text-gray-600">
              Our approach integrates climate adaptation strategies to build resilient agricultural systems across Africa.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white shadow-lg rounded-lg overflow-hidden reveal">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-mava-blue">
                Our Approach Makes the Difference
              </h3>
              <p className="text-gray-600 mb-6">
                MAVA adopts a multifaceted approach, bringing together diverse stakeholders to support innovative businesses and catalyze value networks, for a sustainable agriculture in Africa.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="bg-mava-green/20 p-1 rounded-full">
                    <svg className="h-4 w-4 text-mava-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Blended finance model that attracts diverse capital</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-mava-green/20 p-1 rounded-full">
                    <svg className="h-4 w-4 text-mava-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Technical expertise spanning the agricultural value chain</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-mava-green/20 p-1 rounded-full">
                    <svg className="h-4 w-4 text-mava-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Proven partnerships with local and international stakeholders</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-mava-green/20 p-1 rounded-full">
                    <svg className="h-4 w-4 text-mava-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Focus on sustainable and inclusive growth models</span>
                </li>
              </ul>
            </div>
            <div className="bg-mava-blue">
              <img src="/lovable-uploads/d2393d62-7452-4074-ae96-ceeb5f881afa.png" alt="Farmers in the field" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyMavaSection;
