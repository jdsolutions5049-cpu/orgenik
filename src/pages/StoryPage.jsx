import React from 'react';
import { useApp } from '../context/AppContext';
import WhatsAppBanner from '../components/common/WhatsAppBanner';
import { ChevronRight, ArrowRight, ShieldCheck, Heart, Users, Wheat, Award, Sprout } from 'lucide-react';

export default function StoryPage() {
  const { navigateTo } = useApp();

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EBF5EE] via-[#F4F9F5] to-[#EBF5EE] py-12 sm:py-16 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              <span>🌾</span> THE ORGENIK HERITAGE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F2D1F] font-serif leading-tight">
              Reviving India's Ancient Grains & Empowering Soil Caretakers
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We began with a single question: Why did our plates lose the rich aroma of Ambemohar rice, the resilience of Solapuri Bajra, and the gentle nourishment of unpolished farm dals?
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigateTo('home')} className="hover:text-[#2D6A4F]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#143628] font-semibold">Our Story</span>
        </nav>
      </div>

      {/* Narrative Section 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=800&q=80"
                alt="Farmer partners in green fields"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#143628] text-white p-4 rounded-2xl shadow-xl max-w-xs border border-emerald-500/20 text-xs">
              <span className="font-bold block text-sm">100+ Farming Families</span>
              <span className="text-emerald-200">Across Sangli, Solapur, Latur & Kolhapur clusters</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F2D1F] font-serif">
              Fair Trade, Soil Regeneration & Clean Heritage Seeds
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              In modern agribusiness, middlemen pocket up to 60% of the produce value while chemical fertilizers degrade native soil biology. Orgenik was established to reverse this cycle.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We contract directly with smallholder farmers before sowing season, guaranteeing minimum price ceilings well above wholesale mandis. In return, our farming partners commit to natural composting, cow dung enrichment (Jeevamrut), and native heritage seeds without GM modification.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-2xl font-extrabold text-[#2D6A4F] font-serif">35-45%</div>
                <div className="text-xs text-gray-600 mt-1">Higher farmer income realization</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-2xl font-extrabold text-[#2D6A4F] font-serif">Zero</div>
                <div className="text-xs text-gray-600 mt-1">Synthetic chemical sprays or polish</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Integrity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4F9F5] rounded-3xl p-8 sm:p-12 border border-emerald-100">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-[#0F2D1F] font-serif">Our Non-Negotiable Standards</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">What reaches your kitchen table is tested for absolute purity.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center text-xl">🌱</div>
              <h4 className="text-sm font-bold text-[#143628]">Heirloom Native Seeds</h4>
              <p className="text-xs text-gray-500">Naturally adapted to drought and high nutrition density.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center text-xl">☀️</div>
              <h4 className="text-sm font-bold text-[#143628]">Sun-Dried Processing</h4>
              <p className="text-xs text-gray-500">Slow solar drying preserves volatile essential vitamins.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center text-xl">🛡</div>
              <h4 className="text-sm font-bold text-[#143628]">Zero Chemical Polish</h4>
              <p className="text-xs text-gray-500">No marble powder, oil glaze, or toxic yellow chromates.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-emerald-100 text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center text-xl">📦</div>
              <h4 className="text-sm font-bold text-[#143628]">Hygienic Packaging</h4>
              <p className="text-xs text-gray-500">Graded and sealed at our certified facility in Pune.</p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppBanner />
    </div>
  );
}
