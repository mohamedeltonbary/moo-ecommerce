"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyCodePage() {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resetCode: code }),
    });

    if (res.ok) {
      alert("تم التحقق بنجاح");
      router.push("/reset-password");
    } else {
      alert("الكود غير صحيح");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
  <h1 className="text-2xl mb-6">تأكيد الكود</h1>
  <form onSubmit={handleVerify} className="flex flex-col items-center gap-4">
    <input
      type="text"
      placeholder="أدخل الكود"
      className="border p-2 w-72 rounded-md"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      required
    />
    <button
      className="bg-green-600 text-white px-6 py-2 rounded-md w-72 hover:bg-green-700 transition"
    >
      تأكيد
    </button>
  </form>
</div>

  );
}
