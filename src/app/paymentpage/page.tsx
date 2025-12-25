// "use client";

// import { useState } from "react";
// import Script from "next/script";
// import { useParams, useRouter } from "next/navigation";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const PaymentPage = () => {
//   const { id } = useParams(); // productId
//   const router = useRouter();

//   const [isProcessing, setIsProcessing] = useState(false);
//   const [price, setPrice] = useState<number>(799); // ideally fetched from API

//   const handlePayment = async () => {
//     setIsProcessing(true);

//     try {
//       // 1️⃣ Create order from backend (backend decides amount)
//       const res = await fetch("/api/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId: id }),
//       });

//       const data = await res.json();

//       if (!data.orderId) {
//         throw new Error("Order creation failed");
//       }

//       // 2️⃣ Razorpay options
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
//         amount: data.amount, // use backend amount
//         currency: "INR",
//         name: "Dieknobeats",
//         description: "Vocal Presets Purchase",
//         order_id: data.orderId,

//         handler: function (response: any) {
//           console.log("Payment success:", response);

//           router.push(`/checkout/success?productId=${id}`);
//         },

//         theme: {
//           color: "#7c3aed",
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (err) {
//       console.error(err);
//       alert("Payment failed. Please try again.");
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
//       <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md w-full text-center">
//         <h1 className="text-3xl font-bold mb-4">Secure Checkout</h1>

//         <p className="text-gray-400 mb-6">
//           You are purchasing:
//         </p>

//         <p className="text-xl font-semibold mb-2">
//           Vocal Presets – Mix Like a Magician
//         </p>

//         <p className="text-2xl font-bold text-cyan-400 mb-8">
//           ₹{price}
//         </p>

//         <button
//           onClick={handlePayment}
//           disabled={isProcessing}
//           className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-600 text-black"
//         >
//           {isProcessing ? "Processing..." : "Pay Now"}
//         </button>
//       </div>

//       <Script src="https://checkout.razorpay.com/v1/checkout.js" />
//     </div>
//   );
// };

// export default PaymentPage;
