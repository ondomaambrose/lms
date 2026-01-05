import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";

export default function AccountStatus() {
  return (
    <motion.div
      variants={animations.pageItem}
      initial="hidden"
      animate="visible"
    >
      <Card className="bg-blue-600 text-white border-none shadow-lg overflow-hidden relative">
        <CardContent className="p-6 text-center space-y-3 relative z-10">
          <ShieldCheck className="h-12 w-12 mx-auto text-blue-200" />
          <h3 className="font-bold text-lg">Account Verified</h3>
          <p className="text-xs text-blue-100">Checked and Honored</p>
        </CardContent>
        {/* Decorative background circle */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500 rounded-full opacity-50" />
      </Card>
    </motion.div>
  );
}
