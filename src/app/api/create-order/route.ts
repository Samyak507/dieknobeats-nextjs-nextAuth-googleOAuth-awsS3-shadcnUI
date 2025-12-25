import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const PRODUCTS: Record<string, number> = {
  "vocal-presets-pack": 799,
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    console.log("✅ Request received:", body);

    const { productId } = body;

    if (!productId) {
      return NextResponse.json(
        { error: "Missing productId" },
        { status: 400 }
      );
    }

    const price = PRODUCTS[productId];

    if (!price) {
      return NextResponse.json(
        { error: "Invalid productId" },
        { status: 400 }
      );
    }

    console.log("Creating Razorpay order for ₹", price);

    const order = await razorpay.orders.create({
      amount: price * 100,
      currency: "INR",
      receipt: `receipt_${productId}_${Date.now()}`,
    });

    console.log("✅ Order created:", order.id);

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: any) {
    console.error("❌ Error creating order:", error);
    
    return NextResponse.json(
      { 
        error: "Failed to create order",
        message: error.message 
      },
      { status: 500 }
    );
  }
}