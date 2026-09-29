import React, { useState, useRef, useEffect } from 'react';
import Logo from '../common/Logo';
import { useApp } from '../../context/AppContext';
import { CATEGORIES_LIST } from '../../data/products';
import { Search, ShoppingBag, User, ChevronDown, Menu, X, Heart, Sparkles } from 'lucide-react';

export default function Navbar() {
  const {
    currentPage,
    navigateTo,
    cartCount,
    setIsCartOpen,
    wishlist,
    products,
    setQuickViewProduct,
    setSelectedCategory,
    language
  } = useApp();

  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [localSearch, setLocalSearch] = useState('');
  const categoriesRef = useRef(null);
  const searchRef = useRef(null);

  // Auto-close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setCategoriesOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered search results for autocomplete
  const searchResults = localSearch.trim()
    ? products.filter(p =>
        p.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        p.marathiName.includes(localSearch) ||
        p.categoryName.toLowerCase().includes(localSearch.toLowerCase()) ||
        p.form.toLowerCase().includes(localSearch.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      navigateTo('products');
      setSearchFocused(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', marathi: 'मुख्यपृष्ठ' },
    { id: 'about', label: 'About', marathi: 'आमच्याबद्दल' },
    { id: 'products', label: 'Products', marathi: 'उत्पादने' },
    { id: 'categories', label: 'Categories', marathi: 'प्रवर्ग', hasDropdown: true },
    { id: 'story', label: 'Our Story', marathi: 'शेतकरी गाथा' },
    { id: 'blog', label: 'Blog', marathi: 'ब्लॉग' },
    { id: 'contact', label: 'Contact', marathi: 'संपर्क' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EBF5EE] shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;

              if (link.hasDropdown) {
                return (
                  <div key={link.id} className="relative" ref={categoriesRef}>
                    <button
                      onClick={() => setCategoriesOpen(!categoriesOpen)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'text-[#2D6A4F] font-semibold bg-[#EBF5EE]'
                          : 'text-[#1F2937] hover:text-[#2D6A4F] hover:bg-[#F4F9F5]'
                      }`}
                    >
                      <span>{language === 'mr' ? link.marathi : link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${categoriesOpen ? 'rotate-180 text-[#2D6A4F]' : 'text-gray-400'}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {categoriesOpen && (
                      <div className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-dropdown border border-[#EBF5EE] py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                          {language === 'mr' ? 'सर्व श्रेणी निवडा' : 'Explore Collections'}
                        </div>
                        <div className="space-y-1">
                          {CATEGORIES_LIST.map((cat) => (
                            <button
                              key={cat.id}
                              onClick={() => {
                                setSelectedCategory(cat.id);
                                navigateTo(cat.id === 'all' ? 'categories' : 'products');
                                setCategoriesOpen(false);
                              }}
                              className="w-full flex items-center justify-between px-3 py-2 text-sm text-[#1F2937] hover:text-[#143628] hover:bg-[#EBF5EE] rounded-xl transition-colors text-left group"
                            >
                              <div className="flex flex-col">
                                <span className="font-medium group-hover:text-[#2D6A4F]">
                                  {language === 'mr' ? cat.marathiName : cat.name}
                                </span>
                                {language === 'en' && (
                                  <span className="text-[11px] text-gray-500 font-marathi">
                                    {cat.marathiName}
                                  </span>
                                )}
                              </div>
                              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-[#2D6A4F] border border-emerald-100">
                                {cat.count}
                              </span>
                            </button>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-gray-100 px-2">
                          <button
                            onClick={() => {
                              navigateTo('categories');
                              setCategoriesOpen(false);
                            }}
                            className="w-full text-center py-2 text-xs font-semibold text-[#2D6A4F] hover:text-[#143628] bg-emerald-50 hover:bg-emerald-100/70 rounded-xl transition-colors"
                          >
                            {language === 'mr' ? 'सर्व श्रेणी पहा →' : 'View Visual Category Grid →'}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                    isActive
                      ? 'text-[#2D6A4F] font-semibold bg-[#EBF5EE]'
                      : 'text-[#1F2937] hover:text-[#2D6A4F] hover:bg-[#F4F9F5]'
                  }`}
                >
                  <span>{language === 'mr' ? link.marathi : link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#2D6A4F] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Search */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Live Search Bar */}
            <div className="relative" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <input
                  type="text"
                  value={localSearch}
                  onChange={(e) => {
                    setLocalSearch(e.target.value);
                    setSearchFocused(true);
                  }}
                  onFocus={() => setSearchFocused(true)}
                  placeholder={language === 'mr' ? 'धान्य, तांदूळ, डाळी शोधा...' : 'Search for grains, rice, pulses...'}
                  className="w-40 sm:w-56 md:w-64 lg:w-72 bg-[#F4F9F5] hover:bg-[#EBF5EE] focus:bg-white text-xs sm:text-sm text-[#1F2937] placeholder-gray-500 rounded-full pl-9 pr-4 py-2 border border-emerald-100 focus:border-[#2D6A4F] focus:outline-none focus:ring-2 focus:ring-[#2D6A4F]/20 transition-all shadow-inner"
                />
                <Search className="w-4 h-4 text-emerald-700/70 absolute left-3 pointer-events-none" />
                {localSearch && (
                  <button
                    type="button"
                    onClick={() => setLocalSearch('')}
                    className="absolute right-3 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </form>

              {/* Autocomplete Dropdown */}
              {searchFocused && localSearch.trim() && (
                <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-dropdown border border-[#EBF5EE] p-2 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-semibold uppercase text-emerald-800 flex items-center justify-between">
                    <span>{language === 'mr' ? 'शोध निकाल' : 'Matching Products'}</span>
                    <span className="text-gray-400">{searchResults.length} found</span>
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="space-y-1">
                      {searchResults.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => {
                            setQuickViewProduct(item);
                            setSearchFocused(false);
                          }}
                          className="flex items-center gap-3 p-2 hover:bg-[#EBF5EE] rounded-xl cursor-pointer transition-colors"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-10 h-10 rounded-lg object-cover border border-emerald-100 flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-[#143628] truncate">
                              {item.name} <span className="font-normal text-emerald-700 font-marathi">({item.marathiName})</span>
                            </div>
                            <div className="text-[11px] text-gray-500 flex items-center gap-2">
                              <span>{item.categoryName}</span>
                              <span className="font-semibold text-emerald-800">₹{item.price}/{item.unit}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="pt-1 mt-1 border-t border-gray-100">
                        <button
                          onClick={() => {
                            navigateTo('products');
                            setSearchFocused(false);
                          }}
                          className="w-full text-center text-xs py-1.5 font-semibold text-[#2D6A4F] hover:underline"
                        >
                          View all in Store →
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="py-6 text-center text-xs text-gray-500">
                      No traditional products matching "{localSearch}"
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Wishlist Link */}
            <button
              onClick={() => {
                navigateTo('account');
              }}
              className="relative p-2.5 rounded-full text-[#143628] hover:text-[#2D6A4F] hover:bg-[#EBF5EE] transition-colors"
              title="My Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Profile / Account Icon */}
            <button
              onClick={() => navigateTo('account')}
              className={`p-2.5 rounded-full transition-colors flex items-center justify-center ${
                currentPage === 'account'
                  ? 'bg-[#143628] text-white shadow-sm'
                  : 'text-[#143628] hover:text-[#2D6A4F] hover:bg-[#EBF5EE]'
              }`}
              title="My Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Cart Badge with Count */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-[#143628] hover:bg-[#2D6A4F] text-white rounded-full transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center group"
              title="Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5 text-emerald-100 group-hover:scale-105 transition-transform" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#E65C00] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#143628] hover:bg-[#EBF5EE] rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EBF5EE] bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                navigateTo(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                currentPage === link.id
                  ? 'bg-[#143628] text-white font-semibold'
                  : 'text-[#1F2937] hover:bg-[#EBF5EE]'
              }`}
            >
              <span>{language === 'mr' ? link.marathi : link.label}</span>
              {currentPage === link.id && <Sparkles className="w-4 h-4 text-emerald-300" />}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between px-2">
            <span className="text-xs text-gray-500">Language / भाषा:</span>
            <button
              onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
              className="text-xs font-semibold bg-[#EBF5EE] text-[#143628] px-3 py-1.5 rounded-lg border border-emerald-200"
            >
              {language === 'en' ? 'मराठी मध्ये बदला' : 'Switch to English'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
