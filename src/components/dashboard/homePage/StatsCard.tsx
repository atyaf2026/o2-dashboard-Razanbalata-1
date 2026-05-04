import { TrendingUp } from "lucide-react";
import React from "react";

type Variant = "success" | "info" | "danger";

interface StatsCardProps {
  title: string;
  value: string;
  percentage?: string;
  subtitle?: string;
  progress?: number;
  variant?: Variant;
  icon?: React.ReactNode;
  status?: string;
}

function StatsCard({
  title,
  value,
  percentage,
  subtitle,
  progress = 0,
  variant = "success", // success | info | danger
  icon,
  status,
}: StatsCardProps) {
  const variants = {
    success: {
      bg: "bg-green-50",
      text: "text-green-600",
      bar: "bg-green-500",
    },
    info: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      bar: "bg-blue-500",
    },
    danger: {
      bg: "bg-red-50",
      text: "text-red-600",
      bar: "bg-red-500",
    },
  };

  const current = variants[variant];

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      {/* Top */}
      <div className="flex justify-between items-start mb-4">
        {/* Icon */}
        <div className={`${current.bg} p-2 rounded-lg`}>
          <div className={`${current.text} text-lg`}>{icon}</div>
        </div>

        {/* Right badge */}
        {percentage && (
          <div className={`${current.bg} px-2 py-1 rounded-xl`}>
            <p className={`${current.text} text-sm font-semibold`}>
              {percentage}
            </p>
          </div>
        )}

        {status && (
          <div className="bg-blue-100 px-2 py-1 rounded-xl">
            <p className="text-blue-600 text-sm font-semibold">{status}</p>
          </div>
        )}
      </div>

      {/* Title + Value */}
      <p className="text-gray-500 text-md my-2">{title}</p>
      <h4 className="text-2xl font-bold my-2">{value}</h4>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-400 text-sm flex items-center gap-1">
          <TrendingUp />

          {subtitle}
        </p>
      )}

      {/* Progress */}
      {progress > 0 && (
        <div className="bg-gray-100 rounded-full h-1.5 mt-4 overflow-hidden">
          <div
            className={`${current.bar} h-full rounded-full transition-all duration-500`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default StatsCard;
