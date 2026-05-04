"use client";
import { Sun, Moon, Check } from "lucide-react";

export const AppearanceSection = () => (
  <div className="bg-white p-8 py-12 rounded-3xl border border-zinc-100 shadow-sm mt-6">
    <h3 className="text-xl font-bold text-zinc-900">Appearance</h3>
    <p className="text-zinc-500 text-sm mb-8 mt-1">Customize how the dashboard looks and feels to suit your workspace.</p>

    <div className="space-y-8">
      {/* Theme Toggle */}
      <div className="space-y-4">
        <label className="text-sm font-bold text-zinc-700">Dashboard Theme</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-2 border-indigo-600 bg-indigo-50/30 p-4 rounded-2xl flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600"><Sun size={20}/></div>
              <div>
                <p className="text-sm font-bold text-zinc-900">Light Mode</p>
                <p className="text-[10px] text-zinc-500">Default bright workspace</p>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border-4 border-indigo-600 bg-white" />
          </div>
          
          <div className="border-2 border-zinc-100 p-4 rounded-2xl flex items-center justify-between cursor-pointer hover:border-zinc-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 rounded-lg shadow-sm text-white"><Moon size={20}/></div>
              <div>
                <p className="text-sm font-bold text-zinc-900">Dark Mode</p>
                <p className="text-[10px] text-zinc-500">Easier on the eyes at night</p>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border-2 border-zinc-200" />
          </div>
        </div>
      </div>

      {/* Primary Color */}
      <div className="space-y-4">
        <label className="text-sm font-bold text-zinc-700">Primary Brand Color</label>
        <div className="flex gap-4">
          {['bg-indigo-600', 'bg-emerald-500', 'bg-rose-500', 'bg-amber-500', 'bg-zinc-900'].map((color, i) => (
            <div key={i} className={`w-10 h-10 ${color} rounded-full cursor-pointer flex items-center justify-center transition-transform hover:scale-110`}>
              {i === 0 && <Check size={16} className="text-white" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);