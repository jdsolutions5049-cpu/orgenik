import React from 'react';
import { useApp } from '../context/AppContext';
import WhatsAppBanner from '../components/common/WhatsAppBanner';
import { ChevronRight, ArrowRight, ShieldCheck, Heart, Award, Sparkles, Sprout } from 'lucide-react';

export default function AboutPage() {
  const { navigateTo } = useApp();

  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EBF5EE] via-[#F4F9F5] to-[#EBF5EE] py-12 sm:py-16 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              <span>🌱</span> ABOUT ORGENIK
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F2D1F] font-serif leading-tight">
              Preserving Indian Agricultural Roots, One Grain at a Time
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Orgenik is an ethical food movement founded in Maharashtra with a simple mission: reconnecting urban households with pure, native traditional staples directly grown by local farmers.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigateTo('home')} className="hover:text-[#2D6A4F]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#143628] font-semibold">About Us</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF5EE] text-[#2D6A4F] flex items-center justify-center font-bold text-xl">
              🌾
            </div>
            <h3 className="text-lg font-bold text-[#0F2D1F]">Indigenous Biodiversity</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              We conserve over 40+ endangered native seed varieties including Ambemohar rice, Beed Jowar, and Konkan Nachni, preventing indigenous crop extinction.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF5EE] text-[#2D6A4F] flex items-center justify-center font-bold text-xl">
              🤝
            </div>
            <h3 className="text-lg font-bold text-[#0F2D1F]">Direct Farmer Dignity</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              By cutting out exploitative brokers and commission agents, 100% of the produce value stays within rural farming clusters.
            </p>
          </div>

          <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#EBF5EE] text-[#2D6A4F] flex items-center justify-center font-bold text-xl">
              💚
            </div>
            <h3 className="text-lg font-bold text-[#0F2D1F]">Holistic Health</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Our unpolished grains retain natural germ and bran layers, giving modern families unadulterated fiber, plant protein, and essential micronutrients.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppBanner />
    </div>
  );
}
