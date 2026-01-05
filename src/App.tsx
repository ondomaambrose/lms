import { BrowserRouter as Router, Routes, Route } from "react-router"; // or react-router-dom
import LoginPage from "@/pages/LoginPage";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import { HomeLayout } from "./components/HomeLayout";
import DashboardHome from "./pages/HomePage";
import CourseDetailPage from "./pages/CourseDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/dashboard" element={<HomeLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="courses/:courseId" element={<CourseDetailPage />} />
        </Route>

        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
