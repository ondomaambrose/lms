import { useState } from "react";
import type { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";

interface CustomProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
}

export const CustomFormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: CustomProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-green-800 font-medium">{label}</FormLabel>

          <FormControl>
            <div className="relative">
              <Input
                type={isPassword ? (showPassword ? "text" : "password") : type}
                placeholder={placeholder}
                {...field}
                className="bg-white text-black border-none focus:ring-blue-500 h-12 pr-10"
              />

              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800"
                >
                  {showPassword ? (
                    <Eye size={18} className="text-blue-700" />
                  ) : (
                    <EyeOff size={18} className="text-blue-700" />
                  )}
                </button>
              )}
            </div>
          </FormControl>

          <FormMessage className="text-red-600 font-bold pt-2" />
        </FormItem>
      )}
    />
  );
};
