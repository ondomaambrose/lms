import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export default function SecuritySection() {
  return (
    <Card className="border-none shadow-sm bg-white">
      <CardHeader className="border-b border-slate-50">
        <CardTitle className="text-lg font-bold text-green-900 flex items-center gap-2">
          <Lock className="h-5 w-5 text-blue-600" /> Password & Security
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <p className="font-bold text-slate-900">Change Password</p>
            <p className="text-sm text-slate-500">
              Update your account password regularly for safety.
            </p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 whitespace-nowrap">
            Change Password
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
