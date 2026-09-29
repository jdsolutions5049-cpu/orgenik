import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export default function WhatsAppBanner() {
  const { addToast } = useApp();

  const handleWhatsAppClick = () => {
    // Open WhatsApp link or simulate customer support chat
    const phone = '919876543210';
    const message = encodeURIComponent('Hello Orgenik Team! I have a question regarding traditional native grains & orders.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    addToast('Connecting to Orgenik WhatsApp Support... 💬', 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#143628] via-[#1b4332] to-[#2D6A4F] p-6 sm:p-8 text-white shadow-xl">
        {/* Subtle decorative leaf watermark */}
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5 text-center sm:text-left">
            {/* WhatsApp Icon Circle */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-900/30">
              <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif tracking-tight">
                Need Help Choosing a Product?
              </h3>
              <p className="text-emerald-100/90 text-sm sm:text-base mt-1">
                Chat with our farming team on WhatsApp for product suggestions, bulk orders, or custom questions.
              </p>
            </div>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="flex-shrink-0 inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-semibold text-sm sm:text-base rounded-full shadow-lg shadow-black/20 hover:shadow-xl transition-all duration-200 group"
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
