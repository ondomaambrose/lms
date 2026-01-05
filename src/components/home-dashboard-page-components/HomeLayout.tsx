import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { StatusBar } from "./Stausbar";
import { cn } from "@/lib/utils";

export function HomeLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden relative">
      <aside
        className={cn(
          "bg-green-500 text-white transition-all duration-300 ease-in-out h-full overflow-hidden border-r border-white/10 relative",
          isOpen ? "w-64" : "w-0"
        )}
      >
        <div className="w-64 h-full">
          <Sidebar />
        </div>
      </aside>

      {/* 3. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <StatusBar onToggleSidebar={() => setIsOpen(!isOpen)} />
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
