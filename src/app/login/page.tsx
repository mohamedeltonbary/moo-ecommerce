"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginSchemaType } from "@/schema/login.schema";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  async function handleSubmit(values: LoginSchemaType) {
    try {
      setIsSubmitting(true);

      const res = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: "/",
      });

      if (res?.error) {
        toast.error(res.error, {
          position: "top-center",
          duration: 2000,
          style: { background: "#ef4444", color: "#fff" },
        });
        return;
      }

      if (res?.ok) {
        toast.success("Welcome Back!", {
          position: "top-center",
          duration: 2000,
          style: { background: "#10b981", color: "#fff" },
        });

        router.push("/");
        router.refresh();
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-slate-50/50">
      <div className="w-full max-w-[500px] bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-2">
            Welcome <span className="text-emerald-600">Back</span>
          </h1>
          <p className="text-slate-500 font-medium">Please enter your details to login</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-slate-700 ml-1">Email Address</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="name@example.com" 
                      {...field} 
                      className="h-12 rounded-2xl border-slate-200 focus:border-emerald-500 transition-all shadow-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs ml-1" />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between items-center ml-1">
                    <FormLabel className="font-bold text-slate-700">Password</FormLabel>
                    <Link href="/forgot-password"  className="text-xs font-bold text-emerald-600 hover:text-emerald-700">
                       Forgot?
                    </Link>
                  </div>
                  <FormControl>
                    <Input 
                      type="password" 
                      placeholder="••••••••" 
                      {...field} 
                      className="h-12 rounded-2xl border-slate-200 focus:border-emerald-500 transition-all shadow-sm"
                    />
                  </FormControl>
                  <FormMessage className="text-xs ml-1" />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin"></i>
                    Signing in...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </div>

            <p className="text-center text-slate-500 text-sm font-medium mt-6">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-emerald-600 font-bold hover:underline underline-offset-4 "
              >
                Create Account
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;