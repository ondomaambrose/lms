"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/CustomFormField";
import { Link, useNavigate } from "react-router-dom";
import { UseUser } from "@/context/UserContext";

// Validation schema with Password Matching
const signupSchema = z
  .object({
    name: z.string().min(2, "At least your surname and first name required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function SignupPage() {
  const { login } = UseUser();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
  });

  function onSubmit(values: z.infer<typeof signupSchema>) {
    console.log("Signup Data:", values.email, values.name);

    // Send data to Global Memory until backend is ready
    login({ email: values.email, name: values.name });

    // Redirect to Dashboard
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center items-center py-12 px-4">
      <div className="bg-green-400 p-10 rounded-xl shadow-sm border border-slate-200 w-full max-w-md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Create an account
          </h2>
          <p className="text-green-800 mt-2">
            Welcome to the{" "}
            <span className="font-bold"> ultimate experience </span>
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <CustomFormField
              control={form.control}
              name="name"
              label="Full Name"
              placeholder="John Doe"
            />

            <CustomFormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="email@example.com"
              type="email"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="••••••"
                type="password"
              />
              <CustomFormField
                control={form.control}
                name="confirmPassword"
                label="Confirm"
                placeholder="••••••"
                type="password"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-800 h-12 text-base font-medium mt-4 text-white"
            >
              Register
            </Button>
          </form>
        </Form>

        <p className="text-center text-sm text-slate-600 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-slate-900 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
