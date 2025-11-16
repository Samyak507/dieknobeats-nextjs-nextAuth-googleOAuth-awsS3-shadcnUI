import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseName, price } = body;

    // ✅ Validate Razorpay Signature (VERY IMPORTANT)
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest("hex");

    if (razorpay_signature !== expectedSign) {
      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 }
      );
    }

    // ✅ Payment Verified — Send Email Now
    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Dieknobeats",
        link: "",
        logo: "",
      },
    });

    const emailTemplate = {
      body: {
        name: session.user.name || "User",
        intro: `✅ Payment Successful!`,
        table: {
          data: [
            {
              Course: courseName,
              Amount: `${price} INR`,
              PaymentID: razorpay_payment_id,
            },
          ],
        },
        outro: "Thank you for purchasing the course. Happy Learning!",
      },
    };

    const emailBody = mailGenerator.generate(emailTemplate);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: `Sizo Develops <${process.env.EMAIL_FROM}>`,
      to: session.user.email,
      subject: "Payment Successful - Course Purchase Confirmation",
      html: emailBody,
    });

    return NextResponse.json(
      { message: "Payment verified and email sent successfully" },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Payment verification error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
