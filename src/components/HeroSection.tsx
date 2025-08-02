import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1445253/pexels-photo-1445253.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Artisan at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 gradient-bg opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-handloom-yellow mr-3 animate-pulse-slow" />
            <span className="text-handloom-yellow font-semibold text-lg tracking-wide">
              AUTHENTIC HANDCRAFTED GOODS
            </span>
            <Sparkles className="h-8 w-8 text-handloom-yellow ml-3 animate-pulse-slow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow leading-tight">
            <span className="block">Ghar Ka Banaya,</span>
            <span className="block text-handloom-yellow">Sab Ko Bhaaya</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-200 font-light leading-relaxed max-w-3xl mx-auto">
            Discover handmade treasures crafted with love by your local artisans. 
            Supporting traditional craftsmanship, one purchase at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => navigate('/buy')}
              className="group bg-handloom-yellow hover:bg-yellow-500 text-clay-brown font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => navigate('/seller-registration')}
              className="group bg-transparent border-2 border-white hover:bg-white hover:text-clay-brown text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Become a Seller</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button
              onClick={() => navigate('/our-story')}
              className="group text-handloom-yellow hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 underline decoration-2 underline-offset-4 hover:no-underline"
            >
              Explore Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;