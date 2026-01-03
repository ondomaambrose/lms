import type { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-gray-300 font-medium">{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className="bg-white text-black border-none focus:ring-blue-500 h-12" // h-12 for better touch targets
            />
          </FormControl>
          <FormMessage className="text-red-400 font-bold pt-2" />
        </FormItem>
      )}
    />
  );
};
