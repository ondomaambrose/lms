import { User } from "lucide-react";
import { useUser } from "@/context/UserContext";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function Profile() {
  const { user } = useUser();
  return (
    <Card className="border-none shadow-sm bg-white">
      <CardHeader className="border-b border-slate-50">
        <CardTitle className="text-lg font-bold text-green-900 flex items-center gap-2">
          <User className="h-5 w-5 text-blue-600" /> Public Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs font-bold uppercase text-slate-400">
              Full Name
            </Label>
            <p className="text-sm font-medium p-3 bg-slate-50 rounded-md border border-slate-100 min-h-[44px] flex items-center text-slate-700">
              {user?.name || "No name provided"}
            </p>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs font-bold uppercase text-slate-400">
              Email Address
            </Label>
            <p className="text-sm font-medium p-3 bg-slate-50 rounded-md border border-slate-100 min-h-[44px] flex items-center text-slate-700">
              {user?.email || "No email provided"}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50/50 py-3">
        <Button
          variant="outline"
          className="text-blue-600 border-blue-200 hover:bg-blue-50"
        >
          Update Profile Info
        </Button>
      </CardFooter>
    </Card>
  );
}
