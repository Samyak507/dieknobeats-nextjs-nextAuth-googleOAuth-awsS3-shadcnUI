import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

// Map product IDs to file paths
const PRODUCT_FILES: Record<string, string> = {
  "vocal-presets-pack": "/products/@_dieknobeats-20251225T052615Z-1-001.zip",
  // Add more products here
};

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const token = searchParams.get("token");
    const data = searchParams.get("data");

    if (!token || !data) {
      return NextResponse.json(
        { error: "Invalid download link" },
        { status: 400 }
      );
    }

    // Decode the data
    const decodedData = JSON.parse(
      Buffer.from(data, "base64").toString("utf-8")
    );

    const { orderId, paymentId, productId, timestamp } = decodedData;

    // Check if link is expired (24 hours)
    const twentyFourHours = 24 * 60 * 60 * 1000;
    if (Date.now() - timestamp > twentyFourHours) {
      return NextResponse.json(
        { error: "Download link has expired" },
        { status: 403 }
      );
    }

    // Get the file path
    const relativeFilePath = PRODUCT_FILES[productId];

    if (!relativeFilePath) {
      return NextResponse.json(
        { error: "Product file not found" },
        { status: 404 }
      );
    }

    // Construct absolute file path
    const filePath = path.join(process.cwd(), "public", relativeFilePath);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error("File not found:", filePath);
      return NextResponse.json(
        { error: "File not found on server" },
        { status: 404 }
      );
    }

    // Read the file
    const fileBuffer = fs.readFileSync(filePath);

    // Get filename
    const fileName = path.basename(filePath);

    // Return file as download
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Length": fileBuffer.length.toString(),
      },
    });
  } catch (error: any) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Failed to download file" },
      { status: 500 }
    );
  }
}