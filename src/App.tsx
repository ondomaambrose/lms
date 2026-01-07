import { Routes, Route } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import { HomeLayout } from "./components/home-dashboard-page-components/HomeLayout";
import DashboardHome from "./pages/DashboardHomePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import SettingsPage from "./pages/SettingsPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route index element={<SignupPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<HomeLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="courses/:courseId" element={<CourseDetailPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
