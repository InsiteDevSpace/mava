import { Target, TrendingUp, LineChart, Play } from "lucide-react";
import { useState } from "react";
const VisionSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const youtubeVideoId = "7xVklNAgavs"; // Updated to the new video ID

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };
  return (
    <section id="vision" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-mava-blue">
            Vision & Ambition
          </h2>
          <div className="w-24 h-1 bg-mava-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            MAVA aims to catalyze Africa's double green transition -
            agricultural and environmental - through strategic investment and
            innovation.
          </p>
        </div>

        {/* Mission text - full width and centered */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 mb-4">
            Our mission is to transform African agriculture by mobilizing
            blended capital to support agritech startups and scalable innovative
            agricultural initiatives across the continent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            {/* Video Player */}
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
                      alt="MAVA Vision Video"
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group">
                      <div className="bg-mava-blue/70 p-5 rounded-full transform transition-all duration-300 group-hover:scale-110 group-hover:bg-mava-blue">
                        <Play className="h-10 w-10 text-white" />
                      </div>
                      <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs px-2 py-1 rounded">
                        MAVA Vision & Ambition
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-mava-green/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-mava-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Strategic Investment
                  </h4>
                  <p className="text-gray-600">
                    Supporting startups and initiatives that drive sustainable
                    agricultural transformation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-mava-orange/10 p-3 rounded-full">
                  <TrendingUp className="h-6 w-6 text-mava-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Growing Impact</h4>
                  <p className="text-gray-600">
                    Creating jobs, improving food security, and fostering
                    climate-smart agricultural practices
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-mava-blue/10 p-3 rounded-full">
                  <LineChart className="h-6 w-6 text-mava-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Data-Driven Approach
                  </h4>
                  <p className="text-gray-600">
                    Leveraging analytics and research to guide investments and
                    measure impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VisionSection;
