"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Script from "next/script";
import Image from "next/image";
import { createRazorpayOrder } from "../../actions/create-order";
import { verifyPayment } from "../../actions/verify-payment";

declare global {
    interface Window {
        Razorpay: any;
    }
}

const products = [
    {
        id: "vocal-presets-pack",
        title: "Vocal Presets – Mix Like a Magician",
        price: 799,
        image: {
            src: "/images/product1.jpg", // your uploaded image
        },
        shortDescription:
            "Professional vocal presets crafted for clean, powerful, studio-quality mixes.",
    },
];

export default function CheckoutPage() {
    const { id } = useParams();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [razorpayLoaded, setRazorpayLoaded] = useState(false);

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Product not found</h1>
                    <button
                        onClick={() => router.push("/")}
                        className="px-6 py-2 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-500 transition-colors"
                    >
                        Go Home
                    </button>
                </div>
            </div>
        );
    }

    const handlePayment = async () => {
        if (!razorpayLoaded) {
            alert("Payment system is loading. Please try again in a moment.");
            return;
        }

        try {
            setLoading(true);

            console.log("🚀 Creating order...");

            const result = await createRazorpayOrder(product.id);

            if (!result.success) {
                throw new Error(result.error || "Failed to create order");
            }

            console.log("✅ Order created:", result.orderId);

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: result.amount,
                currency: result.currency,
                name: "Your Store Name",
                description: product.title,
                order_id: result.orderId,
                handler: async function (response: any) {
                    console.log("✅ Payment response received:", response);

                    try {
                        // Verify the payment
                        const verification = await verifyPayment(
                            response.razorpay_order_id,
                            response.razorpay_payment_id,
                            response.razorpay_signature,
                            product.id
                        );

                        if (!verification.success) {
                            alert("Payment verification failed! Please contact support.");
                            setLoading(false);
                            return;
                        }

                        console.log("✅ Payment verified");

                        // Trigger automatic download using window.open instead
                        if (verification.downloadUrl) {
                            console.log("📥 Starting download...");

                            // Method 1: Open in new tab (recommended)
                            window.open(verification.downloadUrl, '_blank');

                            console.log("✅ Download initiated");
                        }

                        alert(
                            `Payment Successful!\n\nYour download has started.\nIf it doesn't start automatically, check the new tab.`
                        );

                        // Redirect to success page
                        setTimeout(() => {
                            router.push(
                                `/payment-success?payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&download_url=${encodeURIComponent(verification.downloadUrl || '')}`
                            );
                        }, 1500);
                    } catch (verifyError: any) {
                        console.error("❌ Verification error:", verifyError);
                        alert("Payment verification failed. Please contact support.");
                        setLoading(false);
                    }
                },
                prefill: {
                    name: "",
                    email: "",
                    contact: "",
                },
                notes: {
                    product_id: product.id,
                },
                theme: {
                    color: "#06b6d4",
                },
                modal: {
                    ondismiss: function () {
                        console.log("❌ Payment cancelled by user");
                        setLoading(false);
                    },
                },
            };

            const rzp = new window.Razorpay(options);

            rzp.on("payment.failed", function (response: any) {
                console.error("❌ Payment failed:", response.error);
                alert(
                    `Payment Failed\n\n${response.error.description}\n\nReason: ${response.error.reason}`
                );
                setLoading(false);
            });

            rzp.open();
        } catch (error: any) {
            console.error("❌ Payment error:", error);
            alert(`Error: ${error.message || "Something went wrong"}`);
            setLoading(false);
        }
    };

    return (
        <>
            <Script
                src="https://checkout.razorpay.com/v1/checkout.js"
                onLoad={() => {
                    console.log("✅ Razorpay script loaded");
                    setRazorpayLoaded(true);
                }}
                onError={() => {
                    console.error("❌ Failed to load Razorpay script");
                    alert("Failed to load payment system. Please refresh the page.");
                }}
            />

            <section className="min-h-screen bg-black flex items-center justify-center px-4 py-8">
                <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-6 text-white shadow-2xl">
                    <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-gray-800">
                        <img
                            src={product.image.src}
                            alt={product.title}
                            className="rounded-2xl border border-gray-800"
                        />
                    </div>

                    <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

                    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                        {product.shortDescription}
                    </p>

                    <div className="flex justify-between items-center mb-6 p-4 bg-gray-800 rounded-lg">
                        <span className="text-gray-400 font-medium">Total Amount</span>
                        <span className="text-3xl font-bold text-cyan-400">
                            ₹{product.price}
                        </span>
                    </div>

                    <ul className="text-sm text-gray-400 mb-6 space-y-2">
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            Secure payment via Razorpay
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            Instant digital delivery
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400">✓</span>
                            Automatic download after payment
                        </li>
                    </ul>

                    <button
                        onClick={handlePayment}
                        disabled={loading || !razorpayLoaded}
                        className="w-full py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 text-black hover:from-cyan-500 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                        {loading
                            ? "Processing..."
                            : !razorpayLoaded
                                ? "Loading Payment System..."
                                : "Pay & Download"}
                    </button>

                    <p className="text-center text-xs text-gray-500 mt-4">
                        By proceeding, you agree to our Terms & Conditions
                    </p>
                </div>
            </section>
        </>
    );
}