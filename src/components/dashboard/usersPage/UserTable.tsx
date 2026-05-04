"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { UserRow } from "./UserRow";



export const UserTable = () => (
  <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm overflow-hidden mt-8">
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-zinc-50/50">
            <th className="py-4 px-8 text-[12px] font-black text-zinc-400 uppercase tracking-widest">
              User
            </th>
            <th className="py-4 px-6 text-[12px] font-black text-zinc-400 uppercase tracking-widest">
              Role
            </th>
            <th className="py-4 px-6 text-[12px] font-black text-zinc-400 uppercase tracking-widest">
              Status
            </th>
            <th className="py-4 px-6 text-[12px] font-black text-zinc-400 uppercase tracking-widest">
              Join Date
            </th>
          </tr>
        </thead>
        <tbody>
          <UserRow
            name="Rivera"
            email="rivera@o2dashboard.com"
            role="Admin"
            status="Active"
            date="Oct 24, 2023"
          />
          <UserRow
            name="Chen"
            email="c.c@o2dashboard.com"
            role="Student"
            status="Active"
            date="Nov 12, 2023"
          />
          <UserRow
            name="Knight"
            email="knight@o2dashboard.com"
            role="Student"
            status="Inactive"
            date="Dec 21, 2023"
          />
          <UserRow
            name="Jordan Smyth"
            email="jordan@o2dashboard.com"
            role="Student"
            status="Pending"
            date="Jan 14, 2024"
          />
            <UserRow
            name="Elena Rodriguez"
            email="elena@o2dashboard.com"
            role="Admin"
            status="Active"
            date="Feb 2, 2024"
          />

        </tbody>
      </table>
    </div>
    {/* Pagination */}
    <div className="p-6 border-t border-zinc-50 flex items-center justify-between">
      <span className="text-sm font-bold text-zinc-400">
        Showing 1 to 5 of 1,284 users
      </span>
      <div className="flex gap-2">
        <button className="p-2 border border-zinc-200 rounded-xl">
          <ChevronLeft size={16} />
        </button>
        <button className="w-9 h-9 bg-indigo-600 text-white rounded-xl font-bold text-sm cursor-pointer">
          1
        </button>
        <button className="w-9 h-9 text-zinc-400  rounded-xl font-bold text-sm cursor-pointer">2</button>
        <button className="w-9 h-9 text-zinc-400   rounded-xl font-bold text-sm cursor-pointer">3</button>
        <button className="w-9 h-9 text-zinc-400 rounded-xl font-bold text-sm cursor-pointer">.....</button>
        <button className="w-9 h-9 text-zinc-400  rounded-xl font-bold text-sm cursor-pointer">257</button>
        <button className="p-2 border border-zinc-200 rounded-xl">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  </div>
);
