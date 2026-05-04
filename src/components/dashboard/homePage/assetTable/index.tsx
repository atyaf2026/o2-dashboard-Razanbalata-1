"use client";
import React from "react";
import { Filter, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { AssetRow } from "./AssetRow";
import { Asset } from "./types";

const STATIC_ASSETS: Asset[] = [
  { id: '1', name: "Main DB Cluster (NA-Z1)", category: "Database", owner: { name: "John Doe", initials: "JD" }, status: "Operational", date: "Oct 22, 2023", iconType: "database" },
  { id: '2', name: "Static CDN Assets (EU-W)", category: "Storage", owner: { name: "M. Alhalabi", initials: "MA" }, status: "Active", date: "Oct 18, 2023", iconType: "storage" },
  { id: '3', name: "Legacy Auth Gateway", category: "Infrastructure", owner: { name: "Sarah K.", initials: "SK" }, status: "Maintenance", date: "Oct 15, 2023", iconType: "infrastructure" },
  { id: '4', name: "Redis Cache Node Z4", category: "Performance", owner: { name: "System", initials: "ST" }, status: "Degraded", date: "Oct 14, 2023", iconType: "performance" },
];

export default function AssetTable() {
  return (
    <div className="bg-white border border-zinc-100 rounded-3xl shadow-sm overflow-hidden w-full">
      {/* Table Header Section */}
      <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900">Asset Distribution</h2>
          <p className="text-zinc-500 font-medium mt-1">Detailed inventory and status across geographic regions</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 border border-zinc-200 rounded-xl text-zinc-600 font-bold text-sm hover:bg-zinc-50 transition-all">
            <Filter size={18} /> Filter
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 rounded-xl text-white font-bold text-sm hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
            <Download size={18} /> Export CSV
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-y border-zinc-50 bg-zinc-50/30">
              <th className="px-8 py-4 text-[11px] font-black text-zinc-400 uppercase tracking-widest">Asset Name</th>
              <th className="px-6 py-4 text-[11px] font-black text-zinc-400 uppercase tracking-widest">Category</th>
              <th className="px-6 py-4 text-[11px] font-black text-zinc-400 uppercase tracking-widest">Owner</th>
              <th className="px-6 py-4 text-[11px] font-black text-zinc-400 uppercase tracking-widest">Status</th>
              <th className="px-6 py-4 text-[11px] font-black text-zinc-400 uppercase tracking-widest">Date</th>
              <th className="px-8 py-4 text-[11px] font-black text-zinc-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {STATIC_ASSETS.map((asset) => (
              <AssetRow key={asset.id} asset={asset} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="p-6 border-t border-zinc-50 flex items-center justify-between">
        <p className="text-sm font-bold text-zinc-400">Showing 4 of 24 assets</p>
        <div className="flex items-center gap-2">
           <button className="p-2 text-zinc-400 hover:bg-zinc-50 rounded-lg"><ChevronLeft size={20}/></button>
           <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-50 text-zinc-900 font-bold text-sm border border-zinc-200">1</button>
           <button className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 font-bold text-sm hover:bg-zinc-50">2</button>
           <button className="w-8 h-8 flex items-center justify-center rounded-lg text-zinc-400 font-bold text-sm hover:bg-zinc-50">3</button>
           <button className="p-2 text-zinc-400 hover:bg-zinc-50 rounded-lg"><ChevronRight size={20}/></button>
        </div>
      </div>
    </div>
  );
}