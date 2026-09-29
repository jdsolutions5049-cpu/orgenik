import React from 'react';
import { useApp } from '../../context/AppContext';
import { Heart, Star, ShoppingBag, Eye, Zap } from 'lucide-react';

export default function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    isWishlisted,
    setQuickViewProduct,
    setIsCartOpen,
    language
  } = useApp();

  const wishlisted = isWishlisted(product.id);
  const discountPercent = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  const handleBuyNow = (e) => {
    e.stopPropagation();
    addToCart(product, 1, false);
    setIsCartOpen(true);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1, true);
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  return (
    <div
      onClick={() => setQuickViewProduct(product)}
      className="group bg-white rounded-2xl border border-gray-100/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden relative cursor-pointer hover:-translate-y-1"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-b from-[#F4F9F5] to-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <span className="absolute top-3 left-3 bg-[#E65C00] text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
            {discountPercent}% OFF
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          aria-label="Toggle Wishlist"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-sm flex items-center justify-center text-gray-500 hover:text-red-500 hover:scale-110 active:scale-95 transition-all"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              wishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>

        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
          <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#143628] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5 text-[#2D6A4F]" />
            Quick View
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Titles: English & Marathi */}
          <div className="min-h-[46px]">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2D1F] group-hover:text-[#2D6A4F] transition-colors line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-gray-500 font-marathi">
              {product.marathiName}
            </p>
          </div>

          {/* Pricing: ₹ 40 /kg ₹ 60 */}
          <div className="mt-2.5 flex items-baseline gap-2">
            <div className="flex items-baseline text-[#0F2D1F] font-bold">
              <span className="text-lg sm:text-xl">₹ {product.price}</span>
              <span className="text-xs sm:text-sm font-semibold text-[#E65C00] ml-1">
                /{product.unit}
              </span>
            </div>
            {product.mrp && product.mrp > product.price && (
              <span className="text-xs sm:text-sm text-gray-400 line-through">
                ₹ {product.mrp}
              </span>
            )}
          </div>

          {/* Rating & Reviews */}
          <div className="mt-2 flex items-center gap-1 text-xs text-gray-600">
            <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
            <span className="font-semibold text-gray-800">{product.rating}</span>
            <span className="text-gray-400">({product.reviewsCount})</span>
            {product.origin && (
              <span className="ml-auto text-[10px] text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 truncate max-w-[100px]">
                {product.origin.split(',')[0]}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons: Add to Cart & Buy Now */}
        <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full py-2 px-2 sm:px-3 bg-[#143628] hover:bg-[#2D6A4F] active:scale-[0.98] text-white text-xs sm:text-sm font-medium rounded-xl transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>

          {/* Buy Now */}
          <button
            onClick={handleBuyNow}
            className="w-full py-2 px-2 sm:px-3 bg-white hover:bg-emerald-50 active:scale-[0.98] text-[#143628] hover:text-[#2D6A4F] border border-[#143628] text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-1"
          >
            <Zap className="w-3.5 h-3.5 text-[#E65C00]" />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
