import Profile from "@/components/settings-page-components/Profile";
import SecuritySection from "@/components/settings-page-components/SecuritySection";
import AccountStatus from "@/components/settings-page-components/AccountStatus";

export default function SettingsPage() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-green-900 tracking-tight">
          Account Settings
        </h1>
        <p className="text-slate-500 mt-1">
          Manage your profile, security, and notification preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile & Security */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <Profile />

          {/* Security Section */}
          <SecuritySection />
        </div>

        <div className="space-y-6">
          <AccountStatus />
        </div>
      </div>
    </div>
  );
}
