import { Download, Filter } from "lucide-react";
import { StatCard } from "./StatCard";

export default function UsersManagementPage() {
  return (
    <div className="bg-[#fbfbfc] min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900">Users Management</h1>
          <p className="text-zinc-500 font-medium">
            Manage trainee accounts, roles, and platform permissions.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 cursor-pointer bg-white border border-zinc-200 rounded-lg font-bold text-sm flex items-center gap-2">
            <Filter size={18} /> Filter
          </button>
          <button className="px-5 py-2.5 cursor-pointer bg-white border border-zinc-200 rounded-lg font-bold text-sm flex items-center gap-2">
            <Download size={18}/>
            Export
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard label="Total Users" value="1,284" change="+12%" />
        <StatCard label="Active Now" value="432" hasDot />
        <StatCard label="Pending Invites" value="18" />
        <StatCard label="New Trainees" value="54" />
      </div>
    </div>
  );
}
