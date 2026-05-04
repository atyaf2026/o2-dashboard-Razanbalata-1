"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 400 },
  { name: "Jul", value: 900 },
];

function OverTimeChart() {
  return (
    <div className="lg:col-span-2 border border-zinc-100 rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h4 className="font-bold text-2xl text-zinc-900">Performance Over Time</h4>
            <p className="text-zinc-500 font-medium">Transaction volume compared to last month</p>
          </div>
          <select className="text-sm font-semibold p-2.5 px-5 bg-white border border-zinc-200 rounded-2xl outline-none text-zinc-600 shadow-sm">
            <option value="month">Monthly</option>
            <option value="day">Daily</option>
          </select>
        </div>

        {/* Chart Area */}
        <div className="h-[300px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.01} />
                </linearGradient>
              </defs>
              
              {/* الخطوط المنقطة في الخلفية */}
              <CartesianGrid 
                vertical={false} 
                strokeDasharray="3 3" 
                stroke="#f1f1f4" 
              />
              
              <XAxis dataKey="name" hide />
              <YAxis hide domain={[0, 1000]} />
              
              <Tooltip 
                cursor={{ stroke: '#6366f1', strokeWidth: 1 }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />

              {/* خطوط المرجع الملونة كما في الصورة */}
              <ReferenceLine y={600} stroke="#0ea5e9" strokeWidth={2} />
              <ReferenceLine y={200} stroke="#cbd5e1" strokeWidth={1} />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#chartGradient)"
                animationDuration={1500}
              />
            </AreaChart>
          </ResponsiveContainer>
          
          {/* Badge التوضيحي الصغير في منتصف الرسم (اختياري) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg">
             563.33 × 0
          </div>
        </div>

        {/* Footer Stats */}
        <div className="grid grid-cols-4 gap-4 pt-4 border-t border-zinc-50">
          <StatBox label="USERS" value="2.4k" />
          <StatBox label="CLICK RATE" value="18.2%" />
          <StatBox label="BOUNCE" value="24%" />
          <StatBox label="GOAL" value="Reached" isHighlight />
        </div>
      </div>
    </div>
  );
}

function StatBox({ label, value, isHighlight }: { label: string; value: string; isHighlight?: boolean }) {
  return (
    <div className="text-center space-y-2">
      <p className="text-[11px] font-bold text-zinc-400 tracking-widest">{label}</p>
      <p className={`text-xl font-bold ${isHighlight ? 'text-indigo-600' : 'text-zinc-800'}`}>
        {value}
      </p>
    </div>
  );
}

export default OverTimeChart;