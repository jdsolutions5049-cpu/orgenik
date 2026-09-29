import React from 'react';
import { useApp } from '../../context/AppContext';
import { Truck, Sparkles, Users, HelpCircle, User, Compass, Languages } from 'lucide-react';

export default function TopBar() {
  const { navigateTo, user, openOrderTracking, language, setLanguage } = useApp();

  return (
    <div className="bg-[#143628] text-white/90 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Announcements */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-6 text-[11px] sm:text-xs tracking-wide">
          <div className="flex items-center gap-1.5">
            <Truck className="w-3.5 h-3.5 text-emerald-300" />
            <span>Free shipping on orders above <strong className="text-white font-semibold">₹999</strong></span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
            <span>100% Natural & Native Products</span>
          </div>
          <span className="hidden sm:inline text-white/20">|</span>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-300" />
            <span>Direct from Farmers</span>
          </div>
        </div>

        {/* Right Links & Switchers */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          {/* Quick Track Order */}
          <button
            onClick={() => openOrderTracking('ORG123455')}
            className="hover:text-emerald-300 transition-colors flex items-center gap-1"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Track Order</span>
          </button>

          <span className="text-white/20">|</span>

          {/* Quick Help */}
          <button
            onClick={() => navigateTo('contact')}
            className="hover:text-emerald-300 transition-colors flex items-center gap-1"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help</span>
          </button>

          <span className="text-white/20">|</span>

          {/* User Account / Login */}
          <button
            onClick={() => navigateTo('account')}
            className="hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-medium"
          >
            <span className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">
              {user.avatarInitials}
            </span>
            <span className="truncate max-w-[100px]">{user.name.split(' ')[0]}</span>
          </button>

          <span className="text-white/20">|</span>

          {/* Bilingual Switcher */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
            className="flex items-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-[11px] font-medium text-emerald-200 transition-colors"
            title="Toggle English / Marathi"
          >
            <Languages className="w-3 h-3" />
            <span>{language === 'en' ? 'मराठी' : 'English'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
