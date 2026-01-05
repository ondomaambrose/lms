import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { BookOpen, Clock, ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  description: string;
  completed: number;
  pending: number;
  progress: number; // e.g., 75
}

export function CourseCard({
  title,
  description,
  completed,
  pending,
  progress,
}: CourseCardProps) {
  return (
    <Card className="hover:shadow-md transition-all border-none shadow-sm overflow-hidden group bg-white">
      <CardHeader className="bg-white pb-4">
        <div className="flex justify-between items-start">
          <div className="p-2 bg-blue-50 rounded-lg">
            <GraduationCap className="h-6 w-6 text-blue-600" />
          </div>
          <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">
            Active
          </span>
        </div>
        <CardTitle className="pt-4 text-xl font-bold text-green-900 group-hover:text-blue-600 transition-colors uppercase">
          {title}
        </CardTitle>
        <p className="text-sm text-slate-500 font-medium">{description}</p>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-500">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">
                Completed
              </span>
            </div>
            <p className="text-2xl font-bold text-slate-900">
              {completed}{" "}
              <span className="text-sm text-slate-400 font-normal">topics</span>
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">
                Pending
              </span>
            </div>
            <p className="text-2xl font-bold text-blue-600">
              {pending.toString().padStart(2, "0")}{" "}
              <span className="text-sm text-blue-300 font-normal">tasks</span>
            </p>
          </div>
        </div>

        {/* Your Custom Progress Bar (Blue on Red) */}
        <div className="mt-6 w-full bg-red-600 h-2 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </CardContent>

      <CardFooter className="bg-slate-50/50 border-t border-slate-100 py-3">
        <Button
          variant="ghost"
          className="w-full justify-between text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-2"
        >
          View Course Details
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
