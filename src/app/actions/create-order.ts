"use server";

import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const PRODUCTS: Record<string, number> = {
  "vocal-presets-pack": 1,
};

export async function createRazorpayOrder(productId: string) {
  try {
    console.log("Creating order for:", productId);
    
    const price = PRODUCTS[productId];

    if (!price) {
      throw new Error("Invalid product");
    }

    const order = await razorpay.orders.create({
      amount: price * 100,
      currency: "INR",
      receipt: `receipt_${productId}_${Date.now()}`,
    });

    console.log("✅ Order created:", order.id);

    return {
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    };
  } catch (error: any) {
    console.error("❌ Order creation failed:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}