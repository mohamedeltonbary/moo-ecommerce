"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
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

  const form = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  async function handleSubmit(values: LoginSchemaType) {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });
    console.log(res);

    if (res?.error) {
      toast.error(res.error, {
        position: "top-center",
        duration: 1000,
        style: { background: "#ef4444", color: "#fff" },
      });
    }

    if (res?.ok) {
      toast.success("Login Success", {
        position: "top-center",
        duration: 1500,
        style: { background: "#22c55e", color: "#fff" },
        // هنا نعمل تحديث لكل الـ server components زي Navbar
        onAutoClose: () => router.refresh(),
      });
    }
  }

  return (
    <div className="w-full md:w-[80%] mx-auto my-10 p-6 bg-white rounded-md shadow-lg">
      <h1 className="text-2xl font-bold text-lime-600 tracking-tight mb-6">
        Login Now:
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-lime-600 text-white py-2 px-4 rounded hover:bg-lime-800 cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
      </Form>

      <div className="text-center mt-4">
        <Link href="/forgot-password" className="text-blue-600 hover:underline">
          Forgot your password?
        </Link>
      </div>
    </div>
  );
};

export default Login;