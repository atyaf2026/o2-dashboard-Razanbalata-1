export const UserRow = ({ name, email, role, status, date }: any) => {
  const statusColors: any = {
    Active: "text-emerald-600 bg-emerald-50",
    Pending: "text-amber-600 bg-amber-50",
    Inactive: "text-zinc-400 bg-zinc-50",
  };

  return (
    <tr className="border-b border-zinc-50 last:border-0 hover:bg-zinc-50/50 transition-colors">
      <td className="py-5 px-8">
        <div className="flex flex-col">
          <span className="font-bold text-zinc-900">{name}</span>
          <span className="text-xs text-zinc-400">{email}</span>
        </div>
      </td>
      <td className="py-5 px-6">
        <span className="px-3 py-1 rounded-lg bg-[#E5EEFF] text-indigo-600 text-xs font-bold">
          {role}
        </span>
      </td>
      <td className="py-5 px-6">
        <div
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-black uppercase ${statusColors[status]}`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${status === "Active" ? "bg-emerald-500" : status === "Pending" ? "bg-amber-500" : "bg-zinc-300"}`}
          />
          {status}
        </div>
      </td>
      <td className="py-5 px-6 text-sm text-zinc-500 font-medium">{date}</td>
    </tr>
  );
};
