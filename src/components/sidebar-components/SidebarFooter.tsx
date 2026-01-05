import { LogOut, User } from "lucide-react";
import { getInitials } from "@/utilities/getInitials"; // Import the utility function
import { UseUser } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";

export default function SidebarFooter() {
  const navigate = useNavigate();
  const { user, logout } = UseUser();

  const handleLogout = () => {
    logout(); // This clears the state and localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="p-4 border-t border-white space-y-4">
      {/* User Info Section */}
      <div className="flex items-center gap-3 px-2 py-1">
        <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold border border-white/20">
          {user?.name ? getInitials(user.name) : <User className="h-4 w-4" />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate leading-none">
            {user?.name || "User"}
          </p>
          <p className="text-[10px] text-green-100 truncate mt-1">
            {user?.email}
          </p>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-600 transition-all font-medium hover:bg-red-300"
      >
        <LogOut className="h-5 w-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}
