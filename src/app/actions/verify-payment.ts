"use server";

import Razorpay from "razorpay";
import crypto from "crypto";
import { generateDownloadLink } from "./create-download-link";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function verifyPayment(
  orderId: string,
  paymentId: string,
  signature: string,
  productId: string
) {
  try {
    console.log("🔍 Verifying payment...", { orderId, paymentId });

    // Verify signature
    const text = orderId + "|" + paymentId;
    const generated_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest("hex");

    const isValid = generated_signature === signature;

    if (!isValid) {
      console.error("❌ Invalid signature");
      return {
        success: false,
        error: "Invalid payment signature",
      };
    }

    // Fetch payment details from Razorpay
    const payment = await razorpay.payments.fetch(paymentId);

    console.log("✅ Payment verified:", {
      orderId,
      paymentId,
      amount: payment.amount,
      status: payment.status,
    });

    // Generate download link
    console.log("🔗 Generating download link...");
    const downloadLinkResult = await generateDownloadLink(
      orderId,
      paymentId,
      productId
    );

    if (!downloadLinkResult.success) {
      console.error("❌ Failed to generate download link");
      return {
        success: false,
        error: "Failed to generate download link",
      };
    }

    console.log("✅ Download link generated");

    return {
      success: true,
      paymentId,
      amount: payment.amount,
      status: payment.status,
      downloadUrl: downloadLinkResult.downloadUrl,
    };
  } catch (error: any) {
    console.error("❌ Payment verification failed:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}