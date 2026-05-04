"use client";
import React from "react";
import { Camera } from "lucide-react";
import Image from "next/image";

export const ProfileSection = () => (
  <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
    <h3 className="text-xl font-bold text-zinc-900">Profile Information</h3>
    <p className="text-zinc-500 text-sm mb-8 mt-1">
      Update your account's profile information and email address.
    </p>

    <div className="flex flex-col md:flex-row gap-12">
      {/* Avatar Upload */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
            <Image
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              width={50}
              height={50}
            />
          </div>
          <button className="absolute bottom-1 right-1 bg-indigo-600 p-2 rounded-full text-white shadow-lg border-2 border-white hover:bg-indigo-700 transition-all">
            <Camera size={16} />
          </button>
        </div>
        <div className="text-center">
          <p className="text-xs font-bold text-zinc-800">Profile Photo</p>
          <p className="text-[10px] text-zinc-400 mt-1 uppercase">
            JPG or PNG. Max 2MB.
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700">Name</label>
          <input
            type="text"
            defaultValue="Mohammed Alhalabi"
            className="w-full p-3 px-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all font-medium"
          />
          <p className="text-[10px] text-zinc-400">
            Your real name as it will appear on reports.
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700">
            Email Address
          </label>
          <input
            type="email"
            defaultValue="mohammed.h@o2.edu"
            className="w-full p-3 px-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all font-medium"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-zinc-700">Bio</label>
          <textarea
            rows={4}
            className="w-full p-3 px-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all font-medium resize-none"
            placeholder="Brief description for your profile..."
          />
        </div>
      </div>
    </div>
  </div>
);
