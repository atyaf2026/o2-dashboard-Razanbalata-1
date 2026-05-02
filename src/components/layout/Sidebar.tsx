"use client";
import React, { useState, useEffect } from "react";
import {
  BarChart3,
  Users,
  FileText,
  Settings,
  LogOut,
  MessageCircleQuestionMark,
  ChevronLeft,
  ChevronRight,
  House,
} from "lucide-react";
import Image from "next/image";

export function Sidebar() {
  // نجعل الحالة الافتراضية true ليكون مصغراً في الموبايل والتابلت
  const [isCollapsed, setIsCollapsed] = useState(true);

  const menuItems = [
    { name: "Overview", icon: <House  size={20} />, active: true },
    { name: "Analytics", icon: <BarChart3 size={20} /> },
    { name: "Users", icon: <Users size={20} /> },
    { name: "Reports", icon: <FileText size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];
  

  return (
    <aside
      className={`
        sticky top-0 left-0 z-40 bg-white border-r flex flex-col h-screen shrink-0
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-20" : "w-72"}
      `}
    >
      {/* الهيدر */}
      <div className="p-4 h-20 flex items-center justify-between overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex-shrink-0 flex items-center justify-center text-white font-bold">
            S
          </div>
          {!isCollapsed && (
            <h2 className="font-bold text-xl tracking-tight text-zinc-900 animate-in fade-in duration-500">
              StyleAI
            </h2>
          )}
        </div>
        
        {/* زر التحكم - يظهر دائماً للتبديل بين الحالتين */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 hover:bg-zinc-100 rounded-md text-zinc-500 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* القائمة */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto overflow-x-hidden">
        {menuItems.map((item) => (
          <button
            key={item.name}
            title={isCollapsed ? item.name : ""}
            className={`w-full flex items-center gap-3 p-3 rounded-lg font-medium transition-all group
              ${item.active
                  ? "bg-indigo-50 text-indigo-700"
                  : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900"
              }
              ${isCollapsed ? "justify-center" : ""}
            `}
          >
            <div className="flex-shrink-0">{item.icon}</div>
            {!isCollapsed && (
              <span className="truncate animate-in slide-in-from-left-2 duration-300">
                {item.name}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* الجزء السفلي */}
      <div className="p-3 border-t space-y-1">
        <div className={`flex items-center gap-3 p-2 rounded-lg ${isCollapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-zinc-200 rounded-full flex-shrink-0 border-2 border-indigo-100 overflow-hidden relative">
            <Image src="/user.jpg" alt="User" fill className="object-cover" />
          </div>
          {!isCollapsed && (
            <div className="text-sm truncate animate-in fade-in duration-500">
              <p className="font-semibold text-zinc-900 truncate">Mohammed Alhalabi</p>
              <p className="text-zinc-500 text-xs truncate">Frontend Dev</p>
            </div>
          )}
        </div>

        <button 
          title={isCollapsed ? "Support" : ""}
          className={`w-full flex items-center gap-3 p-3 text-sm text-zinc-500 hover:bg-zinc-100 rounded-lg transition-colors ${isCollapsed ? 'justify-center' : ''}`}
        >
          <MessageCircleQuestionMark size={20} />
          {!isCollapsed && <span>Support</span>}
        </button>

        <button 
           title={isCollapsed ? "Logout" : ""}
           className={`w-full flex items-center gap-3 p-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors ${isCollapsed ? 'justify-center' : ''}`}
        >
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}