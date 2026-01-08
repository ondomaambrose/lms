import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CustomFormField } from "@/components/CustomFormField";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UseUser } from "@/context/UserContext"; // Standardized naming
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = UseUser();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);

    try {
      // 1. Call the real login from your Context
      await login({
        email: values.email,
        password: values.password,
      });

      // 2. Only navigate if login was successful
      navigate("/dashboard");
    } catch (error: unknown) {
      // 3. Handle errors (e.g., "Invalid login credentials")
      alert(
        error instanceof Error
          ? error.message
          : "Failed to login. Please check your credentials."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center py-20 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animations.pageItem}
        className="bg-green-500 p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
          <p className="text-green-100 text-sm mt-2">
            Enter your details to access your courses
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <CustomFormField
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="email@example.com"
              type="email"
            />
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 rounded-lg mt-4 shadow-lg shadow-blue-900/20"
            >
              {isLoading ? "Authenticating..." : "Login"}
            </Button>

            {/* Optional: Add the Google Login button here since you wanted OAuth */}
          </form>
        </Form>

        <p className="text-center text-sm text-green-100 mt-8">
          Don't have an account?{" "}
          <Link to="/" className="font-bold text-white hover:underline">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
