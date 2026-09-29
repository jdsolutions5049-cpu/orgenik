import React from 'react';
import { useApp } from '../context/AppContext';
import WhatsAppBanner from '../components/common/WhatsAppBanner';
import { CATEGORY_CARDS, CATEGORY_PILLARS, WHY_SHOP_CATEGORY } from '../data/categoriesData';
import { ChevronRight, ArrowRight, ShieldCheck, Leaf, Users, Truck, Search, Grid, Heart } from 'lucide-react';

export default function CategoriesPage() {
  const { navigateTo, setSelectedCategory } = useApp();

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    navigateTo('products');
  };

  const getPillarIcon = (name) => {
    switch (name) {
      case 'Leaf': return <Leaf className="w-5 h-5 text-[#2D6A4F]" />;
      case 'UserCheck': return <Users className="w-5 h-5 text-[#2D6A4F]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#2D6A4F]" />;
      case 'Truck': return <Truck className="w-5 h-5 text-[#2D6A4F]" />;
      default: return <Leaf className="w-5 h-5 text-[#2D6A4F]" />;
    }
  };

  const getWhyIcon = (name) => {
    switch (name) {
      case 'Search': return <Search className="w-5 h-5 text-[#2D6A4F]" />;
      case 'Grid': return <Grid className="w-5 h-5 text-[#2D6A4F]" />;
      case 'Heart': return <Heart className="w-5 h-5 text-[#2D6A4F]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#2D6A4F]" />;
      default: return <Search className="w-5 h-5 text-[#2D6A4F]" />;
    }
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EBF5EE] via-[#F4F9F5] to-[#EBF5EE] py-10 sm:py-16 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Banner Content */}
            <div className="lg:col-span-7 space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                <span>🌿</span> OUR CATEGORIES
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D1F] font-serif tracking-tight leading-tight">
                Explore Our{' '}
                <span className="text-[#2D6A4F]">Product Categories</span>
              </h1>

              <p className="text-sm sm:text-base text-gray-600 max-w-xl leading-relaxed">
                Discover our wide range of traditional grains, rice, pulses, seeds and spices directly sourced from Indian farmers. Pure, natural and full of goodness.
              </p>
            </div>

            {/* Banner Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[16/10] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80"
                  alt="Traditional grain varieties"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. BREADCRUMBS & 4 PILLARS ROW */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <button onClick={() => navigateTo('home')} className="hover:text-[#2D6A4F]">
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#143628] font-semibold">Categories</span>
        </nav>

        {/* 4 Feature Badges Under Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CATEGORY_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EBF5EE] flex items-center justify-center flex-shrink-0">
                {getPillarIcon(pillar.icon)}
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0F2D1F]">
                  {pillar.title}
                </h4>
                <p className="text-[11px] text-gray-500">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. 7 VISUAL CATEGORY CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORY_CARDS.map((cat) => (
            <div
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Image with Tag */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-xs font-bold text-[#143628] px-2.5 py-1 rounded-full shadow-sm">
                  {cat.productCount}
                </span>
                {cat.tag && (
                  <span className="absolute top-3 right-3 bg-emerald-600/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                    {cat.tag}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0F2D1F] group-hover:text-[#2D6A4F] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-marathi mt-0.5">
                    {cat.marathiTitle}
                  </p>
                  <p className="text-xs text-gray-600 mt-2.5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Sample popular items in this category */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {cat.popularItems.map((item, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#F4F9F5] text-emerald-800 px-2 py-0.5 rounded-md border border-emerald-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore Button */}
                <div className="mt-5 pt-3 border-t border-gray-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(cat.id);
                    }}
                    className="w-full py-2.5 bg-[#143628] group-hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MISSION BANNER ("OUR PROMISE") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#EBF5EE] via-white to-[#EBF5EE] border border-emerald-100 p-8 sm:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Mission Text */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] flex items-center gap-1.5">
                <span>🍃</span> OUR PROMISE
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2D1F] font-serif leading-snug">
                Pure Food. Stronger Farmers.{' '}
                <span className="text-[#2D6A4F]">Healthier India.</span>
              </h2>

              <p className="text-sm text-gray-600 max-w-xl leading-relaxed">
                Every product you buy supports our farmers and helps preserve India's rich food heritage. We believe real wellness begins with wholesome, pesticide-free harvest cultivated in fertile soil.
              </p>

              <div>
                <button
                  onClick={() => navigateTo('story')}
                  className="px-6 py-3 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs sm:text-sm font-semibold rounded-full shadow transition-all inline-flex items-center gap-2"
                >
                  <span>Know Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Vintage Rural Landscape Drawing / Etching */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-full max-w-xs p-6 bg-white/80 rounded-2xl border border-emerald-100/60 shadow-sm text-center">
                <div className="text-4xl mb-2">🚜🌾</div>
                <div className="text-xs font-bold text-[#143628]">100+ Farming Families Empowered</div>
                <div className="text-[11px] text-gray-500 mt-1">Across Sangli, Solapur, Latur & Kolhapur</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. WHY SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
            🌿 WHY SHOP BY CATEGORY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2D1F] font-serif mt-1">
            Carefully Curated for Your Wellness
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_SHOP_CATEGORY.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-[#EBF5EE] text-[#2D6A4F] flex items-center justify-center mb-3">
                {getWhyIcon(item.icon)}
              </div>
              <h4 className="text-sm font-bold text-[#0F2D1F]">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHATSAPP BANNER */}
      <WhatsAppBanner />

    </div>
  );
}
