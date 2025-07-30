import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Star, MapPin } from 'lucide-react';

const ProductRangeSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Hand-Painted Ceramic Pots",
      description: "Beautiful terracotta pots with intricate hand-painted designs perfect for home decor",
      price: "₹450",
      seller: "Ravi Kumar",
      location: "Rajasthan",
      rating: 4.8,
      tags: ["hand-painted", "terracotta", "eco-friendly"]
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Handwoven Jute Bags",
      description: "Sustainable and stylish jute bags handwoven by skilled artisans for everyday use",
      price: "₹320",
      seller: "Meera Devi",
      location: "West Bengal",
      rating: 4.9,
      tags: ["handwoven", "jute", "sustainable"]
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2693208/pexels-photo-2693208.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Wooden Kitchen Utensils Set",
      description: "Traditional wooden spoons and bowls carved from sustainable wood sources",
      price: "₹680",
      seller: "Suresh Patel",
      location: "Gujarat",
      rating: 4.7,
      tags: ["wooden", "traditional", "kitchen"]
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Embroidered Cotton Scarves",
      description: "Delicate cotton scarves with beautiful traditional embroidery work by local artisans",
      price: "₹550",
      seller: "Priya Sharma",
      location: "Punjab",
      rating: 4.6,
      tags: ["embroidered", "cotton", "traditional"]
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Brass Home Decor Items",
      description: "Handcrafted brass decorative pieces that add elegance to any living space",
      price: "₹890",
      seller: "Amit Singh",
      location: "Uttar Pradesh",
      rating: 4.8,
      tags: ["brass", "handcrafted", "decor"]
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Natural Soap Collection",
      description: "Organic handmade soaps with natural ingredients and traditional formulations",
      price: "₹280",
      seller: "Lakshmi Iyer",
      location: "Kerala",
      rating: 4.9,
      tags: ["organic", "natural", "handmade"]
    }
  ];

  const handleBuyNow = (productId: number) => {
    navigate(`/buy?product=${productId}`);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-clay-brown mb-6">
            Our Product Range
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover a curated collection of authentic handcrafted goods, each piece telling 
            a unique story of traditional craftsmanship and cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`fade-in stagger-${(index % 4) + 1} hover-lift group bg-soft-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-1">
                  {product.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white bg-opacity-90 text-xs font-medium text-clay-brown rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full">
                  <Star className="h-4 w-4 text-handloom-yellow fill-current" />
                  <span className="text-sm font-medium text-gray-800">{product.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{product.location}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-clay-brown transition-colors duration-300">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-clay-brown">{product.price}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    by <span className="font-medium">{product.seller}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleBuyNow(product.id)}
                  className="w-full bg-clay-brown hover:bg-warm-orange text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/buy')}
            className="bg-handloom-yellow hover:bg-yellow-500 text-clay-brown font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductRangeSection;