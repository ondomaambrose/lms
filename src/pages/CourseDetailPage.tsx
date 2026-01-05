import { useParams } from "react-router-dom";
import { BookOpen } from "lucide-react";

import { courses as coursesData } from "@/data/courses";
import ModuleItem from "@/components/course-details-page-components/ModuleItem";
import CourseResources from "@/components/course-details-page-components/CourseResources";
import CourseDetailsPageHeader from "@/components/course-details-page-components/HeaderComponent";

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const course = coursesData.find((c) => c.id === courseId);

  if (!course) return <div className="p-8">Course not found.</div>;

  return (
    <>
      <title>{course.title} | Course Details</title>
      <link rel="icon" href="course.png" />
      <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
        {/* Header Section */}
        <CourseDetailsPageHeader course={course} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold text-green-800 flex items-center gap-2 mb-6">
              <BookOpen className="h-5 w-5 text-blue-500" />
              Course Curriculum
            </h2>

            <div className="space-y-3">
              {course.modules.map((module, index) => (
                <ModuleItem
                  key={index}
                  title={module}
                  isCompleted={index < 2}
                />
              ))}
            </div>
          </div>

          {/* Resources */}
          <CourseResources />
        </div>
      </div>
    </>
  );
}
