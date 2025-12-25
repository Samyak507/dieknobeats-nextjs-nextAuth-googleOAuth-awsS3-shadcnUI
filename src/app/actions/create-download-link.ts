"use server";

import crypto from "crypto";

// Generate a secure, time-limited download token
export async function generateDownloadLink(
  orderId: string,
  paymentId: string,
  productId: string
) {
  try {
    // Create a secure token
    const token = crypto
      .createHash("sha256")
      .update(`${orderId}-${paymentId}-${process.env.RAZORPAY_KEY_SECRET}`)
      .digest("hex");

    // In production, save this to database with expiry time
    // For now, we'll encode the data in the URL
    const downloadData = Buffer.from(
      JSON.stringify({
        orderId,
        paymentId,
        productId,
        timestamp: Date.now(),
      })
    ).toString("base64");

    const downloadUrl = `/api/download?token=${token}&data=${downloadData}`;

    return {
      success: true,
      downloadUrl,
      token,
    };
  } catch (error: any) {
    console.error("❌ Failed to generate download link:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}