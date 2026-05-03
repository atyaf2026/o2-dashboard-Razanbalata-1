"use client";
import React from "react";
import { ShoppingBag } from "lucide-react";

// بيانات وهمية تحاكي الموجود في الصورة
const orders = [
  { id: "#3492", time: "2 minutes ago", amount: "$24.00", status: "Paid", color: "bg-emerald-50 text-emerald-600" },
  { id: "#3491", time: "1 hour ago", amount: "$1,120.00", status: "Pending", color: "bg-amber-50 text-amber-600" },
  { id: "#3492", time: "3 hours ago", amount: "$84.50", status: "Paid", color: "bg-emerald-50 text-emerald-600" },
  { id: "#3489", time: "Yesterday", amount: "$342.00", status: "Canceled", color: "bg-zinc-100 text-zinc-500" },
];

export function RecentOrders() {
  return (
    <div className="bg-white border border-zinc-100 rounded-3xl p-6 shadow-sm flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-zinc-900">Recent Orders</h3>
        <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
          View all
        </button>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Icon Container */}
              <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center text-zinc-400">
                <ShoppingBag size={22} />
              </div>
              
              {/* Order Info */}
              <div className="flex flex-col">
                <span className="font-bold text-zinc-900 text-[15px]">Order {order.id}</span>
                <span className="text-zinc-400 text-sm">{order.time}</span>
              </div>
            </div>

            {/* Price and Status */}
            <div className="flex flex-col items-end gap-1">
              <span className="font-bold text-zinc-900 text-[15px]">{order.amount}</span>
              <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${order.color}`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Card/Banner at the bottom */}
      <div className="mt-2 h-44 bg-gradient-to-br from-zinc-200 to-zinc-300 rounded-2xl w-full opacity-60">
        {/* هذا المربع يمثل الجزء الرمادي في أسفل الصورة */}
      </div>
    </div>
  );
}