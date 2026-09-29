import React from 'react';
import Logo from '../common/Logo';
import { useApp } from '../../context/AppContext';
import { Phone, Mail, MapPin, Compass } from 'lucide-react';

export default function Footer({ onOpenPolicy }) {
  const { navigateTo, setSelectedCategory, openOrderTracking } = useApp();

  return (
    <footer className="bg-[#143628] text-white pt-16 pb-8 border-t border-emerald-900/40 relative overflow-hidden">
      {/* Decorative organic background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo light={true} />
            <p className="text-emerald-100/80 text-sm leading-relaxed max-w-sm mt-3">
              Traditional Indian grains, rice, pulses, seeds and spices sourced directly from farmers. Good food for a healthier tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D6A4F] flex items-center justify-center text-emerald-200 hover:text-white transition-all transform hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D6A4F] flex items-center justify-center text-emerald-200 hover:text-white transition-all transform hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D6A4F] flex items-center justify-center text-emerald-200 hover:text-white transition-all transform hover:scale-105"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#2D6A4F] flex items-center justify-center text-emerald-200 hover:text-white transition-all transform hover:scale-105 font-bold text-sm"
              >
                P
              </a>
            </div>

            {/* Direct Farmer Support Pledge */}
            <div className="mt-4 p-3.5 bg-white/5 rounded-2xl border border-white/10 text-xs text-emerald-200/90 flex items-center gap-2.5">
              <span className="text-lg">🌾</span>
              <span>100% fair prices paid directly to Maharashtra & Indian farmers without middleman cuts.</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-300 mb-4 font-sans">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/70">
              <li>
                <button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => navigateTo('products')} className="hover:text-white transition-colors">Products</button>
              </li>
              <li>
                <button onClick={() => navigateTo('categories')} className="hover:text-white transition-colors">Categories</button>
              </li>
              <li>
                <button onClick={() => navigateTo('story')} className="hover:text-white transition-colors">Our Story</button>
              </li>
              <li>
                <button onClick={() => navigateTo('blog')} className="hover:text-white transition-colors">Blog</button>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Contact</button>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-300 mb-4 font-sans">
              Categories
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/70">
              <li>
                <button onClick={() => { setSelectedCategory('millets'); navigateTo('products'); }} className="hover:text-white transition-colors">
                  Millets & Grains
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('rice'); navigateTo('products'); }} className="hover:text-white transition-colors">
                  Rice Varieties
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('pulses'); navigateTo('products'); }} className="hover:text-white transition-colors">
                  Pulses & Legumes
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('oilseeds'); navigateTo('products'); }} className="hover:text-white transition-colors">
                  Oilseeds
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('spices'); navigateTo('products'); }} className="hover:text-white transition-colors">
                  Spices
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('processed'); navigateTo('products'); }} className="hover:text-white transition-colors">
                  Processed Foods
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedCategory('all'); navigateTo('products'); }} className="hover:text-white transition-colors font-medium text-emerald-300">
                  All Products
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support & Contact Us Column */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-300 mb-4 font-sans">
              Customer Support
            </h3>
            <ul className="space-y-2.5 text-sm text-emerald-100/70 mb-6">
              <li>
                <button onClick={() => openOrderTracking('ORG123456')} className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Track Order</span>
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy && onOpenPolicy('Shipping Policy')} className="hover:text-white transition-colors">Shipping Policy</button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy && onOpenPolicy('Return & Refund')} className="hover:text-white transition-colors">Return & Refund</button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy && onOpenPolicy('FAQ')} className="hover:text-white transition-colors">FAQ</button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy && onOpenPolicy('Terms & Conditions')} className="hover:text-white transition-colors">Terms & Conditions</button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy && onOpenPolicy('Privacy Policy')} className="hover:text-white transition-colors">Privacy Policy</button>
              </li>
            </ul>

            <h3 className="text-sm font-semibold tracking-wider uppercase text-emerald-300 mb-3 font-sans">
              Contact Us
            </h3>
            <div className="space-y-2 text-xs text-emerald-100/80">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>support@orgenik.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <div>
            © 2026 Orgenik. All rights reserved. Handcrafted with pride in Maharashtra.
          </div>

          {/* Payment Badges (UPI, VISA, Mastercard, RuPay) as requested */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-emerald-300/80 mr-1 font-medium">100% Secure Payments:</span>
            
            {/* UPI Badge */}
            <div className="px-2 py-1 bg-white rounded flex items-center justify-center font-bold text-[10px] text-green-800 shadow-sm border border-gray-200">
              UPI
            </div>

            {/* VISA Badge */}
            <div className="px-2 py-1 bg-white rounded flex items-center justify-center font-bold italic text-[11px] text-blue-900 shadow-sm border border-gray-200">
              VISA
            </div>

            {/* Mastercard Badge */}
            <div className="px-2 py-1 bg-white rounded flex items-center justify-center font-bold text-[10px] text-red-600 shadow-sm border border-gray-200 flex items-center gap-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block opacity-90 -mr-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block opacity-90" />
            </div>

            {/* RuPay Badge */}
            <div className="px-2 py-1 bg-white rounded flex items-center justify-center font-bold text-[10px] text-emerald-900 shadow-sm border border-gray-200">
              RuPay
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
