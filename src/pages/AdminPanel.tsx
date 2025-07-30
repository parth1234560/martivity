import React from 'react';
import { Shield, Users, Package, BarChart3, Settings } from 'lucide-react';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-clay-brown" />
          </div>
          <h1 className="text-4xl font-bold text-clay-brown mb-4">Admin Panel</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure administrative interface for managing sellers, products, orders, and system settings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Users className="h-12 w-12 text-forest-green mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Seller Management</h3>
            <p className="text-gray-600 mb-4">Approve, reject, and manage seller accounts with KYC verification.</p>
            <button className="bg-forest-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300">
              Manage Sellers
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Package className="h-12 w-12 text-handloom-yellow mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Product Moderation</h3>
            <p className="text-gray-600 mb-4">Review and approve product listings for quality and authenticity.</p>
            <button className="bg-handloom-yellow text-clay-brown px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
              Review Products
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <BarChart3 className="h-12 w-12 text-clay-brown mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Order Analytics</h3>
            <p className="text-gray-600 mb-4">Track orders, payouts, and system performance metrics.</p>
            <button className="bg-clay-brown text-white px-4 py-2 rounded-lg hover:bg-warm-orange transition-colors duration-300">
              View Analytics
            </button>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <Settings className="h-8 w-8 text-clay-brown mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">System Settings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Commission Settings</h4>
              <p className="text-gray-600 text-sm">Configure commission rates for different product categories.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">Tax Configuration</h4>
              <p className="text-gray-600 text-sm">Manage GST and other tax settings for transactions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;