// Danger Zone
export const DangerZone = () => (
  <div className="bg-[#FEE2E2] p-8 rounded-3xl border border-rose-100 mt-6 flex items-center justify-between">
    <div>
      <h3 className="text-lg font-bold text-rose-900">Delete Account</h3>
      <p className="text-rose-600 text-sm mt-1">
        Once you delete your account, there is no going back. Please be certain.
      </p>
    </div>
    <button className="px-6 py-2.5 bg-rose-600 text-white rounded-xl font-bold text-sm hover:bg-rose-700 shadow-lg shadow-rose-200">
      Deactivate
    </button>
  </div>
);
