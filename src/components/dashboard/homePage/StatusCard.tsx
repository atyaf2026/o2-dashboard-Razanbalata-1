"use client";
import React from "react";
import { MoreHorizontal, LucideIcon } from "lucide-react";

interface StatusCardProps {
  title: string;
  subtitle: string;
  icon: LucideIcon; 
  iconBg: string;   
  children: React.ReactNode;
  hasDot?: boolean; 
  hasMore?: boolean;
}

export function StatusCard({ 
  title, 
  subtitle, 
  icon: Icon, 
  iconBg, 
  children, 
  hasDot, 
  hasMore 
}: StatusCardProps) {
  return (
    <div className="bg-white border border-zinc-100 rounded-3xl p-6 shadow-sm flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center`}>
            <Icon className="text-inherit" size={24} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
            <p className="text-zinc-400 text-sm font-medium">{subtitle}</p>
          </div>
        </div>
        
        {hasDot && <div className="w-3 h-3 bg-emerald-500 rounded-full" />}
        {hasMore && (
          <button className="text-zinc-400 hover:text-zinc-600 transition-colors">
            <MoreHorizontal size={20}/>
          </button>
        )}
      </div>

      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

interface StatusItemProps {
  label: string;
  sublabel?: string;   
  badge: string;
  badgeColor: string;
  isTask?: boolean;    
}

export function StatusItem({ 
  label, 
  sublabel, 
  badge, 
  badgeColor, 
  isTask = false 
}: StatusItemProps) {
  return (
    <div className={`flex items-center justify-between p-1  ${isTask ? 'items-start' : 'items-center bg-[#F8FAFC] rounded-lg p-2'}`}>
      <div className="flex items-center gap-4">
        {isTask && (
          <input 
            type="checkbox" 
            className="w-5 h-5 rounded-md border border-[#C7D2FE] cursor-pointer" 
          />
        )}
        <div className="flex flex-col">
          <span className="font-bold text-zinc-800 text-[15px]">{label}</span>
          {sublabel && <span className="text-zinc-400 text-xs">{sublabel}</span>}
        </div>
      </div>
      
      <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm ${badgeColor}`}>
        {badge}
      </span>
    </div>
  );
}