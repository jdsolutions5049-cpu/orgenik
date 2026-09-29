import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export default function ToastContainer() {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 p-3.5 bg-[#143628] text-white rounded-2xl shadow-xl border border-emerald-600/30 text-xs sm:text-sm animate-in slide-in-from-bottom-5 duration-300"
        >
          {toast.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          ) : toast.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
          ) : (
            <Info className="w-5 h-5 text-blue-400 flex-shrink-0" />
          )}
          <span className="flex-1 font-medium">{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
