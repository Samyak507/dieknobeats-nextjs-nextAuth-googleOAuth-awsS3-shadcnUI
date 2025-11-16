"use client";

import React, { useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const PaymentPage = () => {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const courseId = searchParams.get("courseId");

  const amount = Number(price ?? 0); // Convert to number

  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    if (!amount) return alert("Invalid course price!");

    setIsProcessing(true);

    try {
      const response = await fetch("/api/create-order", {
        method: "POST",
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: amount * 100,
        currency: "INR",
        name: "Dieknobeats",
        description: "Course Payment",
        order_id: data.orderId,

        handler: function (response: any) {
          console.log("Payment successful:", response);
          alert("Payment Successful!");

          window.location.href = `/course/${courseId}`;
        },

        theme: {
          color: "#3b82f6",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed. Try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Payment Page</h1>
      <p className="text-xl mb-6">Amount to pay: <span className="text-cyan-400">₹{amount}</span></p>

      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-600 text-black font-bold rounded-lg"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>

      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </div>
  );
};

export default PaymentPage;
