"use client";
import { Button } from "@/components/ui/button";
import { CashPaymentAction } from "@/paymentAction/cashpayment";
import { onlinePaymentAction } from "@/paymentAction/onlinePayment";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { toast } from "sonner";
import { useCartContext } from "@/context/cartcontext";

const Payment = () => {
  // const { cardId, afterPayment } = useContext(CartContext);
  const { cardId, afterPayment } = useCartContext();
  const router = useRouter();
  // const details = useRef("");
  // const phone = useRef("");
  // const city = useRef("");
  const details = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const city = useRef<HTMLInputElement>(null);

  async function cashpayment() {
    const values = {
      shippingAddress: {
        // details: details.current.value,
        // phone: phone.current.value,
        // city: city.current.value,
        details: details.current?.value || "",
        phone: phone.current?.value || "",
        city: city.current?.value || "",
      },
    };
    try {
      const data = await CashPaymentAction(cardId, values);
      console.log(data);
      toast.success(data.status, {
        position: "top-center",
        duration: 1000,
        style: {
          background: "#22c55e",
          color: "#fff",
        },
      });
      afterPayment();
      router.push("/allorders");
    } catch (error) {
      console.log("Payment failed");
    }
    console.log(values);
  }
  async function onlinePayment() {
    const values = {
      shippingAddress: {
        // details: details.current.value,
        // phone: phone.current.value,
        // city: city.current.value,
        details: details.current?.value || "",
        phone: phone.current?.value || "",
        city: city.current?.value || "",
      },
    };
    try {
      const data = await onlinePaymentAction(cardId, values);
      console.log(data);
      if (data.status === "success") {
        window.location.href = data.session.url;
      }
      // toast.success(data.status, {
      //     position: "top-center",
      //     duration: 1000
      // })
      // afterPayment()
      // router.push("/allorder")
    } catch (error) {
      console.log("Payment failed");
    }
    console.log(values);
  }

  return (
    <div className="w-full md:w-1/2 mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h1 className="font-heading text-3xl font-semibold text-center mb-6 text-orange-700">
        Payment
      </h1>

      <div className="flex flex-col mb-4">
        <label htmlFor="details" className="mb-1 font-medium text-gray-700">
          Details
        </label>
        <input
          ref={details}
          type="text"
          id="details"
          placeholder="Enter address details"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label htmlFor="phone" className="mb-1 font-medium text-gray-700">
          Phone
        </label>
        <input
          ref={phone}
          type="tel"
          id="phone"
          placeholder="Enter phone number"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="flex flex-col mb-6">
        <label htmlFor="city" className="mb-1 font-medium text-gray-700">
          City
        </label>
        <input
          ref={city}
          type="text"
          id="city"
          placeholder="Enter city"
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      <div className="flex justify-between">
        <Button
          onClick={cashpayment}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
        >
          Cash Payment
        </Button>
        <Button
          onClick={onlinePayment}
          className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg"
        >
          Online Payment
        </Button>
      </div>
    </div>
  );
};

export default Payment;
