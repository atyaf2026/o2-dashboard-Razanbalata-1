// Blue Invite Banner
export const InviteBanner = () => (
  <div className="bg-indigo-600 p-5 h-fit rounded-3xl shadow-xl shadow-indigo-200 text-white relative overflow-hidden">
    <div className="relative z-10">
      <h3 className="text-2xl font-bold mb-2">Invite your entire cohort</h3>
      <p className="text-indigo-100 text-md mb-8 leading-relaxed">
        Import users directly from CSV or sync with your existing learning
        management system.
      </p>
      <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-bold text-sm shadow-lg hover:bg-indigo-50 transition-all">
        Bulk Upload Users
      </button>
    </div>
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
  </div>
);
