import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function CourseDetailsPageHeader({
  course,
}: {
  course: { title: string; description: string };
}) {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
        <div className="space-y-2">
          <Link
            to="/dashboard"
            className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:underline uppercase tracking-tighter"
          >
            <ArrowLeft className="h-3 w-3" /> Back to Dashboard
          </Link>
          <h1 className="text-4xl font-extrabold text-green-900 tracking-tight">
            {course.title}
          </h1>
          <p className="text-slate-500 max-w-xl">{course.description}</p>
        </div>

        <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg shadow-blue-200">
          Enrolled Student
        </div>
      </div>
    </>
  );
}
