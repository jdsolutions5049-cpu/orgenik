import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Search, CheckCircle2, Clock, Truck, Package, MapPin, AlertCircle } from 'lucide-react';

export default function OrderTrackingModal() {
  const { trackingModalOrder, setTrackingModalOrder, openOrderTracking } = useApp();
  const [searchInput, setSearchInput] = useState('');

  if (!trackingModalOrder) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      openOrderTracking(searchInput.trim());
      setSearchInput('');
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'Out for Delivery':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Cancelled':
        return 'bg-gray-100 text-gray-700 border-gray-300';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setTrackingModalOrder(null)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#2D6A4F] flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0F2D1F]">
                  Order Tracking
                </h3>
                <p className="text-xs text-gray-500">
                  Live farm-to-doorstep updates
                </p>
              </div>
            </div>

            <button
              onClick={() => setTrackingModalOrder(null)}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search Another Order */}
          <form onSubmit={handleSearch} className="mt-4 flex gap-2">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Track another order (e.g. ORG123455)"
              className="flex-1 text-xs border border-gray-200 rounded-xl px-3 py-2 uppercase placeholder:normal-case focus:outline-none focus:border-[#2D6A4F]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#143628] hover:bg-[#2D6A4F] text-white text-xs font-semibold rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Track</span>
            </button>
          </form>

          {/* Order Details Overview */}
          <div className="mt-5 p-4 rounded-2xl bg-[#F4F9F5] border border-emerald-100 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] text-gray-500 uppercase tracking-wider block">
                Order ID
              </span>
              <span className="text-base font-bold text-[#143628]">
                #{trackingModalOrder.id}
              </span>
              <span className="text-xs text-gray-500 block">
                Placed on {trackingModalOrder.date}
              </span>
            </div>

            <div className="text-right">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadge(trackingModalOrder.status)}`}>
                {trackingModalOrder.status}
              </span>
              <div className="text-xs font-medium text-gray-600 mt-1">
                {trackingModalOrder.deliveryDate}
              </div>
            </div>
          </div>

          {/* Timeline Stepper */}
          <div className="mt-6">
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-4">
              Shipment Journey
            </h4>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-200">
              {trackingModalOrder.trackingSteps ? (
                trackingModalOrder.trackingSteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-3">
                    <div
                      className={`absolute -left-6 top-0.5 w-4 h-4 rounded-full flex items-center justify-center border-2 ${
                        step.completed
                          ? step.cancelled
                            ? 'bg-red-500 border-red-500 text-white'
                            : 'bg-[#2D6A4F] border-[#2D6A4F] text-white'
                          : step.current
                          ? 'bg-amber-500 border-amber-500 text-white animate-pulse'
                          : 'bg-white border-gray-300'
                      }`}
                    >
                      {step.completed && !step.cancelled && (
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-baseline justify-between">
                        <span
                          className={`text-sm font-semibold ${
                            step.completed
                              ? step.cancelled
                                ? 'text-red-700'
                                : 'text-[#0F2D1F]'
                              : 'text-gray-400'
                          }`}
                        >
                          {step.title}
                        </span>
                        <span className="text-[11px] text-gray-500 ml-2">
                          {step.date}
                        </span>
                      </div>
                      {step.current && (
                        <p className="text-xs text-amber-700 mt-0.5">
                          Package is on the delivery vehicle and expected before 7:00 PM.
                        </p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-xs text-gray-500">Tracking updates are syncing...</div>
              )}
            </div>
          </div>

          {/* Items In This Order */}
          {trackingModalOrder.items && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="text-xs font-bold text-gray-600 block mb-2">
                Items in package ({trackingModalOrder.items.length})
              </span>
              <div className="space-y-1.5 text-xs text-gray-700">
                {trackingModalOrder.items.map((it, i) => (
                  <div key={i} className="flex justify-between py-1 border-b border-gray-50">
                    <span>
                      {it.name} <strong className="text-gray-900">× {it.qty} {it.unit || 'kg'}</strong>
                    </span>
                    <span className="font-semibold">₹{it.price * it.qty}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 pt-3 text-center">
            <button
              onClick={() => setTrackingModalOrder(null)}
              className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-xl transition-colors"
            >
              Close Tracking Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
