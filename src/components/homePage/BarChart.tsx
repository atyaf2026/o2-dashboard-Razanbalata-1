"use client";

import { BarChart, Bar, ResponsiveContainer, Cell } from "recharts";

const data = [
  { value: 30 },
  { value: 50 },
  { value: 20 },
  { value: 60 },
  { value: 45 },
  { value: 35 },
  { value: 55 },
  { value: 25 },
  { value: 60 },
  { value: 40 },
  { value: 35 },
  { value: 65 },
];

const colors = [
  "#E5E7EB",
  "#D1D5DB",
  "#C7D2FE",
  "#6366F1",
  "#CBD5F5",
  "#E5E7EB",
  "#818CF8",
  "#E5E7EB",
  "#6366F1",
  "#CBD5F5",
  "#E5E7EB",
  "#4F46E5",
];

const TinyBarChart = () => {
  return (
    <div className="lg:col-span-2 md:col-span-2 w-full bg-white border rounded-xl p-4 flex flex-col gap-4">
      
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-normal text-zinc-400">System Performance</h4>
          <p className="text-md font-bold">99.9% Uptime</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2  p-1 rounded-lg text-sm">
          <button className="px-2 py-1 bg-gray-100 rounded-md shadow font-bold">
            24h
          </button>
          <button className="px-2 py-1 text-gray-500">
            7d
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Bar dataKey="value" radius={[2, 2, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default TinyBarChart;