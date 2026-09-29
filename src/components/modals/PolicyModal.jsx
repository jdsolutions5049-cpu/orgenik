import React from 'react';
import { X, ShieldCheck, Truck, RefreshCw, FileText, Lock } from 'lucide-react';

export default function PolicyModal({ policyTitle, onClose }) {
  if (!policyTitle) return null;

  const getPolicyContent = (title) => {
    switch (title) {
      case 'Shipping Policy':
        return {
          icon: <Truck className="w-6 h-6 text-[#2D6A4F]" />,
          subtitle: 'Safe & Hygienic Farm Delivery Across India',
          content: [
            'All native grains and spices are vacuum-packed in biodegradable moisture-proof bags to prevent insect infestation without any chemical fumigation.',
            'Orders above ₹999 qualify for FREE standard doorstep shipping throughout Maharashtra and all major Indian metro hubs.',
            'Standard delivery timelines: Pune & Mumbai: 24-48 hours. Rest of Maharashtra: 2-3 business days. Pan-India: 4-6 business days.',
            'Tracking notifications are sent automatically via SMS and WhatsApp once the package leaves our Pune grading center.'
          ]
        };
      case 'Return & Refund':
        return {
          icon: <RefreshCw className="w-6 h-6 text-[#2D6A4F]" />,
          subtitle: '100% Quality & Freshness Guarantee',
          content: [
            'If you receive an open seal, damaged bag, or are unsatisfied with the purity of any grain or pulse, we offer a hassle-free 7-day return or immediate replacement.',
            'To request a return, simply message our WhatsApp support (+91 98765 43210) with your Order ID and photo of the issue.',
            'Refunds are processed back to your original payment method (UPI / Bank Card) within 24-48 hours of verification.'
          ]
        };
      case 'Privacy Policy':
        return {
          icon: <Lock className="w-6 h-6 text-[#2D6A4F]" />,
          subtitle: 'Your Personal Data is 100% Confidential',
          content: [
            'We value your privacy. We strictly never sell, rent, or lease customer contact information to third-party telemarketers.',
            'Your address and phone number are utilized exclusively for delivering your orders and dispatching essential SMS/WhatsApp delivery updates.',
            'All online payments are processed through RBI-authorized payment gateways using 256-bit SSL bank-grade encryption.'
          ]
        };
      case 'Terms & Conditions':
      default:
        return {
          icon: <FileText className="w-6 h-6 text-[#2D6A4F]" />,
          subtitle: 'Ethical Direct Farmer-to-Consumer Guidelines',
          content: [
            'Orgenik acts as a fair-trade bridge connecting smallholder agriculturalists directly to conscious urban families.',
            'Because our products are 100% natural, minor variations in grain shade, seed size, and natural aroma may occur between seasonal harvests.',
            'All products are certified free from artificial colorings, synthetic food waxes, and toxic pesticide residues.'
          ]
        };
    }
  };

  const details = getPolicyContent(policyTitle);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center">
                {details.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0F2D1F] font-serif">
                  {policyTitle}
                </h3>
                <p className="text-xs text-gray-500">
                  {details.subtitle}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-5 space-y-3.5">
            {details.content.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 leading-relaxed bg-[#FBFDFB] p-3 rounded-xl border border-gray-100">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-[#2D6A4F] flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p>{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-3 text-center">
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-xl transition-colors shadow"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
