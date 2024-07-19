import { connectToDatabase } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectToDatabase();
    return NextResponse.json({ message: "Hello from the API!" });
  } catch (error) {
    console.log(error);
    throw new Error("Error !");
  }
};
