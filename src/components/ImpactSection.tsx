import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImpactSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeVideoId = "U71DILeI9ik"; // Updated YouTube video ID

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="impact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-mava-blue">
            Our Impact Projects
          </h2>
          <div className="w-24 h-1 bg-mava-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how MAVA is driving tangible change across Africa through
            innovative agricultural initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md reveal card-hover">
            <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
              <img
                src="/lovable-uploads/6eb039a1-5499-452b-b291-274c59525712.png"
                alt="Cashew Waste Valorization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <span className="bg-mava-orange/90 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                    Localized Green Inputs
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-mava-blue">
                Agricultural Waste Recovery
              </h3>
              <p className="text-gray-600">
                MAVA is currently developing agricultural waste recovery
                projects across Africa in partnership with NETZERO, for further
                downstream value creation (Biochar and Biofuel production).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md reveal card-hover">
            <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
              <img
                src="/lovable-uploads/d1cf4dee-b087-4289-98f0-a414c3f3efa8.png"
                alt="Rice Transformation via InsurTech"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <span className="bg-mava-green/90 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                    Agritech
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-mava-blue">
                Rice Transformation via InsurTech
              </h3>
              <p className="text-gray-600">
                Combining insurance technology (with Pula) and an innovative
                blended finance model with private sector participation to
                mitigate climate risks and boost production capacities in rice
                farming.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-mava-blue/5 rounded-lg p-8 md:p-12 reveal">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-mava-blue">
                Real Impact, Real Stories
              </h3>
              <p className="text-gray-600 mb-6">
                Our work doesn't just transform agricultural systems - it
                changes lives. Hear from the farmers, entrepreneurs, and
                communities who are experiencing the impact of MAVA's
                initiatives firsthand.
              </p>
              <Button
                className="bg-mava-blue hover:bg-mava-blue/90 flex items-center gap-2"
                onClick={handleVideoPlay}
              >
                <Play className="h-4 w-4" /> Watch Success Stories
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isPlaying ? "scale-105" : ""
                }`}
                onClick={handleVideoPlay}
              >
                {isPlaying ? (
                  <div className="relative pt-[56.25%] overflow-hidden rounded-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                      className="absolute top-0 left-0 w-full h-full border-0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative cursor-pointer">
                    <img
                      src={`https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`}
                      alt="MAVA Impact Stories"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group">
                      <div className="bg-mava-blue/70 p-5 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-mava-blue">
                        <Play className="h-10 w-10 text-white" />
                      </div>
                      <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        MAVA Impact Stories
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
