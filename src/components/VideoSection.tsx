import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-clay-brown to-warm-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Watch the Journey of Our Artisans
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Experience the passion, skill, and dedication that goes into every handcrafted piece. 
            Meet the talented artisans who keep traditional craftsmanship alive.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop"
                alt="Artisan at work creating beautiful pottery"
                className="w-full h-96 md:h-[500px] object-cover"
              />
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
              <button
                onClick={handlePlayPause}
                className="group bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 md:p-8 transition-all duration-300 transform hover:scale-110 shadow-2xl"
              >
                {isPlaying ? (
                  <Pause className="h-12 w-12 md:h-16 md:w-16 text-clay-brown group-hover:text-warm-orange transition-colors duration-300" />
                ) : (
                  <Play className="h-12 w-12 md:h-16 md:w-16 text-clay-brown group-hover:text-warm-orange transition-colors duration-300 ml-1" />
                )}
              </button>
            </div>

            {/* Video Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl md:text-2xl font-semibold mb-2">
                Traditional Pottery Making in Rural Rajasthan
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                Watch master potter Ravi Kumar create beautiful ceramic pieces using techniques passed down through generations.
              </p>
            </div>
          </div>

          {/* Video Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold text-handloom-yellow mb-2">500+</div>
              <div className="text-gray-200">Artisans Featured</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold text-handloom-yellow mb-2">50+</div>
              <div className="text-gray-200">Craft Stories</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold text-handloom-yellow mb-2">25+</div>
              <div className="text-gray-200">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;