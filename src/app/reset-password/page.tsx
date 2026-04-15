"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      "https://ecommerce.routemisr.com/api/v1/auth/resetPassword",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      },
    );

    if (res.ok) {
      toast.success("تم تغيير كلمة المرور بنجاح", {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#22c55e",
          color: "#fff",
        },
      });

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } else {
      toast.error("حدث خطأ. حاول مرة أخرى", {
        duration: 2000,
        position: "top-center",
        style: {
          background: "#ef4444",
          color: "#fff",
        },
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl mb-6">إعادة تعيين كلمة المرور</h1>
      <form onSubmit={handleReset} className="flex flex-col items-center gap-4">
        <input
          type="email"
          placeholder="البريد الإلكترونى"
          className="border p-2 w-72 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="كلمة المرور الجديدة"
          className="border p-2 w-72 rounded-md"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md w-72 hover:bg-blue-700 transition cursor-pointer">
          تغيير كلمة المرور
        </button>
      </form>
    </div>
  );
}
