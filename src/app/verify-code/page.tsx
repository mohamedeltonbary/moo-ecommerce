"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function VerifyCodePage() {
  const [code, setCode] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true); // ✅ يبدأ loading

    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resetCode: code }),
        },
      );

      if (res.ok) {
        toast.success("تم التحقق بنجاح", {
          duration: 2000,
          position: "top-center",
          style: {
            background: "#22c55e",
            color: "#fff",
          },
        });

        setTimeout(() => {
          router.push("/reset-password");
        }, 2000);
      } else {
        toast.error("الكود غير صحيح", {
          duration: 2000,
          position: "top-center",
          style: {
            background: "#ef4444",
            color: "#fff",
          },
        });
      }
    } catch (error) {
      toast.error("حصل خطأ", { position: "top-center" });
    } finally {
      setLoading(false); //  يقفل loading
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 text-center">
      <h1 className="text-2xl mb-6">تأكيد الكود</h1>
      <form
        onSubmit={handleVerify}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          placeholder="أدخل الكود"
          className="border p-2 w-72 rounded-md"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button
          disabled={loading}
          className={`bg-green-600 text-white px-6 py-2 rounded-md w-72 transition 
          ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 cursor-pointer"}`}
        >
          {loading ? "جاري التحقق..." : "تأكيد"}
        </button>
      </form>
    </div>
  );
}
