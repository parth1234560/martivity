import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Phone, Mail, User, ShoppingCart, CreditCard, MessageCircle, Calendar, Package, Truck, CheckCircle, X, Navigation } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  images: string[];
  seller: string;
  location: string;
  rating: number;
  reviews: number;
  delivery: string;
  availableLocations: string[];
  sizes?: string[];
  materials?: string[];
  weight?: string;
  dimensions?: string;
}

interface BuyerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
}

interface PurchaseDetails {
  quantity: number;
  totalAmount: number;
  deliveryDate: string;
  paymentMethod: 'cash' | 'online';
  isLocationAvailable: boolean;
}

const ProductPurchase = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [showLocation, setShowLocation] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationAddress, setLocationAddress] = useState<string>('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [buyerInfo, setBuyerInfo] = useState<BuyerInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });
  const [purchaseDetails, setPurchaseDetails] = useState<PurchaseDetails>({
    quantity: 1,
    totalAmount: 0,
    deliveryDate: '',
    paymentMethod: 'cash',
    isLocationAvailable: false
  });
  const [selectedImage, setSelectedImage] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'success' | 'failed'>('pending');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const sampleProduct: Product = {
      id: productId || '1',
      name: "Hand-Painted Ceramic Pots",
      description: "Beautiful terracotta pots with intricate hand-painted designs perfect for home decor and gardening.",
      price: "450",
      category: "Pottery",
      images: [
        "https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
      ],
      seller: "Ravi Kumar",
      location: "Rajasthan",
      rating: 4.8,
      reviews: 124,
      delivery: "3-5 days",
      availableLocations: ["Rajasthan", "Delhi", "Mumbai", "Bangalore", "Chennai"],
      sizes: ["Small (6 inch)", "Medium (8 inch)", "Large (10 inch)"],
      materials: ["Terracotta Clay", "Natural Dyes"],
      weight: "500g - 1.5kg",
      dimensions: "6\" x 6\" to 10\" x 10\""
    };
    setProduct(sampleProduct);
    setPurchaseDetails(prev => ({
      ...prev,
      totalAmount: parseInt(sampleProduct.price)
    }));
  }, [productId]);

  const handleBuyerInfoChange = (field: keyof BuyerInfo, value: string) => {
    setBuyerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Get current location
  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          setShowLocation(true);
          
          // Create a simple address from coordinates
          const address = `Location: ${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
          setLocationAddress(address);
          
          // Update form fields with location info
          updateAddressFromLocation(latitude, longitude);
          
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setIsLoadingLocation(false);
          alert('Unable to get your current location. Please enter your address manually.');
        }
      );
    } else {
      setIsLoadingLocation(false);
      alert('Geolocation is not supported by this browser. Please enter your address manually.');
    }
  };

  // Update address fields from location coordinates
  const updateAddressFromLocation = (lat: number, lng: number) => {
    // For now, we'll use a simple format and let user manually enter details
    const locationText = `Current Location (${lat.toFixed(4)}, ${lng.toFixed(4)})`;
    
    setBuyerInfo(prev => ({
      ...prev,
      address: locationText,
      city: '', // User can fill this manually
      state: '', // User can fill this manually
      pincode: '' // User can fill this manually
    }));
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      const totalAmount = newQuantity * parseInt(product?.price || '0');
      setPurchaseDetails(prev => ({
        ...prev,
        quantity: newQuantity,
        totalAmount
      }));
    }
  };

  const checkLocationAvailability = () => {
    if (buyerInfo.city && product) {
      // Check if city or state matches any available location
      const userCity = buyerInfo.city.toLowerCase();
      const userState = buyerInfo.state.toLowerCase();
      
      const isAvailable = product.availableLocations.some(location => {
        const locationLower = location.toLowerCase();
        return locationLower.includes(userCity) || locationLower.includes(userState);
      });
      
      setPurchaseDetails(prev => ({
        ...prev,
        isLocationAvailable: isAvailable
      }));
    }
  };

  const calculateDeliveryDate = () => {
    const today = new Date();
    const deliveryDays = parseInt(product?.delivery.split('-')[1] || '5');
    const deliveryDate = new Date(today.getTime() + (deliveryDays * 24 * 60 * 60 * 1000));
    return deliveryDate.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePayment = async () => {
    setLoading(true);
    setTimeout(() => {
      setPaymentStatus('success');
      setLoading(false);
      sendWhatsAppMessage();
      saveToFirebase();
      setTimeout(() => {
        setShowPaymentModal(false);
        navigate('/buy');
      }, 2000);
    }, 3000);
  };

  const sendWhatsAppMessage = () => {
    const message = `New Order Received! 🎉

Product: ${product?.name}
Buyer: ${buyerInfo.name}
Phone: ${buyerInfo.phone}
Quantity: ${purchaseDetails.quantity}
Total Amount: ₹${purchaseDetails.totalAmount}
Delivery Address: ${buyerInfo.address}, ${buyerInfo.city}, ${buyerInfo.state} - ${buyerInfo.pincode}
Payment Method: ${purchaseDetails.paymentMethod === 'online' ? 'Online Payment' : 'Cash on Delivery'}
Expected Delivery: ${calculateDeliveryDate()}`;

    const whatsappUrl = `https://wa.me/919044883117?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const saveToFirebase = () => {
    console.log('Saving to Firebase:', {
      product,
      buyerInfo,
      purchaseDetails,
      orderDate: new Date().toISOString(),
      orderId: `ORD${Date.now()}`
    });
  };

  const handleSubmit = () => {
    if (purchaseDetails.paymentMethod === 'online') {
      setShowPaymentModal(true);
    } else {
      sendWhatsAppMessage();
      saveToFirebase();
      alert('Order placed successfully! We will contact you soon.');
      navigate('/buy');
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-clay-brown"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button
            onClick={() => navigate('/buy')}
            className="flex items-center text-clay-brown hover:text-warm-orange transition-colors duration-300 mb-4"
          >
            <X className="h-5 w-5 mr-2" />
            Back to Products
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Complete Your Purchase</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Details */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Product Details</h2>
            
            <div className="mb-6">
              <div className="relative mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-clay-brown' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-clay-brown">₹{product.price}</span>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Truck className="h-4 w-4" />
                <span>Delivery: {product.delivery}</span>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                <span>Seller: {product.seller} ({product.location})</span>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-3">Product Specifications</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {product.sizes && (
                    <div>
                      <span className="font-medium text-gray-700">Available Sizes:</span>
                      <p className="text-gray-600">{product.sizes.join(', ')}</p>
                    </div>
                  )}
                  {product.materials && (
                    <div>
                      <span className="font-medium text-gray-700">Materials:</span>
                      <p className="text-gray-600">{product.materials.join(', ')}</p>
                    </div>
                  )}
                  {product.weight && (
                    <div>
                      <span className="font-medium text-gray-700">Weight:</span>
                      <p className="text-gray-600">{product.weight}</p>
                    </div>
                  )}
                  {product.dimensions && (
                    <div>
                      <span className="font-medium text-gray-700">Dimensions:</span>
                      <p className="text-gray-600">{product.dimensions}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Purchase Form */}
          <div className="space-y-6">
            {/* Quantity Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quantity & Pricing</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-700">Quantity:</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(purchaseDetails.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold w-8 text-center">{purchaseDetails.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(purchaseDetails.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Total Amount:</span>
                  <span className="font-bold text-clay-brown">₹{purchaseDetails.totalAmount}</span>
                </div>
              </div>
            </div>

            {/* Buyer Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2" />
                Buyer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={buyerInfo.name}
                    onChange={(e) => handleBuyerInfoChange('name', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={buyerInfo.email}
                    onChange={(e) => handleBuyerInfoChange('email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    value={buyerInfo.phone}
                    onChange={(e) => handleBuyerInfoChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input
                    type="text"
                    value={buyerInfo.city}
                    onChange={(e) => handleBuyerInfoChange('city', e.target.value)}
                    onBlur={checkLocationAvailability}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                    placeholder="Enter your city"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Complete Address *</label>
                  <div className="space-y-3">
                    <textarea
                      value={buyerInfo.address}
                      onChange={(e) => handleBuyerInfoChange('address', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                      placeholder="Enter your complete address"
                    />
                    
                                         {/* Location Picker */}
                     <div className="flex items-center space-x-3">
                       <button
                         type="button"
                         onClick={getCurrentLocation}
                         disabled={isLoadingLocation}
                         className="flex items-center space-x-2 px-4 py-2 bg-clay-brown text-white rounded-lg hover:bg-warm-orange transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
                       >
                         <Navigation className="h-4 w-4" />
                         <span>{isLoadingLocation ? 'Getting Location...' : 'Use Current Location'}</span>
                       </button>
                       
                       {userLocation && (
                         <div className="flex items-center space-x-2 text-sm text-green-600">
                           <CheckCircle className="h-4 w-4" />
                           <span>Location detected</span>
                         </div>
                       )}
                     </div>

                     {/* Location Display */}
                     {showLocation && userLocation && (
                       <div className="border rounded-lg overflow-hidden">
                         <div className="p-3 bg-gray-50 border-b">
                           <h4 className="font-medium text-gray-800">Your Current Location</h4>
                           <p className="text-sm text-gray-600">Coordinates detected from your device</p>
                         </div>
                         <div className="p-4 bg-white">
                           <div className="space-y-2">
                             <div className="flex items-center space-x-2">
                               <MapPin className="h-4 w-4 text-gray-500" />
                               <span className="text-sm font-medium text-gray-700">Coordinates:</span>
                               <span className="text-sm text-gray-600">
                                 {userLocation.lat.toFixed(6)}, {userLocation.lng.toFixed(6)}
                               </span>
                             </div>
                             <div className="flex items-center space-x-2">
                               <Navigation className="h-4 w-4 text-gray-500" />
                               <span className="text-sm font-medium text-gray-700">Location:</span>
                               <span className="text-sm text-gray-600">{locationAddress}</span>
                             </div>
                           </div>
                           <div className="mt-3 p-2 bg-blue-50 rounded border-l-4 border-blue-400">
                             <p className="text-xs text-blue-700">
                               💡 Please fill in your city, state, and pincode manually for accurate delivery information.
                             </p>
                           </div>
                         </div>
                       </div>
                     )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                  <input
                    type="text"
                    value={buyerInfo.state}
                    onChange={(e) => handleBuyerInfoChange('state', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                    placeholder="Enter your state"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                  <input
                    type="text"
                    value={buyerInfo.pincode}
                    onChange={(e) => handleBuyerInfoChange('pincode', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                    placeholder="Enter pincode"
                  />
                </div>
              </div>

                             {buyerInfo.city && (
                 <div className="mt-4 p-3 rounded-lg border">
                   <div className="flex items-center space-x-2">
                     <MapPin className="h-4 w-4" />
                     <span className="font-medium">Location Availability:</span>
                     {purchaseDetails.isLocationAvailable ? (
                       <span className="text-green-600 flex items-center">
                         <CheckCircle className="h-4 w-4 mr-1" />
                         Available in your area
                       </span>
                     ) : (
                       <span className="text-red-600 flex items-center">
                         <X className="h-4 w-4 mr-1" />
                         Not available in your area
                       </span>
                     )}
                   </div>
                   {purchaseDetails.isLocationAvailable ? (
                     <p className="text-sm text-gray-600 mt-2">
                       Expected delivery by: {calculateDeliveryDate()}
                     </p>
                   ) : (
                     <div className="mt-2 p-2 bg-red-50 rounded border-l-4 border-red-400">
                       <p className="text-xs text-red-700">
                         This product is currently only available in: {product.availableLocations.join(', ')}
                       </p>
                       <p className="text-xs text-red-600 mt-1">
                         Please check back later or contact us for delivery to your area.
                       </p>
                     </div>
                   )}
                 </div>
               )}
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Method
              </h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={purchaseDetails.paymentMethod === 'cash'}
                    onChange={(e) => setPurchaseDetails(prev => ({ ...prev, paymentMethod: e.target.value as 'cash' | 'online' }))}
                    className="text-clay-brown focus:ring-clay-brown"
                  />
                  <span className="text-gray-700">Cash on Delivery</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={purchaseDetails.paymentMethod === 'online'}
                    onChange={(e) => setPurchaseDetails(prev => ({ ...prev, paymentMethod: e.target.value as 'cash' | 'online' }))}
                    className="text-clay-brown focus:ring-clay-brown"
                  />
                  <span className="text-gray-700">Online Payment (Google Pay)</span>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Product:</span>
                  <span className="font-medium">{product.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="font-medium">{purchaseDetails.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price per item:</span>
                  <span className="font-medium">₹{product.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery:</span>
                  <span className="font-medium">{product.delivery}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-medium capitalize">{purchaseDetails.paymentMethod}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total Amount:</span>
                    <span className="text-clay-brown">₹{purchaseDetails.totalAmount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Place Order Button */}
            <button
              onClick={handleSubmit}
              disabled={!buyerInfo.name || !buyerInfo.email || !buyerInfo.phone || !buyerInfo.address || !buyerInfo.city || !buyerInfo.state || !buyerInfo.pincode || !purchaseDetails.isLocationAvailable}
              className="w-full bg-clay-brown text-white py-4 rounded-lg hover:bg-warm-orange transition-colors duration-300 font-medium text-lg disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {purchaseDetails.paymentMethod === 'online' ? 'Proceed to Payment' : 'Place Order'}
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="text-center">
              {paymentStatus === 'pending' && (
                <>
                  <div className="mb-6">
                    <img
                      src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn"
                      alt="Google Pay"
                      className="w-16 h-16 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Google Pay Payment</h3>
                    <p className="text-gray-600 mb-4">Amount: ₹{purchaseDetails.totalAmount}</p>
                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700">UPI ID: pathakparthixc7503@okhdfcbank</p>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setShowPaymentModal(false)}
                      className="flex-1 px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handlePayment}
                      disabled={loading}
                      className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400"
                    >
                      {loading ? 'Processing...' : 'Confirm Payment'}
                    </button>
                  </div>
                </>
              )}
              {paymentStatus === 'success' && (
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Payment Successful!</h3>
                  <p className="text-gray-600">Your order has been placed successfully.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPurchase; 