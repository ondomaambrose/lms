import DashboardNav from "../sidebar-components/DashboardNav";
import CoursesNav from "../sidebar-components/CoursesNav";
import AccountNav from "../sidebar-components/AccountNav";
import { LogOut, Layers } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 bg-green-500 border-r border-white flex flex-col h-full text-white">
      {/* Sidebar Header */}
      <div className="p-6">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Layers className="text-blue-600" />
          <span>LMS Name</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {/* Navigation Items */}
        <DashboardNav />
        <CoursesNav />
        <AccountNav />
      </nav>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-white">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-500 hover:bg-red-950/30 transition-colors">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
