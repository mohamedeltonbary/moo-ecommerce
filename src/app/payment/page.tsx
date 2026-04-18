'use client';

import { Button } from "@/components/ui/button";
import { CashPaymentAction } from "@/paymentAction/cashpayment";
import { onlinePaymentAction } from "@/paymentAction/onlinePayment";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { toast } from "sonner";
import { useCartContext } from "@/context/cartcontext";

const Payment = () => {
  const { cardId, afterPayment } = useCartContext();
  const router = useRouter();

  const details = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);

  const [isFormValid, setIsFormValid] = useState(false);
  const [loadingType, setLoadingType] = useState<"cash" | "online" | null>(null);

  const checkFormValidity = () => {
    const isValid =
      details.current?.value.trim() !== "" &&
      phone.current?.value.trim() !== "" &&
      city.current?.value.trim() !== "";
    setIsFormValid(isValid);
  };

  const handleChange = () => {
    checkFormValidity();
  };

  async function cashpayment() {
    if (!isFormValid || loadingType) return;
    const values = {
      shippingAddress: {
        details: details.current?.value.trim() || "",
        phone: phone.current?.value.trim() || "",
        city: city.current?.value.trim() || "",
      },
    };
    try {
      setLoadingType("cash");
      const data = await CashPaymentAction(cardId, values);
      toast.success(data.status || "Cash order placed successfully", {
        position: "top-center",
        duration: 1500,
        style: { background: "#22c55e", color: "#fff" },
      });
      afterPayment();
      router.push("/allorders");
    } catch (error) {
      toast.error("Cash payment failed", { position: "top-center" });
      console.log(error);
    } finally {
      setLoadingType(null);
    }
  }

  async function onlinePayment() {
    if (!isFormValid || loadingType) return;
    const values = {
      shippingAddress: {
        details: details.current?.value.trim() || "",
        phone: phone.current?.value.trim() || "",
        city: city.current?.value.trim() || "",
      },
    };
    try {
      setLoadingType("online");
      const data = await onlinePaymentAction(cardId, values);
      if (data.status === "success") {
        window.location.href = data.session.url;
      } else {
        toast.error("Online payment failed", { position: "top-center" });
      }
    } catch (error) {
      toast.error("Online payment failed", { position: "top-center" });
      console.log(error);
    } finally {
      setLoadingType(null);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-100">
        
        {/* Header الفخم */}
        <div className="bg-emerald-600 p-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight">Checkout</h1>
          <p className="text-emerald-100 text-sm mt-2 font-light">Secure your order by providing shipping info</p>
        </div>

        <div className="p-8 space-y-6">
          
          {/* Details Input */}
          <div className="flex flex-col">
            <label htmlFor="details" className="text-sm font-bold text-slate-700 mb-2 ml-1">
              Address Details
            </label>
            <input
              ref={details}
              type="text"
              id="details"
              placeholder="e.g. 12 Street, Building 4"
              onChange={handleChange}
              className="border-2 border-slate-100 rounded-2xl p-3 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone Input */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-bold text-slate-700 mb-2 ml-1">
                Phone Number
              </label>
              <input
                ref={phone}
                type="tel"
                id="phone"
                placeholder="01xxxxxxxxx"
                onChange={handleChange}
                className="border-2 border-slate-100 rounded-2xl p-3 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:outline-none transition-all duration-300"
              />
            </div>

            {/* City Input */}
            <div className="flex flex-col">
              <label htmlFor="city" className="text-sm font-bold text-slate-700 mb-2 ml-1">
                City
              </label>
              <input
                ref={city}
                type="text"
                id="city"
                placeholder="Cairo, Giza..."
                onChange={handleChange}
                className="border-2 border-slate-100 rounded-2xl p-3 bg-slate-50 focus:bg-white focus:border-emerald-500 focus:outline-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Payment Method Selector Style Buttons */}
          <div className="pt-6 border-t border-slate-100 space-y-4">
            <h3 className="text-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Select Payment Method</h3>
            
            <div className="flex flex-col gap-3">
              {/* Online Button (Emerald) */}
              <Button
                onClick={onlinePayment}
                className="w-full h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-emerald-100 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale cursor-pointer"
                disabled={!isFormValid || loadingType !== null}
              >
                {loadingType === "online" ? (
                  <span className="flex items-center gap-2">
                     <i className="fa-solid fa-spinner animate-spin"></i> Redirecting...
                  </span>
                ) : (
                  <span className="flex items-center gap-2 italic underline decoration-white/30 decoration-2 underline-offset-4">
                    <i className="fa-solid fa-credit-card"></i> Online Payment
                  </span>
                )}
              </Button>

              {/* Cash Button (Slate/Dark) */}
              <Button
                onClick={cashpayment}
                className="w-full h-14 bg-slate-800 hover:bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-lg shadow-slate-200 transition-all active:scale-95 disabled:opacity-50 disabled:grayscale cursor-pointer"
                disabled={!isFormValid || loadingType !== null}
              >
                {loadingType === "cash" ? (
                   <span className="flex items-center gap-2">
                    <i className="fa-solid fa-spinner animate-spin"></i> Processing...
                   </span>
                ) : (
                  <span className="flex items-center gap-2 italic underline decoration-white/30 decoration-2 underline-offset-4">
                    <i className="fa-solid fa-truck-fast"></i> Cash on Delivery
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;