import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";

interface ModuleItemProps {
  title: string;
  isCompleted?: boolean;
}

export default function ModuleItem({
  title,
  isCompleted = false,
}: ModuleItemProps) {
  return (
    <motion.div
      variants={animations.pageItem}
      initial="hidden"
      animate="visible"
    >
      <Card className="border-none shadow-sm hover:border-l-4 hover:border-blue-500 transition-all cursor-pointer group bg-white">
        <CardContent className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Status Icon */}
            {isCompleted ? (
              <CheckCircle2 className="h-5 w-5 text-blue-500" />
            ) : (
              <Circle className="h-5 w-5 text-slate-300 group-hover:text-blue-400 transition-colors" />
            )}
            <span
              className={cn(
                "font-medium transition-colors",
                isCompleted ? "text-slate-500 line-through" : "text-slate-900"
              )}
            >
              {title}
            </span>
          </div>

          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
            View Details
          </span>
        </CardContent>
      </Card>
    </motion.div>
  );
}
