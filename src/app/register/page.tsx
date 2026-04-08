"use client";
import React, { use } from "react";
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
import { z } from "zod";
import { registerSchema, RegisterSchemaType } from "@/schema/register.schame";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
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
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signup",
        values,
      );
      console.log(data);
      toast.success(data.message, {
        position: "top-center",
        duration: 2000,
        style: {
          background: "#22c55e",
          color: "#fff",
        },
      });

      router.push("/login");
    } catch (error) {
      let message = "Something went wrong";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      toast.error(message, {
        position: "top-center",
        duration: 2000,
        style: {
          background: "#ef4444",
          color: "#fff",
        },
      });
    }
  }

  return (
    <div className="w-full md:w-[80%]  mx-auto my-10 p-6 bg-white rounded-md shadow-lg">
      {/* <h1 className="text-3xl font-bold mb-2 text-orange-700"> */}
      <h1 className="text-2xl font-bold text-lime-600 tracking-tight mb-1">
        Create Account
      </h1>
      <p className="text-gray-500 mb-6">Enter your details to get started</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder=""
                    {...field}
                    className="h-9"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder=""
                    {...field}
                    className="h-9"
                  />
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
                  <Input
                    type="password"
                    placeholder=""
                    {...field}
                    className="h-9"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder=""
                    {...field}
                    className="h-9"
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="" {...field} className="h-9" />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-lime-600 text-white py-2.5 px-5 rounded-md font-medium hover:bg-lime-700 transition-colors duration-300 cursor-pointer"
            >
              Register
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Register;
