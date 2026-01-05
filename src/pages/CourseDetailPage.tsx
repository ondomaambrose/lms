import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle2, FileText } from "lucide-react";

// This would usually be in a separate data file
const coursesData = [
  {
    id: "ift-211",
    title: "IFT 211",
    description: "Digital and Logic Design",
    modules: [
      "Introduction to Binary",
      "Logic Gates",
      "Flip-Flops",
      "Counters",
    ],
  },
];

export default function CourseDetailPage() {
  const { courseId } = useParams(); // This gets the "ift-211" from the URL

  // Find the specific course data based on the URL ID
  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return <div className="p-8">Course not found.</div>;
  }

  return (
    <div className="p-8 space-y-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-green-900">{course.title}</h1>
          <p className="text-slate-500">{course.description}</p>
        </div>
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm uppercase">
          Enrolled
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-green-800 flex items-center gap-2">
            <BookOpen className="h-5 w-5" /> Course Modules
          </h2>

          {course.modules.map((module, index) => (
            <Card
              key={index}
              className="border-none shadow-sm hover:border-l-4 hover:border-blue-500 transition-all"
            >
              <CardContent className="p-4 flex justify-between items-center">
                <span className="font-medium">{module}</span>
                <CheckCircle2 className="h-5 w-5 text-slate-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold text-green-800 flex items-center gap-2">
            <FileText className="h-5 w-5" /> Resources
          </h2>
          <Card className="bg-white border-none shadow-sm">
            <CardContent className="p-4">
              <p className="text-sm text-slate-600">
                No resources uploaded yet.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
