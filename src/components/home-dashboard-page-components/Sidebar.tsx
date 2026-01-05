import DashboardNav from "../sidebar-components/DashboardNav";
import CoursesNav from "../sidebar-components/CoursesNav";
import AccountNav from "../sidebar-components/AccountNav";
import { Layers } from "lucide-react";
import SidebarFooter from "../sidebar-components/SidebarFooter";

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
      <SidebarFooter />
    </aside>
  );
}
