// Notification Card
export const NotificationSummary = () => (
  <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm mt-6 flex items-center justify-between">
    <div>
      <h3 className="text-xl font-bold text-zinc-900">Notifications</h3>
      <p className="text-zinc-500 text-sm mt-1">
        Current: All email notifications enabled
      </p>
    </div>
    <button className="px-5 py-2.5 border border-zinc-200 rounded-xl font-bold text-sm hover:bg-zinc-50">
      Manage
    </button>
  </div>
);
