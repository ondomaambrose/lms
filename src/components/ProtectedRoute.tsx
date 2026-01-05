import { Navigate, Outlet } from "react-router-dom";
import { UseUser } from "@/context/UserContext";

export default function ProtectedRoute() {
  const { user } = UseUser();

  // If there is no user in our context, kick them to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If the user exists, allow them to proceed
  return <Outlet />;
}
