import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";

export default function CourseResources() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-green-800 flex items-center gap-2">
        <FileText className="h-5 w-5 text-blue-500" /> Resources
      </h2>
      <motion.div
        variants={animations.pageItem}
        initial="hidden"
        animate="visible"
      >
        <Card className="bg-white border-none shadow-sm">
          <CardContent className="p-6">
            <div className="text-center py-4">
              <div className="bg-slate-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-slate-400" />
              </div>
              <p className="text-sm font-medium text-slate-600">
                No downloadable files yet.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Check back after your first lecture.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
