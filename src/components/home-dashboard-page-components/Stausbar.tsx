import { Menu, Bell, Search } from "lucide-react";
import { useLocation } from "react-router-dom";

interface StatusBarProps {
  onToggleSidebar: () => void;
}

export function StatusBar({ onToggleSidebar }: StatusBarProps) {
  const location = useLocation();

  // Decide URL path
  const getHeaderInfo = () => {
    const path = location.pathname;

    if (path.includes("/settings")) {
      return {
        title: "Account",
        placeholder: "Search settings...",
      };
    }

    if (path.includes("/courses")) {
      return {
        title: "My Courses",
        placeholder: "Search modules/resources...",
      };
    }

    // Default: Dashboard
    return {
      title: "Dashboard",
      placeholder: "Search courses...",
    };
  };

  const { title, placeholder } = getHeaderInfo();

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center px-4 justify-between w-full shrink-0">
      <div className="flex items-center gap-4">
        {/* Toggle Button */}
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-slate-100 text-blue-600 transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Dynamic Title */}
        <h2 className="font-semibold text-slate-700 hidden sm:block">
          {title}
        </h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            // Dynamic Placeholder
            placeholder={placeholder}
            className="pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
          />
        </div>
        <button className="p-2 text-slate-400 hover:text-slate-600 relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>
  );
}
