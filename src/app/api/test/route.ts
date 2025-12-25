import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Test works!" });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ 
      success: true, 
      received: body 
    });
  } catch (error: any) {
    return NextResponse.json({ 
      error: error.message 
    }, { status: 500 });
  }
}