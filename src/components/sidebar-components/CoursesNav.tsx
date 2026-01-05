import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "@/data/courses";
import { Link } from "react-router-dom";
import { Folder, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

export default function CoursesNav() {
  const location = useLocation();
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  return (
    <>
      <div className="space-y-1">
        <button
          onClick={() => setIsCoursesOpen(!isCoursesOpen)}
          className="flex items-center justify-between w-full gap-3 px-4 py-3 rounded-lg hover:bg-green-800 text-green-100 transition-all group"
        >
          <div className="flex items-center gap-3">
            <Folder className="h-5 w-5 text-green-300 group-hover:text-blue-400" />
            <span className="font-medium text-white">Your Courses</span>
          </div>
          <motion.div
            animate={{ rotate: isCoursesOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-4 w-4 opacity-70" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isCoursesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-1 ml-4 border-l border-blue-500 pl-2 space-y-1">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    to={`/dashboard/courses/${course.id}`}
                    className={cn(
                      "block px-4 py-2 text-sm rounded-md transition-all",
                      location.pathname.includes(course.id)
                        ? "bg-blue-600 text-white"
                        : "text-green-100 hover:bg-green-800 hover:text-white"
                    )}
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
