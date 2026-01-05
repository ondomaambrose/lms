import { LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function DashboardNav() {
  const location = useLocation();
  return (
    <>
      <Link
        to="/dashboard"
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
          location.pathname === "/dashboard"
            ? "bg-blue-600 text-white shadow-lg"
            : "hover:bg-green-800 text-green-100"
        )}
      >
        <LayoutDashboard
          className={cn(
            "h-5 w-5",
            location.pathname === "/dashboard"
              ? "text-white"
              : "text-green-300 group-hover:text-blue-400"
          )}
        />
        <span className="font-medium text-white">Dashboard</span>
      </Link>
    </>
  );
}
