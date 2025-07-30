import React from 'react';
import { Shield, Truck, Users } from 'lucide-react';

const WhyMartovitySection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Authentic Local Products",
      description: "Every product is verified for authenticity and crafted by genuine local artisans using traditional methods passed down through generations.",
      gradient: "from-clay-brown to-warm-orange"
    },
    {
      icon: Truck,
      title: "End-to-End Delivery",
      description: "Direct connection between artisans and customers with no middleman, ensuring fair prices and seamless delivery experience.",
      gradient: "from-forest-green to-lime-500"
    },
    {
      icon: Users,
      title: "Anyone Can Join As a Seller",
      description: "Simple registration process for artisans with support and guidance to help them showcase their beautiful handcrafted creations.",
      gradient: "from-handloom-yellow to-orange-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-soft-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-clay-brown mb-6">
            Why Choose Martovity?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We've built a platform that truly serves both our artisans and customers, 
            creating a win-win ecosystem for everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`fade-in stagger-${index + 1} hover-lift group`}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${reason.gradient} rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${reason.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <reason.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-clay-brown transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMartovitySection;