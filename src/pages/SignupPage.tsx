import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { CustomFormField } from "@/components/CustomFormField";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";
import { UseUser } from "@/context/UserContext"; // Correct hook usage
import { SocialAuth } from "@/components/SocialAuth";

const signupSchema = z
  .object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function SignupPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // 1. USE THE HOOK CORRECTLY
  const { signUp } = UseUser();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signupSchema>) {
    setIsLoading(true);

    try {
      // 2. CALL THE SIGNUP FROM THE HOOK
      await signUp(values.email, values.password, values.fullName);

      alert(
        "Account created! Please check your email for a confirmation link."
      );
      navigate("/dashboard");
    } catch (error: Error | unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "An error occurred during signup";
      alert(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center py-10 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animations.pageItem}
        className="bg-green-500 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="text-green-100 text-sm mt-2">Join our community</p>
        </div>
        <SocialAuth />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <CustomFormField
              control={form.control}
              name="fullName"
              label="Full Name"
              placeholder="John Doe"
            />
            <CustomFormField
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="john@example.com"
              type="email"
            />
            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Create a password"
              type="password"
            />
            <CustomFormField
              control={form.control}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Repeat password"
              type="password"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 mt-4 transition-all active:scale-95"
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-green-100 mt-6">
          Already have an account?{" "}
          <Link
            to="/login
          "
            className="font-bold text-white hover:underline"
          >
            Login
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
