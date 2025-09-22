"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    if (res.ok) {
      alert("تم إرسال الكود إلى بريدك الإلكترونى");
      router.push("/verify-code");
    } else {
      alert("حدث خطأ. تأكد من البريد.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
  <h1 className="text-2xl mb-6">نسيت كلمة المرور</h1>
  <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
    <input
      type="email"
      placeholder="أدخل بريدك الإلكترونى"
      className="border p-2 w-96 rounded-md"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <button
      disabled={loading}
      className="bg-blue-600 text-white px-6 py-2 rounded-md w-72"
    >
      {loading ? "جارى الإرسال..." : "إرسال"}
    </button>
  </form>
</div>

  );
}
