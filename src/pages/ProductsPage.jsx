import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/common/ProductCard';
import WhatsAppBanner from '../components/common/WhatsAppBanner';
import { CATEGORIES_LIST, PRODUCT_FORMS } from '../data/products';
import { SlidersHorizontal, ChevronRight, Check, X, RotateCcw } from 'lucide-react';

export default function ProductsPage() {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    inStockOnly,
    setInStockOnly,
    selectedForms,
    setSelectedForms,
    sortBy,
    setSortBy,
    navigateTo,
    language
  } = useApp();

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const itemsPerPage = 8; // Per page for smooth pagination

  // Toggle product form filter
  const handleToggleForm = (formId) => {
    if (selectedForms.includes(formId)) {
      setSelectedForms(selectedForms.filter(f => f !== formId));
    } else {
      setSelectedForms([...selectedForms, formId]);
    }
    setCurrentPageNum(1);
  };

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedCategory('all');
    setPriceRange(700);
    setInStockOnly(true);
    setSelectedForms([]);
    setSortBy('popular');
    setCurrentPageNum(1);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // Category filter
      if (selectedCategory !== 'all' && prod.category !== selectedCategory) {
        return false;
      }
      // Price range
      if (prod.price > priceRange) {
        return false;
      }
      // In stock
      if (inStockOnly && !prod.inStock) {
        return false;
      }
      // Form filter
      if (selectedForms.length > 0 && !selectedForms.includes(prod.form)) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: popular
      return (b.reviewsCount || 0) - (a.reviewsCount || 0);
    });
  }, [products, selectedCategory, priceRange, inStockOnly, selectedForms, sortBy]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPageNum - 1) * itemsPerPage,
    currentPageNum * itemsPerPage
  );

  return (
    <div className="space-y-8">
      
      {/* 1. HERO BANNER WITH RUSTIC FOOD IMAGERY (MATCHING MOCKUP) */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EBF5EE] via-[#F4F9F5] to-[#EBF5EE] py-10 sm:py-14 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Banner Text */}
            <div className="md:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                <span>🌿</span> OUR PRODUCTS
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D1F] font-serif tracking-tight leading-tight">
                Traditional Foods for a{' '}
                <span className="text-[#2D6A4F]">Healthier You</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
                Explore our wide range of native grains, rice, pulses, seeds and spices directly sourced from Indian farmers.
              </p>
            </div>

            {/* Banner Imagery */}
            <div className="md:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[16/10] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional native grains in wooden bowls"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigateTo('home')} className="hover:text-[#2D6A4F]">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#143628] font-semibold">Products</span>
          {selectedCategory !== 'all' && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#2D6A4F] capitalize font-medium">
                {CATEGORIES_LIST.find(c => c.id === selectedCategory)?.name}
              </span>
            </>
          )}
        </nav>
      </div>

      {/* 3. MAIN CATALOG LAYOUT (SIDEBAR + PRODUCT GRID) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden col-span-12 flex items-center justify-between bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm">
            <span className="text-xs font-semibold text-gray-700">
              Showing {filteredProducts.length} products
            </span>
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#143628] text-white text-xs font-semibold rounded-xl"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>

          {/* LEFT SIDEBAR: FILTERS */}
          <aside className={`lg:col-span-3 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            
            <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-5 space-y-6">
              
              {/* Header with Reset */}
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2 text-sm font-bold text-[#0F2D1F]">
                  <SlidersHorizontal className="w-4 h-4 text-[#2D6A4F]" />
                  <span>Filters</span>
                </div>
                <button
                  onClick={handleResetFilters}
                  className="text-[11px] font-semibold text-gray-500 hover:text-red-500 flex items-center gap-1"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              {/* 1. Category Filter */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3 flex items-center gap-1.5">
                  <span>📅</span> Categories
                </h4>
                <div className="space-y-1">
                  {CATEGORIES_LIST.map((cat) => {
                    const isSelected = selectedCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setCurrentPageNum(1);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                          isSelected
                            ? 'bg-[#EBF5EE] text-[#143628] font-bold border border-emerald-200'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-[#143628]'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span>{cat.name}</span>
                        </div>
                        <span className="text-[11px] text-gray-400">
                          ({cat.count})
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Price Range Slider */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 flex items-center gap-1.5">
                    <span>🌿</span> Price Range
                  </h4>
                  <span className="text-xs font-bold text-[#143628]">
                    ₹0 - ₹{priceRange}
                  </span>
                </div>

                <input
                  type="range"
                  min="40"
                  max="700"
                  step="10"
                  value={priceRange}
                  onChange={(e) => {
                    setPriceRange(Number(e.target.value));
                    setCurrentPageNum(1);
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-[#2D6A4F]"
                />

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">₹0 - ₹700</span>
                  <button
                    onClick={() => setCurrentPageNum(1)}
                    className="px-3 py-1 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* 3. Availability Checkboxes */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3 flex items-center gap-1.5">
                  <span>🔄</span> Availability
                </h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => {
                        setInStockOnly(e.target.checked);
                        setCurrentPageNum(1);
                      }}
                      className="w-4 h-4 rounded text-[#2D6A4F] focus:ring-[#2D6A4F]"
                    />
                    <span>In Stock (56)</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs text-gray-400 cursor-not-allowed">
                    <input
                      type="checkbox"
                      disabled
                      className="w-4 h-4 rounded text-gray-300"
                    />
                    <span>Out of Stock (0)</span>
                  </label>
                </div>
              </div>

              {/* 4. Product Form Checkboxes */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-3 flex items-center gap-1.5">
                  <span>📦</span> Product Form
                </h4>
                <div className="space-y-2">
                  {PRODUCT_FORMS.map((form) => (
                    <label
                      key={form.id}
                      className="flex items-center justify-between text-xs text-gray-700 cursor-pointer hover:text-black"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedForms.includes(form.id)}
                          onChange={() => handleToggleForm(form.id)}
                          className="w-4 h-4 rounded text-[#2D6A4F] focus:ring-[#2D6A4F]"
                        />
                        <span>{form.label}</span>
                      </div>
                      <span className="text-[11px] text-gray-400">({form.count})</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>

          </aside>

          {/* RIGHT PRODUCT GRID SECTION */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Top Toolbar: Result Count & Sort Dropdown */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-xs sm:text-sm text-gray-600">
                Showing{' '}
                <strong className="text-[#143628]">
                  {filteredProducts.length === 0 ? 0 : (currentPageNum - 1) * itemsPerPage + 1} -{' '}
                  {Math.min(currentPageNum * itemsPerPage, filteredProducts.length)}
                </strong>{' '}
                of <strong className="text-[#143628]">{filteredProducts.length}</strong> products
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs text-gray-500 font-medium">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#F4F9F5] text-xs font-semibold text-[#143628] rounded-xl px-3 py-2 border border-emerald-100 focus:outline-none focus:border-[#2D6A4F] cursor-pointer"
                >
                  <option value="popular">Popular</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {/* 4-column product grid */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 space-y-3">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-[#2D6A4F] flex items-center justify-center text-2xl">
                  🌾
                </div>
                <h3 className="text-lg font-bold text-[#143628]">No products found</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Try adjusting your price range or clearing active filters to view all 56 traditional products.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2 bg-[#143628] text-white text-xs font-semibold rounded-full"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Pagination Controls matching mockups */}
            {totalPages > 1 && (
              <div className="pt-6 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPageNum(Math.max(1, currentPageNum - 1))}
                  disabled={currentPageNum === 1}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:border-[#2D6A4F] hover:text-[#2D6A4F] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-colors"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, i) => {
                  const page = i + 1;
                  const isActive = currentPageNum === page;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPageNum(page)}
                      className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                        isActive
                          ? 'bg-[#143628] text-white shadow-sm'
                          : 'border border-gray-200 text-gray-700 hover:border-emerald-300'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPageNum(Math.min(totalPages, currentPageNum + 1))}
                  disabled={currentPageNum === totalPages}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 hover:border-[#2D6A4F] hover:text-[#2D6A4F] disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-gray-600 transition-colors"
                >
                  Next
                </button>
              </div>
            )}

          </main>

        </div>
      </div>

      {/* WhatsApp Banner */}
      <WhatsAppBanner />

    </div>
  );
}
