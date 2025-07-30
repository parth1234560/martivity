import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Anita Sharma",
      product: "Hand-painted Ceramic Vase",
      feedback: "The craftsmanship is absolutely stunning! The vase arrived perfectly packaged and the colors are even more beautiful in person.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Rohit Gupta",
      product: "Handwoven Jute Bag",
      feedback: "Great quality and eco-friendly! I love supporting local artisans through Martovity. The delivery was quick and the product exceeded expectations.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Priyanka Mehta",
      product: "Wooden Kitchen Set",
      feedback: "These wooden utensils are beautifully carved and feel so authentic. Perfect for my kitchen and they make cooking feel more connected to tradition.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Vikash Kumar",
      product: "Brass Decorative Items",
      feedback: "Outstanding quality and finish! The brass items look amazing in my living room. Great to know I'm supporting rural artisans with my purchase.",
      rating: 4,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating
            ? 'text-handloom-yellow fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-clay-brown mb-6">
            What Our Buyers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their Martovity experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`fade-in stagger-${index + 1} hover-lift group bg-white rounded-2xl p-6 border border-gray-100 relative overflow-hidden`}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-12 w-12 text-clay-brown" />
              </div>

              {/* Avatar and Info */}
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-clay-brown transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.product}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                "{testimonial.feedback}"
              </p>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-clay-brown to-handloom-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-clay-brown mb-4">
              Join Thousands of Happy Customers
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the joy of authentic handcrafted goods and support local artisans today.
            </p>
            <button className="bg-clay-brown hover:bg-warm-orange text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Start Shopping Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;