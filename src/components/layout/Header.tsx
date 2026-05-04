"use client";
import { BellDot, CircleQuestionMark, Save, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

export function Header() {
  const path = usePathname();
  console.log(path);
  return (
    <header className="h-20 border-b bg-white flex items-center justify-between px-8 sticky top-0 z-10">
      {path == "/settings" ? (
        <h1 className="text-xl font-bold text-zinc-800">Settings</h1>
      ) : (
        <div className="flex-1 max-w-xl">
          <div className="relative group">
            <div className="w-full h-11 bg-zinc-100 rounded-lg flex items-center px-4 text-zinc-500 text-sm border border-transparent focus-within:border-indigo-500 focus-within:bg-white transition-all">
              <span className="mr-2">
                <Search />
              </span>
              <p className="hidden sm:block">
                header content (search analytics...)
              </p>
            </div>
          </div>
        </div>
      )}
      {path == "/settings" ? (
        <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
          <Save />
          <p>Save Changes</p>
        </button>
      ) : (
        <div className="flex items-center gap-2 sm:gap-6 ">
          <div className="flex items-center gap-2 sm:gap-4 text-zinc-400">
            <span className="cursor-pointer hover:text-zinc-600">
              <BellDot />
            </span>
            {path !== "/users" && <span className="cursor-pointer hover:text-zinc-600">
              <CircleQuestionMark />
            </span>}
          </div>
          <button className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
            <span>+</span> Add
          </button>
        </div>
      )}
    </header>
  );
}
