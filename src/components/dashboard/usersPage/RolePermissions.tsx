import { GraduationCap, Shield } from "lucide-react";

// Role Permissions Card
export const RolePermissions = () => (
  <div className="bg-white p-5 h-fit rounded-3xl border border-zinc-100 shadow-sm flex-1">
    <h3 className="text-xl font-bold text-zinc-900 mb-6">Role Permissions</h3>
    <div className="space-y-4">
      {["Administrator", "Standard Student"].map((role) => (
        <div
          key={role}
          className="flex items-center justify-between p-2 bg-zinc-50 rounded-2xl group cursor-pointer hover:bg-zinc-100 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-indigo-600 text-lg">
                {role == "Administrator" ? <Shield /> : <GraduationCap />}
              </span>
            </div>
            <span className="font-bold text-zinc-800">{role}</span>
          </div>
          <button className="text-sm font-bold text-indigo-600">
            Edit Policy
          </button>
        </div>
      ))}
    </div>
  </div>
);
