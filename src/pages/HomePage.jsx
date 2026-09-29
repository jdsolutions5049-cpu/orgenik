import React from 'react';
import { useApp } from '../context/AppContext';
import ProductCard from '../components/common/ProductCard';
import WhatsAppBanner from '../components/common/WhatsAppBanner';
import { CATEGORY_CARDS } from '../data/categoriesData';
import { BLOG_POSTS } from '../data/blogPosts';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Heart,
  Users,
  Wheat,
  Sparkles,
  Star,
  CheckCircle2,
  ChevronRight,
  Quote
} from 'lucide-react';

export default function HomePage({ onOpenPolicy }) {
  const { navigateTo, products, setSelectedCategory, language } = useApp();

  // Popular products to display (first 8 from products)
  const popularProducts = products.slice(0, 8);

  const valueProps = [
    {
      title: 'Farmer Sourced',
      desc: 'Directly from verified sustainable family farms & FPOs',
      icon: <Users className="w-6 h-6 text-[#2D6A4F]" />
    },
    {
      title: 'Traditional & Authentic',
      desc: '100% native heirloom seeds, zero chemical fertilizers',
      icon: <Wheat className="w-6 h-6 text-[#2D6A4F]" />
    },
    {
      title: 'Quality Delivery',
      desc: 'Carefully graded, stone destoned & vacuum sealed',
      icon: <Truck className="w-6 h-6 text-[#2D6A4F]" />
    },
    {
      title: 'Supporting Farmers',
      desc: 'Fair profits empowering rural Maharashtra households',
      icon: <Heart className="w-6 h-6 text-[#2D6A4F]" />
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 bg-gradient-to-b from-[#F4F9F5] via-[#FBFDFB] to-white">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-10 left-10 w-72 h-72 bg-amber-50/70 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#143628]">
                <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>100% Native Indian Heirloom Grains & Pulses</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F2D1F] font-serif tracking-tight leading-[1.15]">
                Fresh Traditional Foods,{' '}
                <span className="text-[#2D6A4F] italic underline decoration-[#2D6A4F]/20">
                  Live Healthy
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Rediscover native millets, unpolished dals, heirloom rice and stone-ground spices procured directly from rural Maharashtra farmers. Pure, authentic, and naturally chemical-free.
              </p>

              {/* CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => navigateTo('products')}
                  className="px-8 py-4 bg-[#E65C00] hover:bg-[#FF7A00] active:scale-95 text-white font-bold rounded-full shadow-lg shadow-orange-600/25 hover:shadow-orange-600/35 transition-all flex items-center gap-2 group text-sm sm:text-base"
                >
                  <span>Shop Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigateTo('story')}
                  className="px-7 py-4 bg-white hover:bg-emerald-50 active:scale-95 text-[#143628] font-bold rounded-full border border-[#143628]/30 hover:border-[#143628] shadow-sm transition-all text-sm sm:text-base"
                >
                  Explore Our Story
                </button>
              </div>

              {/* Social Proof Avatars */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-gray-600">
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="User"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                    alt="User"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="User"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                    alt="User"
                  />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">4.8 / 5.0</span>
                  <span className="text-gray-500">· Trusted by 10,000+ families</span>
                </div>
              </div>

            </div>

            {/* Hero Right Visuals */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Curved organic frame */}
                <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
                    alt="Traditional Indian grains in wooden bowls"
                    className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Highlight Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-emerald-100 shadow-lg flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center font-bold">
                        🌾
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#143628]">Solapur Pearl Bajra</div>
                        <div className="text-[11px] text-gray-500 font-marathi">बाजरी · Stone Destoned</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#E65C00] bg-orange-50 px-2.5 py-1 rounded-full">
                      Direct Farm
                    </span>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-[#143628] text-white p-3 rounded-2xl shadow-xl flex items-center gap-2 border border-emerald-500/20 animate-soft-pulse">
                  <ShieldCheck className="w-5 h-5 text-emerald-300" />
                  <div className="text-[11px] font-semibold leading-tight">
                    <div>100% Tested</div>
                    <div className="text-emerald-300 font-normal">Pesticide Free</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE PROPS (4 ICON PILLARS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EBF5EE] flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0F2D1F]">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. EXPLORE OUR CATEGORIES (VISUAL ROW) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] flex items-center gap-1.5">
              <span>🌿</span> SHOP BY CATEGORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2D1F] font-serif mt-1">
              Explore Our Categories
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Traditional foods for a healthier tomorrow
            </p>
          </div>

          <button
            onClick={() => navigateTo('categories')}
            className="text-xs sm:text-sm font-semibold text-[#2D6A4F] hover:text-[#143628] flex items-center gap-1 hover:underline"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 6 Category visual cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {CATEGORY_CARDS.slice(0, 6).map((cat) => (
            <div
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                navigateTo('products');
              }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col text-center"
            >
              <div className="aspect-square w-full overflow-hidden bg-gray-50">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F2D1F] group-hover:text-[#2D6A4F] transition-colors truncate">
                    {cat.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-marathi">
                    {cat.marathiTitle.split(' ')[0]}
                  </p>
                </div>
                <span className="mt-2 text-[11px] font-semibold text-[#2D6A4F] group-hover:underline flex items-center justify-center gap-1">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. POPULAR PRODUCTS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] flex items-center gap-1.5">
              <span>🌾</span> NATIVE HARVEST
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2D1F] font-serif mt-1">
              Popular Traditional Foods
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Hand-picked grains, unpolished dals and stone-ground spices from Maharashtra
            </p>
          </div>

          <button
            onClick={() => navigateTo('products')}
            className="text-xs sm:text-sm font-semibold text-[#2D6A4F] hover:text-[#143628] flex items-center gap-1 hover:underline"
          >
            <span>View All Products (56)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-column product grid matching mockups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 5. "OUR STORY" BANNER (HIGHLIGHTING FARMER HERITAGE) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-[#F4F9F5] border border-emerald-100/80 p-8 sm:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Story Image of Indian Farmer Couple */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-emerald-950">
                <img
                  src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=800&q=80"
                  alt="Indian farmer couple holding harvested crops"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-white text-xs font-medium">
                  🌾 Dnyaneshwar & Sunita Shinde · Solapur
                </div>
              </div>
            </div>

            {/* Story Text & Feature Pillars */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
                <span>🍃</span> OUR STORY
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F2D1F] font-serif leading-tight">
                Reviving Traditional Foods for a Healthier India
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                We work directly with farmers across India to bring you the finest traditional grains, rice, pulses and spices. Our goal is to promote healthy living, support our farming communities and preserve India's rich food heritage.
              </p>

              {/* 4 Feature Checklist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    🌿
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2D1F]">100% Natural</h4>
                    <p className="text-xs text-gray-500">No chemicals, no additives</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    💚
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2D1F]">Nutrition Rich</h4>
                    <p className="text-xs text-gray-500">Traditional & healthy foods</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    🌾
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2D1F]">Sustainable Sourcing</h4>
                    <p className="text-xs text-gray-500">Supporting local farmers</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    🛡
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F2D1F]">Quality Assured</h4>
                    <p className="text-xs text-gray-500">Cleaned, graded & hygienically packed</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateTo('story')}
                  className="px-6 py-3 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs sm:text-sm font-semibold rounded-full shadow transition-all inline-flex items-center gap-2"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. "WHY CHOOSE US" & TRUST METRICS & TESTIMONIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
            🍃 WHY CHOOSE US
          </span>
          <h2 className="text-3xl font-bold text-[#0F2D1F] font-serif mt-1">
            Good Food for a Better Tomorrow
          </h2>
        </div>

        {/* 4 Feature Circles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="p-5 bg-white rounded-2xl border border-gray-100 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#EBF5EE] text-[#2D6A4F] flex items-center justify-center mb-3">
              🌱
            </div>
            <h4 className="text-sm font-bold text-[#0F2D1F]">Direct from Farmers</h4>
            <p className="text-xs text-gray-500 mt-1">Sourced directly from trusted farmers & FPOs</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-gray-100 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#EBF5EE] text-[#2D6A4F] flex items-center justify-center mb-3">
              ✅
            </div>
            <h4 className="text-sm font-bold text-[#0F2D1F]">Premium Quality</h4>
            <p className="text-xs text-gray-500 mt-1">Carefully cleaned, graded and packed</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-gray-100 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#EBF5EE] text-[#2D6A4F] flex items-center justify-center mb-3">
              🚚
            </div>
            <h4 className="text-sm font-bold text-[#0F2D1F]">Safe & Fast Delivery</h4>
            <p className="text-xs text-gray-500 mt-1">Pan India delivery with secure packaging</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-gray-100 text-center shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#EBF5EE] text-[#2D6A4F] flex items-center justify-center mb-3">
              👥
            </div>
            <h4 className="text-sm font-bold text-[#0F2D1F]">Support Rural Growth</h4>
            <p className="text-xs text-gray-500 mt-1">Your purchase helps farmers and rural families</p>
          </div>
        </div>

        {/* Customer Review & Stats Row matching mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FBFDFB] p-6 sm:p-8 rounded-3xl border border-gray-100">
          
          {/* Priya Sharma Testimonial Card */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl shadow-card border border-emerald-50">
            <Quote className="w-8 h-8 text-[#2D6A4F]/20 mb-2" />
            <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
              "The quality of grains and spices is amazing! Everything is fresh and tastes just like homemade. Highly recommended!"
            </p>
            <div className="mt-4 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                alt="Priya Sharma"
                className="w-10 h-10 rounded-full object-cover border-2 border-[#2D6A4F]"
              />
              <div>
                <h5 className="text-xs font-bold text-[#0F2D1F]">Priya Sharma</h5>
                <div className="flex text-amber-500 text-xs">★★★★★</div>
              </div>
            </div>
          </div>

          {/* 4 Stats Counters */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#143628] font-serif">10,000+</div>
              <div className="text-xs text-gray-500 mt-1">Happy Families</div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#143628] font-serif">50+</div>
              <div className="text-xs text-gray-500 mt-1">Traditional Products</div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#143628] font-serif">100+</div>
              <div className="text-xs text-gray-500 mt-1">Farmer Partners</div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#143628] font-serif">20+</div>
              <div className="text-xs text-gray-500 mt-1">States Sourced From</div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. LATEST BLOG POSTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A4F] flex items-center gap-1.5">
              <span>📖</span> FROM OUR BLOG
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2D1F] font-serif mt-1">
              Recipes, Tips & Healthy Living
            </h2>
          </div>

          <button
            onClick={() => navigateTo('blog')}
            className="text-xs sm:text-sm font-semibold text-[#2D6A4F] hover:text-[#143628] flex items-center gap-1 hover:underline"
          >
            <span>View All Blogs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => navigateTo('blog', { postId: post.id })}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer flex flex-col group"
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {post.date}
                  </span>
                  <h3 className="text-base font-bold text-[#0F2D1F] group-hover:text-[#2D6A4F] transition-colors mt-1.5 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center text-xs font-bold text-[#2D6A4F] group-hover:translate-x-1 transition-transform">
                  <span>Read More →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. WHATSAPP DIRECT CHAT BANNER */}
      <WhatsAppBanner />

    </div>
  );
}
