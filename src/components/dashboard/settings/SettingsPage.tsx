import { Bell, Monitor, Shield, User } from 'lucide-react';
import React from 'react';

function SettingsPage() {

 const navItems = [
    {
        name: 'Profile',
        icon:User
    },
    {
        name: 'Notifications',
        icon: Bell 
    },
    {
        name: 'Security',
        icon:Shield
    },
    {
        name: 'Appearance',
        icon:Monitor
    }
 ];

  return (
    <div className="flex bg-[#F8F9FF] min-h-screen">
        {/* Sidebar Navigation */}
      <div className="w-64 border-r border-zinc-100 p-6 hidden lg:block">
         <nav className="space-y-2">
            {navItems.map((item) => (
              <button key={item.name} className={`flex w-full text-left p-3 px-4 rounded-xl font-bold text-sm transition-all ${item.name === 'Profile' ? 'bg-white shadow-sm text-indigo-600 border border-zinc-100' : 'text-zinc-400 hover:text-zinc-600'}`}>
                  {React.createElement(item.icon, { size: 18, className: 'inline-block mr-3' })}
                  <p>{item.name}</p>
              </button>
            ))}
         </nav>
      </div>
    </div>
  );
}

export default SettingsPage;
