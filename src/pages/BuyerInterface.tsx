import React, { useState } from 'react';
import { Search, Filter, Grid, List, ShoppingCart, Heart, Star } from 'lucide-react';

const BuyerInterface = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Hand-Painted Ceramic Pots",
      description: "Beautiful terracotta pots with intricate hand-painted designs perfect for home decor and gardening",
      price: "₹450",
      originalPrice: "₹600",
      seller: "Ravi Kumar",
      location: "Rajasthan",
      rating: 4.8,
      reviews: 124,
      delivery: "3-5 days",
      category: "Pottery"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Handwoven Jute Bags",
      description: "Sustainable and stylish jute bags handwoven by skilled artisans for everyday use",
      price: "₹320",
      originalPrice: "₹400",
      seller: "Meera Devi",
      location: "West Bengal",
      rating: 4.9,
      reviews: 89,
      delivery: "2-4 days",
      category: "Textiles"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2693208/pexels-photo-2693208.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Wooden Kitchen Utensils Set",
      description: "Traditional wooden spoons and bowls carved from sustainable wood sources",
      price: "₹680",
      originalPrice: "₹800",
      seller: "Suresh Patel",
      location: "Gujarat",
      rating: 4.7,
      reviews: 67,
      delivery: "4-6 days",
      category: "Woodcraft"
    }
  ];

  const categories = ["All", "Pottery", "Textiles", "Woodcraft", "Jewelry", "Home Decor"];
  const priceRanges = ["Under ₹300", "₹300-₹600", "₹600-₹1000", "Above ₹1000"];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-clay-brown mb-4">Discover Handmade Treasures</h1>
          <p className="text-xl text-gray-600">
            Explore authentic handcrafted goods from talented artisans across India
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for handmade products..."
                className="w-full px-4 py-3 pl-12 pr-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>

            {/* View Toggle and Filter */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-white text-clay-brown shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-white text-clay-brown shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-clay-brown text-white rounded-lg hover:bg-warm-orange transition-colors duration-300">
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-clay-brown focus:ring-clay-brown" />
                    <span className="text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <label key={range} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300 text-clay-brown focus:ring-clay-brown" />
                    <span className="text-gray-700">{range}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Delivery Time */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Delivery Time</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-clay-brown focus:ring-clay-brown" />
                  <span className="text-gray-700">Same Day</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-clay-brown focus:ring-clay-brown" />
                  <span className="text-gray-700">1-3 Days</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-clay-brown focus:ring-clay-brown" />
                  <span className="text-gray-700">3-7 Days</span>
                </label>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">Showing {products.length} products</p>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={`object-cover ${
                        viewMode === 'list' ? 'w-full h-48' : 'w-full h-48'
                      }`}
                    />
                    <button className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all duration-300">
                      <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                    </button>
                    <div className="absolute top-3 left-3 bg-forest-green text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-handloom-yellow fill-current" />
                        <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>
                      <span className="text-sm text-gray-600">{product.location}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-clay-brown transition-colors duration-300">
                      {product.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-clay-brown">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                      <span className="text-sm text-gray-600">by {product.seller}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-forest-green font-medium">
                        Delivery: {product.delivery}
                      </span>
                      <button className="bg-clay-brown hover:bg-warm-orange text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-handloom-yellow hover:bg-yellow-500 text-clay-brown font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerInterface;