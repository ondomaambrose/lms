import { Menu, Bell, Search } from "lucide-react";

interface StatusBarProps {
  onToggleSidebar: () => void; // This is the function passed from the layout
}

export function StatusBar({ onToggleSidebar }: StatusBarProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 justify-between w-full">
      <div className="flex items-center gap-4">
        {/* Toggle Button */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-slate-100 text-slate-600 transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>

        <h2 className="font-semibold text-slate-700 hidden sm:block">
          LMS Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search courses..."
            className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          />
        </div>
        <button className="p-2 text-slate-400 hover:text-slate-600">
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
