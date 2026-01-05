import { CourseCard } from "@/components/home-dashboard-page-components/CourseCard";

//import course data, delete when using backend data
import { courses } from "@/data/courses";

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-green-900 tracking-tight">
            System Overview
          </h1>
          <p className="text-slate-500 mt-1">
            Track your academic progress and upcoming tasks.
          </p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-sm font-bold text-green-900">Semester 1</p>
          <p className="text-xs text-slate-500">Academic Year 2025/2026</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
