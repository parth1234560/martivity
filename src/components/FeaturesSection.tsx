import React from 'react';
import { Heart, Home, TrendingUp, Flag } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Supports Local Artisans",
      description: "Directly empowering skilled craftspeople in rural communities across India",
      color: "text-red-500"
    },
    {
      icon: Home,
      title: "100% Homemade Products",
      description: "Every item is authentically handcrafted with traditional techniques and love",
      color: "text-forest-green"
    },
    {
      icon: TrendingUp,
      title: "Empowers Indian Economy",
      description: "Strengthening weaker sections and contributing to sustainable economic growth",
      color: "text-clay-brown"
    },
    {
      icon: Flag,
      title: "Vocal for Local & Atmanirbhar",
      description: "Supporting government initiatives for self-reliant and prosperous India",
      color: "text-handloom-yellow"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-clay-brown mb-6">
            What Makes Martovity Special
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're more than just a marketplace – we're a movement towards preserving traditional craftsmanship 
            and supporting India's incredible artisan community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`fade-in stagger-${index + 1} hover-lift bg-soft-white rounded-2xl p-8 text-center group cursor-pointer border border-gray-100`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 group-hover:bg-white transition-colors duration-300 mb-6`}>
                <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-clay-brown transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;