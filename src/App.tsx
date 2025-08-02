import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import AdminPanel from './pages/AdminPanel';
import SellerInterface from './pages/SellerInterface';
import SellerRegistration from './pages/SellerRegistration';
import BuyerInterface from './pages/BuyerInterface';
import ProductPurchase from './pages/ProductPurchase';
import OurStory from './pages/OurStory';
import { AuthProvider } from './components/AuthProvider';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-soft-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute requiredRole="admin" fallbackPath="/">
                  <AdminPanel />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/seller" 
              element={
                <ProtectedRoute requiredRole="seller" fallbackPath="/">
                  <SellerInterface />
                </ProtectedRoute>
              } 
            />
            <Route path="/seller-registration" element={<SellerRegistration />} />
            <Route path="/buy" element={<BuyerInterface />} />
            <Route path="/purchase/:productId" element={<ProductPurchase />} />
            <Route path="/our-story" element={<OurStory />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;