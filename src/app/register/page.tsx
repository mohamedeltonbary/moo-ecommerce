"use client";
import React, { useState } from "react"; // ضفنا useState للـ Loading
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
import { registerSchema, RegisterSchemaType } from "@/schema/register.schame";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false); // حالة التحميل

  const form = useForm<RegisterSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema),
  });

  async function handleSubmit(values: RegisterSchemaType) {
    try {
      setIsLoading(true); // ابدأ التحميل
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values,
      );
      
      toast.success("Account created successfully!", {
        position: "top-center",
        duration: 2000,
        style: { background: "#10b981", color: "#fff" },
      });

      router.push("/login");
    } catch (error) {
      let message = "Something went wrong";
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      }
      toast.error(message, {
        position: "top-center",
        style: { background: "#ef4444", color: "#fff" },
      });
    } finally {
      setIsLoading(false); // وقف التحميل
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 bg-slate-50/50">
      <div className="w-full max-w-[550px] bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100">
        
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-black text-slate-800 tracking-tight mb-2">
            Create <span className="text-emerald-600">Account</span>
          </h1>
          <p className="text-slate-500 font-medium">Join us and start shopping the best products</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-5">
            
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-slate-700 ml-1">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="h-12 rounded-2xl border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all"
                    />
                  </FormControl>
                  <FormMessage className="text-xs ml-1" />
                </FormItem>
              )}
            />

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
                      className="h-12 rounded-2xl border-slate-200 focus:border-emerald-500 transition-all"
                    />
                  </FormControl>
                  <FormMessage className="text-xs ml-1" />
                </FormItem>
              )}
            />

            {/* Password Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-slate-700 ml-1">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          className="h-12 rounded-2xl border-slate-200 focus:border-emerald-500 transition-all"
                        />
                      </FormControl>
                      <FormMessage className="text-xs ml-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rePassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-slate-700 ml-1">Confirm</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          className="h-12 rounded-2xl border-slate-200 focus:border-emerald-500 transition-all"
                        />
                      </FormControl>
                      <FormMessage className="text-xs ml-1" />
                    </FormItem>
                  )}
                />
            </div>

            {/* Phone Field */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-slate-700 ml-1">Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="01xxxxxxxxx" 
                      {...field} 
                      className="h-12 rounded-2xl border-slate-200 focus:border-emerald-500 transition-all" 
                    />
                  </FormControl>
                  <FormMessage className="text-xs ml-1" />
                </FormItem>
              )}
            />

            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin"></i>
                    Processing...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </div>

            <p className="text-center text-slate-500 text-sm font-medium mt-4">
              Already have an account?{" "}
              <span 
                className="text-emerald-600 font-bold cursor-pointer hover:underline underline-offset-4"
                onClick={() => router.push("/login")}
              >
                Sign In
              </span>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Register;  