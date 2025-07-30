import React from 'react';
import { Store, Upload, User, CreditCard, CheckCircle } from 'lucide-react';

const SellerInterface = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Store className="h-16 w-16 text-clay-brown" />
          </div>
          <h1 className="text-4xl font-bold text-clay-brown mb-4">Seller Dashboard</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of skilled artisans and showcase your handcrafted treasures to customers across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Process */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Seller Registration & KYC</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-clay-brown text-white rounded-full text-sm font-semibold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Personal Information</h3>
                  <p className="text-gray-600 text-sm">Name, mobile, email with OTP verification</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-clay-brown text-white rounded-full text-sm font-semibold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Address & Identity</h3>
                  <p className="text-gray-600 text-sm">Residential address, Aadhar/ID upload, profile picture</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-clay-brown text-white rounded-full text-sm font-semibold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Bank Verification</h3>
                  <p className="text-gray-600 text-sm">Account details, IFSC, cancelled cheque upload</p>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-8 bg-clay-brown text-white py-3 px-6 rounded-lg hover:bg-warm-orange transition-colors duration-300 font-medium">
              Start Registration
            </button>
          </div>

          {/* Dashboard Features */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Upload className="h-8 w-8 text-forest-green mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Product Management</h3>
              </div>
              <p className="text-gray-600 mb-4">Upload new products with images, descriptions, pricing, and inventory management.</p>
              <div className="flex space-x-3">
                <button className="bg-forest-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 text-sm">
                  Add Product
                </button>
                <button className="border border-forest-green text-forest-green px-4 py-2 rounded-lg hover:bg-forest-green hover:text-white transition-colors duration-300 text-sm">
                  Manage Inventory
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <User className="h-8 w-8 text-handloom-yellow mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Order Management</h3>
              </div>
              <p className="text-gray-600 mb-4">Track orders, view buyer information, and manage order fulfillment.</p>
              <button className="bg-handloom-yellow text-clay-brown px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300 text-sm">
                View Orders
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <CreditCard className="h-8 w-8 text-clay-brown mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">Withdrawal & Payments</h3>
              </div>
              <p className="text-gray-600 mb-4">Monitor earnings, withdrawal status, and update bank details.</p>
              <button className="bg-clay-brown text-white px-4 py-2 rounded-lg hover:bg-warm-orange transition-colors duration-300 text-sm">
                Check Earnings
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-clay-brown to-warm-orange rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center">Why Sell on Martovity?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-handloom-yellow" />
              <h3 className="text-xl font-semibold mb-2">Fair Commission</h3>
              <p>Competitive commission rates that ensure you get maximum value for your craftsmanship.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-handloom-yellow" />
              <h3 className="text-xl font-semibold mb-2">Direct Customers</h3>
              <p>Connect directly with buyers who appreciate authentic handmade products.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-handloom-yellow" />
              <h3 className="text-xl font-semibold mb-2">Marketing Support</h3>
              <p>We help promote your products through our platform and marketing initiatives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInterface;