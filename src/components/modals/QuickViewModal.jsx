import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Heart, Star, ShoppingBag, Zap, ShieldCheck, Check, Award, MapPin, UserCheck } from 'lucide-react';

export default function QuickViewModal() {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    toggleWishlist,
    isWishlisted,
    setIsCartOpen
  } = useApp();

  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('1kg');

  if (!quickViewProduct) return null;

  const wishlisted = isWishlisted(quickViewProduct.id);

  // Dynamic weight multiplier
  const getWeightMultiplier = () => {
    switch (selectedWeight) {
      case '500g': return 0.55;
      case '1kg': return 1;
      case '2kg': return 1.9;
      case '5kg': return 4.6;
      default: return 1;
    }
  };

  const calculatedPrice = Math.round(quickViewProduct.price * getWeightMultiplier());
  const calculatedMrp = Math.round((quickViewProduct.mrp || quickViewProduct.price * 1.4) * getWeightMultiplier());

  const handleAddToCart = () => {
    addToCart({
      ...quickViewProduct,
      unit: selectedWeight,
      price: calculatedPrice
    }, quantity);
    setQuickViewProduct(null);
  };

  const handleBuyNow = () => {
    addToCart({
      ...quickViewProduct,
      unit: selectedWeight,
      price: calculatedPrice
    }, quantity, false);
    setQuickViewProduct(null);
    setIsCartOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setQuickViewProduct(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
          
          {/* Close button */}
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Image Column */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className="absolute top-4 left-4 p-2.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm hover:scale-110 transition-transform"
              >
                <Heart
                  className={`w-4 h-4 ${
                    wishlisted ? 'fill-red-500 text-red-500' : 'text-gray-500'
                  }`}
                />
              </button>

              <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-xl border border-emerald-100 flex items-center gap-2 text-xs text-[#143628]">
                <ShieldCheck className="w-4 h-4 text-[#2D6A4F] flex-shrink-0" />
                <span>100% Native Heritage Seed • Sun Dried</span>
              </div>
            </div>

            {/* Details Column */}
            <div className="flex flex-col">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                  {quickViewProduct.categoryName}
                </span>

                <h2 className="text-2xl font-bold text-[#0F2D1F] font-serif mt-2">
                  {quickViewProduct.name}
                </h2>
                <p className="text-base text-gray-600 font-marathi -mt-0.5">
                  {quickViewProduct.marathiName}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-2 text-xs">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-gray-900 ml-1">{quickViewProduct.rating}</span>
                  </div>
                  <span className="text-gray-400">({quickViewProduct.reviewsCount} verified customer reviews)</span>
                </div>

                {/* Price Display */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-[#0F2D1F]">
                    ₹{calculatedPrice}
                  </span>
                  {calculatedMrp > calculatedPrice && (
                    <span className="text-base text-gray-400 line-through">
                      ₹{calculatedMrp}
                    </span>
                  )}
                  <span className="text-xs font-bold text-[#E65C00] bg-orange-50 px-2 py-0.5 rounded-full">
                    Save ₹{calculatedMrp - calculatedPrice}
                  </span>
                </div>

                {/* Weight Pack Selector */}
                <div className="mt-4">
                  <span className="text-xs font-semibold text-gray-700 block mb-2">
                    Select Pack Size:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['500g', '1kg', '2kg', '5kg'].map((w) => (
                      <button
                        key={w}
                        onClick={() => setSelectedWeight(w)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                          selectedWeight === w
                            ? 'bg-[#143628] text-white border-[#143628] shadow-sm'
                            : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-emerald-300'
                        }`}
                      >
                        {w}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 mt-4 leading-relaxed">
                  {quickViewProduct.description}
                </p>

                {/* Farmer & Origin Box */}
                {quickViewProduct.farmerName && (
                  <div className="mt-4 p-3 bg-[#F4F9F5] rounded-xl border border-emerald-100 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-[#143628] font-bold">
                      <UserCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
                      <span>Farmer Partner: {quickViewProduct.farmerName}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600 pl-5">
                      <MapPin className="w-3 h-3 text-emerald-600" />
                      <span>Region: {quickViewProduct.origin}</span>
                    </div>
                  </div>
                )}

                {/* Health Benefits */}
                {quickViewProduct.benefits && (
                  <div className="mt-4">
                    <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-1.5">
                      Key Health Benefits:
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {quickViewProduct.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-gray-700">
                          <Check className="w-3.5 h-3.5 text-[#2D6A4F] flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-gray-200 rounded-xl px-2.5 py-1.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-gray-500 hover:text-black px-1 font-bold"
                  >
                    -
                  </button>
                  <span className="text-xs font-bold px-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-gray-500 hover:text-black px-1 font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-4 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                {/* Buy Now */}
                <button
                  onClick={handleBuyNow}
                  className="py-3 px-4 bg-[#E65C00] hover:bg-[#FF7A00] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <Zap className="w-4 h-4" />
                  <span>Buy Now</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
