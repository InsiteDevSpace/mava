import { Sprout, Shield, Lightbulb, Building } from "lucide-react";
const WhyMavaSection = () => {
  return (
    <section id="why-mava" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-mava-blue">
            Why MAVA
          </h2>
          <div className="w-24 h-1 bg-mava-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're supporting the structuring and derisking of sustainable
            agricultural value chains that transform rural economies while
            protecting our planet for future generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md reveal card-hover">
            <div className="bg-mava-green/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Building className="h-8 w-8 text-mava-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-mava-blue">
              Building Value Chains
            </h3>
            <p className="text-gray-600">
              We develop integrated agricultural value chains that connect
              farmers to markets and increase rural incomes.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md reveal card-hover">
            <div className="bg-mava-yellow/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-mava-yellow" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-mava-blue">
              Strengthening Food Sovereignty
            </h3>
            <p className="text-gray-600">
              Our initiatives enhance Africa's food security by boosting local
              production and reducing import dependency.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md reveal card-hover">
            <div className="bg-mava-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-mava-orange" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-mava-blue">
              Fostering Green Innovation
            </h3>
            <p className="text-gray-600">
              We promote innovative agricultural technologies that increase
              productivity while minimizing environmental impact.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md reveal card-hover">
            <div className="bg-mava-lightblue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Sprout className="h-8 w-8 text-mava-lightblue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-mava-blue">
              Climate Resilience
            </h3>
            <p className="text-gray-600">
              Our approach integrates climate adaptation strategies to build
              resilient agricultural systems across Africa.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white shadow-lg rounded-lg overflow-hidden reveal">
          <div className="flex flex-col items-center justify-center p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-mava-blue text-center">
              Our Approach Makes the Difference
            </h3>
            <div className="w-24 h-1 bg-mava-blue mx-auto mb-6"></div>
            <p className="text-gray-600 mb-6 text-center max-w-2xl">
              MAVA adopts a multifaceted approach, bringing together diverse
              stakeholders to catalyze value networks and support innovative
              businesses, for a sustainable agriculture in Africa.
            </p>
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/approach-diagram.png"
                alt="MAVA Approach Diagram"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhyMavaSection;
