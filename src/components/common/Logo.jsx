import React from 'react';
import { useApp } from '../../context/AppContext';

export default function Logo({ className = '', light = false }) {
  const { navigateTo } = useApp();

  return (
    <div 
      onClick={() => navigateTo('home')} 
      className={`flex items-center gap-3 cursor-pointer group select-none ${className}`}
    >
      {/* Handcrafted Organic Leaves Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300 group-hover:scale-105">
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Main Leaf */}
          <path
            d="M8 38C12 22 26 12 40 8C38 22 28 36 12 40C10 40.5 8 39.5 8 38Z"
            fill={light ? "#86EFAC" : "#2D6A4F"}
          />
          {/* Accent smaller leaf */}
          <path
            d="M10 36C18 36 28 30 34 20C26 22 18 28 10 36Z"
            fill={light ? "#4ADE80" : "#52B788"}
          />
          {/* Leaf vein */}
          <path
            d="M12 37C20 28 30 20 38 12"
            stroke={light ? "#143628" : "#EBF5EE"}
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`text-2xl font-bold tracking-tight font-serif transition-colors ${
          light ? 'text-white' : 'text-[#0F2D1F] group-hover:text-[#2D6A4F]'
        }`}>
          Orgenik
        </span>
        <span className={`text-[9.5px] font-semibold tracking-[0.22em] uppercase -mt-1 font-sans ${
          light ? 'text-emerald-300' : 'text-[#2D6A4F]'
        }`}>
          Traditional Foods
        </span>
      </div>
    </div>
  );
}
