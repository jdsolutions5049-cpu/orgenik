import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import WhatsAppBanner from '../components/common/WhatsAppBanner';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const { navigateTo, addToast } = useApp();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: 'General Enquiry', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    addToast('Thank you! Your message has been sent to our Pune support desk.', 'success');
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EBF5EE] via-[#F4F9F5] to-[#EBF5EE] py-12 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D6A4F]">
              <span>📞</span> WE ARE HERE FOR YOU
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F2D1F] font-serif">
              Contact & Customer Care
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Have questions about traditional grain varieties, bulk farmer orders, or delivery tracking? Reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => navigateTo('home')} className="hover:text-[#2D6A4F]">Home</button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-[#143628] font-semibold">Contact Us</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Information & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 rounded-3xl border border-gray-100 shadow-card space-y-6">
              <h2 className="text-xl font-bold text-[#0F2D1F] font-serif">
                Pune Operations & Sourcing Hub
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#143628]">Address</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                      Orgenik Traditional Foods Pvt Ltd<br />
                      Gate No. 124, Near Kharadi-Wagholi Bypass,<br />
                      Pune - 412207, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#143628]">Phone Helpline</h4>
                    <p className="text-xs text-gray-500 mt-0.5">+91 98765 43210 (Mon - Sat: 9 AM - 7 PM)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#143628]">Email Support</h4>
                    <p className="text-xs text-gray-500 mt-0.5">support@orgenik.in / orders@orgenik.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2D6A4F] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#143628]">Direct WhatsApp</h4>
                    <p className="text-xs text-gray-500 mt-0.5">+91 98765 43210 (Instant product advisory)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-gray-100 shadow-card">
              <h2 className="text-xl font-bold text-[#0F2D1F] font-serif mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs text-gray-500 mb-6">
                Fill out the form below and our agronomy & customer care team will respond within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="p-8 text-center bg-[#F4F9F5] rounded-2xl border border-emerald-100 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#2D6A4F] mx-auto" />
                  <h3 className="text-base font-bold text-[#143628]">Message Received!</h3>
                  <p className="text-xs text-gray-600">
                    Thank you, {formData.name}. Our Pune team has received your inquiry and will reach out shortly.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: '', phone: '', email: '', subject: 'General Enquiry', message: '' }); }}
                    className="text-xs font-semibold text-[#2D6A4F] hover:underline"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rohan Patil"
                        className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D6A4F]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D6A4F]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D6A4F]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-700 block mb-1">Topic</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D6A4F]"
                      >
                        <option value="General Enquiry">General Product Enquiry</option>
                        <option value="Order Tracking">Order & Delivery Query</option>
                        <option value="Bulk Order">Bulk / Community Group Buying</option>
                        <option value="Farmer Partnership">Farmer Partnership / Sourcing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 block mb-1">Your Message</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your questions or product requirements here..."
                      className="w-full text-xs p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#2D6A4F]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Support</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      <WhatsAppBanner />
    </div>
  );
}
