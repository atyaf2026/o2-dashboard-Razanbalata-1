interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  hasDot?: boolean;
}

export const StatCard = ({ label, value, change, hasDot }: StatCardProps) => (
  <div className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm flex-1">
    <p className="text-[11px] font-black text-zinc-400 uppercase tracking-widest mb-2">
      {label}
    </p>
    <div className="flex items-center gap-2">
      <h3 className="text-3xl font-bold text-zinc-900">{value}</h3>
      {change && (
        <span className="text-xs font-bold text-emerald-500">{change}</span>
      )}
      {hasDot && (
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
      )}
    </div>
  </div>
);
