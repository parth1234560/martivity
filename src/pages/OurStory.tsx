import React from 'react';
import { Heart, Users, Globe, Award } from 'lucide-react';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-clay-brown mb-6">Our Story</h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Born from a passion to preserve India's rich craft heritage and empower rural artisans, 
            Martovity bridges the gap between traditional craftsmanship and modern consumers.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl p-12 mb-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-clay-brown mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We believe every handcrafted piece tells a story of heritage, skill, and passion. Our mission is to 
                create a sustainable ecosystem where traditional Indian artisans can thrive in the digital age while 
                preserving their ancestral crafts for future generations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through Martovity, we're not just selling products – we're celebrating culture, supporting livelihoods, 
                and keeping the flame of traditional craftsmanship burning bright.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3094218/pexels-photo-3094218.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Artisan crafting pottery"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-handloom-yellow text-clay-brown p-4 rounded-2xl shadow-lg">
                <Heart className="h-8 w-8 fill-current" />
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <Users className="h-12 w-12 text-clay-brown mx-auto mb-4" />
            <div className="text-3xl font-bold text-clay-brown mb-2">500+</div>
            <div className="text-gray-600">Artisans Supported</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <Globe className="h-12 w-12 text-forest-green mx-auto mb-4" />
            <div className="text-3xl font-bold text-forest-green mb-2">25+</div>
            <div className="text-gray-600">States Covered</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <Award className="h-12 w-12 text-handloom-yellow mx-auto mb-4" />
            <div className="text-3xl font-bold text-handloom-yellow mb-2">10,000+</div>
            <div className="text-gray-600">Products Sold</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <div className="text-3xl font-bold text-red-500 mb-2">5,000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-clay-brown to-warm-orange rounded-2xl p-12 mb-16 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-handloom-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-clay-brown" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p>Every product is verified for genuine craftsmanship and traditional techniques.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-handloom-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-clay-brown" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
              <p>Supporting artisan communities with fair prices and sustainable livelihoods.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-handloom-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-clay-brown" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p>Promoting eco-friendly practices and preserving traditional craft methods.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-clay-brown mb-8">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            A passionate group of individuals committed to celebrating and preserving India's craft heritage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rajesh Kumar</h3>
              <p className="text-clay-brown font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Former consultant with deep roots in rural India, passionate about empowering artisan communities.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Priya Sharma</h3>
              <p className="text-clay-brown font-medium mb-3">Head of Artisan Relations</p>
              <p className="text-gray-600 text-sm">
                Expert in traditional crafts with 15+ years experience working with rural artisan communities.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                alt="Team member"
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Amit Patel</h3>
              <p className="text-clay-brown font-medium mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Tech enthusiast building digital bridges between traditional crafts and modern consumers.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-soft-white rounded-2xl p-12 text-center shadow-lg">
          <h2 className="text-3xl font-bold text-clay-brown mb-6">Join Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're an artisan looking to showcase your craft or a conscious consumer seeking authentic products, 
            you're part of our story. Together, we're preserving India's craft heritage for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-clay-brown hover:bg-warm-orange text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Become a Seller
            </button>
            <button className="border-2 border-clay-brown text-clay-brown hover:bg-clay-brown hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;