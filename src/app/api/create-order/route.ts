import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { price, courseId } = body;

    if (!price || !courseId) {
      return NextResponse.json(
        { error: "Missing required fields: price or courseId" },
        { status: 400 }
      );
    }

    const order = await razorpay.orders.create({
      amount: Number(price) * 1,
      currency: "INR",
      receipt: `receipt_${courseId}_${Date.now()}`,
    });

    return NextResponse.json(
      {
        success: true,
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order", details: error.message },
      { status: 500 }
    );
  }
}
