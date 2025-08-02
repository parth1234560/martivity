import React, { useState, useRef } from 'react';
import { Store, Upload, User, MapPin, Phone, Mail, Camera, Plus, X, Image as ImageIcon } from 'lucide-react';

interface SellerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  craftType: string;
  customCraftType: string;
  experience: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  customCategory: string;
  images: string[];
}

const SellerRegistration = () => {
  const [sellerInfo, setSellerInfo] = useState<SellerInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    craftType: '',
    customCraftType: '',
    experience: '',
    description: ''
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [showProductForm, setShowProductForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({
    name: '',
    description: '',
    price: '',
    category: '',
    customCategory: '',
    images: []
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const craftTypes = [
    'Pottery & Ceramics',
    'Textiles & Handloom',
    'Wooden Crafts',
    'Metal Work',
    'Jewelry Making',
    'Bamboo Crafts',
    'Leather Work',
    'Paper Crafts',
    'Glass Work',
    'Stone Carving',
    'Other'
  ];

  const categories = [
    'Pottery',
    'Textiles',
    'Woodcraft',
    'Jewelry',
    'Home Decor',
    'Kitchen & Dining',
    'Fashion Accessories',
    'Art & Paintings',
    'Garden & Outdoor',
    'Other'
  ];

  const handleSellerInfoChange = (field: keyof SellerInfo, value: string) => {
    setSellerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProductChange = (field: keyof Product, value: string | string[]) => {
    setCurrentProduct(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addProduct = () => {
    if (currentProduct.name && currentProduct.price && currentProduct.category) {
      const newProduct: Product = {
        id: Date.now().toString(),
        name: currentProduct.name,
        description: currentProduct.description || '',
        price: currentProduct.price,
        category: currentProduct.category === 'Other' ? currentProduct.customCategory || 'Other' : currentProduct.category,
        customCategory: currentProduct.customCategory || '',
        images: currentProduct.images || []
      };
      setProducts(prev => [...prev, newProduct]);
             setCurrentProduct({
         name: '',
         description: '',
         price: '',
         category: '',
         customCategory: '',
         images: []
       });
      setShowProductForm(false);
    }
  };

  const removeProduct = (productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages: string[] = [];
      
      Array.from(files).forEach((file) => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target?.result) {
              newImages.push(e.target.result as string);
              if (newImages.length === files.length) {
                setCurrentProduct(prev => ({
                  ...prev,
                  images: [...(prev.images || []), ...newImages]
                }));
              }
            }
          };
          reader.readAsDataURL(file);
        }
      });
    }
  };

  const removeImage = (index: number) => {
    setCurrentProduct(prev => ({
      ...prev,
      images: prev.images?.filter((_, i) => i !== index) || []
    }));
  };

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log('Seller Info:', sellerInfo);
    console.log('Products:', products);
    alert('Registration submitted successfully! We will review your application and get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Store className="h-16 w-16 text-clay-brown" />
          </div>
          <h1 className="text-4xl font-bold text-clay-brown mb-4">Join as a Seller</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Share your handcrafted treasures with customers who appreciate authentic Indian craftsmanship.
          </p>
        </div>

        <div className="space-y-8">
          {/* Basic Information Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <User className="h-6 w-6 mr-3 text-clay-brown" />
              Basic Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={sellerInfo.name}
                  onChange={(e) => handleSellerInfoChange('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={sellerInfo.email}
                  onChange={(e) => handleSellerInfoChange('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  value={sellerInfo.phone}
                  onChange={(e) => handleSellerInfoChange('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

                             <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Craft Type *</label>
                 <select
                   value={sellerInfo.craftType}
                   onChange={(e) => handleSellerInfoChange('craftType', e.target.value)}
                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                 >
                   <option value="">Select your craft type</option>
                   {craftTypes.map(type => (
                     <option key={type} value={type}>{type}</option>
                   ))}
                 </select>
                 
                 {/* Custom Craft Type Input */}
                 {sellerInfo.craftType === 'Other' && (
                   <div className="mt-3">
                     <label className="block text-sm font-medium text-gray-700 mb-2">Please specify your craft type *</label>
                     <input
                       type="text"
                       value={sellerInfo.customCraftType}
                       onChange={(e) => handleSellerInfoChange('customCraftType', e.target.value)}
                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                       placeholder="Enter your specific craft type"
                     />
                   </div>
                 )}
               </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                <select
                  value={sellerInfo.experience}
                  onChange={(e) => handleSellerInfoChange('experience', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                >
                  <option value="">Select experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-10">6-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <input
                  type="text"
                  value={sellerInfo.address}
                  onChange={(e) => handleSellerInfoChange('address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                  placeholder="Enter your complete address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                <input
                  type="text"
                  value={sellerInfo.city}
                  onChange={(e) => handleSellerInfoChange('city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                <input
                  type="text"
                  value={sellerInfo.state}
                  onChange={(e) => handleSellerInfoChange('state', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                  placeholder="Enter your state"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pincode *</label>
                <input
                  type="text"
                  value={sellerInfo.pincode}
                  onChange={(e) => handleSellerInfoChange('pincode', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                  placeholder="Enter pincode"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">About Your Craft</label>
                <textarea
                  value={sellerInfo.description}
                  onChange={(e) => handleSellerInfoChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-clay-brown focus:border-transparent"
                  placeholder="Tell us about your craft, techniques, and what makes your work special..."
                />
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
                <Upload className="h-6 w-6 mr-3 text-forest-green" />
                Your Products
              </h2>
              <button
                onClick={() => setShowProductForm(true)}
                className="bg-forest-green text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300 flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </button>
            </div>

            {/* Product Form */}
            {showProductForm && (
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Add New Product</h3>
                  <button
                    onClick={() => setShowProductForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Name *</label>
                    <input
                      type="text"
                      value={currentProduct.name}
                      onChange={(e) => handleProductChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                      placeholder="Enter product name"
                    />
                  </div>

                                     <div>
                     <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                     <select
                       value={currentProduct.category}
                       onChange={(e) => handleProductChange('category', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                     >
                       <option value="">Select category</option>
                       {categories.map(category => (
                         <option key={category} value={category}>{category}</option>
                       ))}
                     </select>
                     
                     {/* Custom Category Input */}
                     {currentProduct.category === 'Other' && (
                       <div className="mt-3">
                         <label className="block text-sm font-medium text-gray-700 mb-2">Please specify your category *</label>
                         <input
                           type="text"
                           value={currentProduct.customCategory}
                           onChange={(e) => handleProductChange('customCategory', e.target.value)}
                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                           placeholder="Enter your specific category"
                         />
                       </div>
                     )}
                   </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price (₹) *</label>
                    <input
                      type="number"
                      value={currentProduct.price}
                      onChange={(e) => handleProductChange('price', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                      placeholder="Enter price"
                    />
                  </div>

                                     <div className="md:col-span-2">
                     <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                     <textarea
                       value={currentProduct.description}
                       onChange={(e) => handleProductChange('description', e.target.value)}
                       rows={3}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green focus:border-transparent"
                       placeholder="Describe your product..."
                     />
                   </div>

                   {/* Image Upload Section */}
                   <div className="md:col-span-2">
                     <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
                     <div className="space-y-4">
                       {/* Upload Button */}
                       <div className="flex items-center justify-center w-full">
                         <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                           <div className="flex flex-col items-center justify-center pt-5 pb-6">
                             <ImageIcon className="w-8 h-8 mb-2 text-gray-400" />
                             <p className="mb-2 text-sm text-gray-500">
                               <span className="font-semibold">Click to upload</span> or drag and drop
                             </p>
                             <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                           </div>
                           <input
                             ref={fileInputRef}
                             type="file"
                             multiple
                             accept="image/*"
                             onChange={handleImageUpload}
                             className="hidden"
                           />
                         </label>
                       </div>

                       {/* Image Preview */}
                       {currentProduct.images && currentProduct.images.length > 0 && (
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                           {currentProduct.images.map((image, index) => (
                             <div key={index} className="relative group">
                               <img
                                 src={image}
                                 alt={`Product ${index + 1}`}
                                 className="w-full h-24 object-cover rounded-lg border border-gray-200"
                               />
                               <button
                                 onClick={() => removeImage(index)}
                                 className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors duration-300 opacity-0 group-hover:opacity-100"
                               >
                                 <X className="w-3 h-3" />
                               </button>
                             </div>
                           ))}
                         </div>
                       )}
                     </div>
                   </div>
                 </div>

                <div className="flex justify-end space-x-3 mt-4">
                  <button
                    onClick={() => setShowProductForm(false)}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={addProduct}
                    className="px-4 py-2 bg-forest-green text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                  >
                    Add Product
                  </button>
                </div>
              </div>
            )}

                         {/* Products List */}
             {products.length > 0 ? (
               <div className="space-y-4">
                 {products.map((product) => (
                   <div key={product.id} className="bg-gray-50 rounded-lg p-4">
                     <div className="flex items-start justify-between">
                       <div className="flex-1">
                         <h4 className="font-medium text-gray-800 mb-2">{product.name}</h4>
                         <p className="text-sm text-gray-600 mb-2">{product.category} • ₹{product.price}</p>
                         {product.description && (
                           <p className="text-sm text-gray-500 mb-3">{product.description}</p>
                         )}
                         
                         {/* Product Images */}
                         {product.images && product.images.length > 0 && (
                           <div className="flex space-x-2 mb-3">
                             {product.images.slice(0, 3).map((image, index) => (
                               <img
                                 key={index}
                                 src={image}
                                 alt={`${product.name} ${index + 1}`}
                                 className="w-12 h-12 object-cover rounded border border-gray-200"
                               />
                             ))}
                             {product.images.length > 3 && (
                               <div className="w-12 h-12 bg-gray-200 rounded border border-gray-200 flex items-center justify-center text-xs text-gray-500">
                                 +{product.images.length - 3}
                               </div>
                             )}
                           </div>
                         )}
                       </div>
                       <button
                         onClick={() => removeProduct(product.id)}
                         className="text-red-500 hover:text-red-700 ml-4"
                       >
                         <X className="h-5 w-5" />
                       </button>
                     </div>
                   </div>
                 ))}
               </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Upload className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No products added yet. Click "Add Product" to get started.</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-clay-brown text-white px-8 py-4 rounded-lg hover:bg-warm-orange transition-colors duration-300 font-medium text-lg"
            >
              Submit Registration
            </button>
            <p className="text-sm text-gray-600 mt-4">
              We'll review your application and get back to you within 2-3 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRegistration; 