
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
      const { data } = await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
      console.log(data);
      toast.success(data.message,{
        position:'top-center',
        duration:2000
      })

      router.push("/login")
    }
    catch (error) {
      toast.error(error.response.data.message,{
        position:'top-center',
        duration:2000
      })


    }
  }

  return (
    <div className="w-full md:w-[80%]  mx-auto my-10 p-6 bg-white rounded-md shadow-lg">
      <h1 className="text-2xl font-bold mb-6  text-gray-800">
        Register Now:
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="" {...field} />
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
                <FormLabel>email</FormLabel>
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
                <FormLabel>password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="" {...field} />
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
                <FormLabel>rePassword</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="" {...field} />
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
                <FormLabel>phone</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-lime-600 text-white py-2 px-4 rounded hover:bg-lime-800"
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

