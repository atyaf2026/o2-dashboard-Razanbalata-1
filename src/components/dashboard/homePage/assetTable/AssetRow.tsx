"use client";
import { MoreVertical, Database, Cloud, Shield, AlertCircle } from "lucide-react";
import { Asset } from "./types";

const iconMap = {
  database: { Icon: Database, color: "text-indigo-600", bg: "bg-indigo-50" },
  storage: { Icon: Cloud, color: "text-blue-600", bg: "bg-blue-50" },
  infrastructure: { Icon: Shield, color: "text-amber-600", bg: "bg-amber-50" },
  performance: { Icon: AlertCircle, color: "text-red-600", bg: "bg-red-50" },
};

const statusStyles: Record<string, string> = {
  Operational: "text-emerald-600 bg-emerald-50",
  Active: "text-blue-600 bg-blue-50",
  Maintenance: "text-amber-600 bg-amber-50",
  Degraded: "text-red-600 bg-red-50",
};

export function AssetRow({ asset }: { asset: Asset }) {
  const { Icon, color, bg } = iconMap[asset.iconType];

  return (
    <tr className="hover:bg-zinc-50/50 transition-colors group">
      <td className="px-8 py-5">
        <div className="flex items-center gap-4">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${bg}`}>
            <Icon size={18} className={color} />
          </div>
          <span className="font-bold text-zinc-900">{asset.name}</span>
        </div>
      </td>
      <td className="px-6 py-5 text-sm font-medium text-zinc-500">{asset.category}</td>
      <td className="px-6 py-5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] font-black text-zinc-500 border border-white shadow-sm">
            {asset.owner.initials}
          </div>
          <span className="text-sm font-bold text-zinc-700">{asset.owner.name}</span>
        </div>
      </td>
      <td className="px-6 py-5">
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-tight ${statusStyles[asset.status]}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${statusStyles[asset.status].split(' ')[0].replace('text', 'bg')}`} />
          {asset.status}
        </div>
      </td>
      <td className="px-6 py-5 text-sm font-medium text-zinc-500">{asset.date}</td>
      <td className="px-8 py-5 text-right">
        <button className="p-2 text-zinc-300 hover:text-zinc-600 transition-colors">
          <MoreVertical size={20} />
        </button>
      </td>
    </tr>
  );
}